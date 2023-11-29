import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";


const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Replace with the actual origin of your frontend application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Adjust to the HTTP methods you need
    credentials: true, // If you need to send credentials with the request
}));

app.get('/products', async (req, res) => {
    try {
        const productsInStock = await Product.find({$or: [
            { enStock: true },
            { existencia: { $gt: 0 } } 
        ]});
        return res.json(productsInStock);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});

app.get('/users', async(req, res) => {
    try {
        const response = await User.find();
        return res.json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message })
    }
});

app.get('/price/:user_id/:nombre_producto', async (req, res) => {
    const { user_id, nombre_producto } = req.params;

    try {
        const user = await User.findOne({ id: user_id, "metadata.precios_especiales.nombre_producto": nombre_producto });
        if (!user || !user.metadata || !user.metadata.precios_especiales) {
            const regularPrice = await Product.findOne({ nombre: nombre_producto }, { precio_base: 1 });
            if (regularPrice) {
                return res.json({ base_price: regularPrice.precio_base });
            } else {
                return res.status(404).json({ error: 'Product not found' });
            }
        } else {
            const specialPrice = user.metadata.precios_especiales.find(precios_especiales => precios_especiales.nombre_producto === nombre_producto);
            return res.json({ special_price: specialPrice.precio_especial_personal });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


mongoose
.connect(process.env.mongoDBURL)
.then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })