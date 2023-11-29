import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    precio_base: { 
        type: Number, 
        required: true 
    },
    existencia: {  
        type: Number, 
    },
    enStock: {
        type: Boolean
    },
    
});

const Product = mongoose.model("product", ProductSchema);

export default Product;