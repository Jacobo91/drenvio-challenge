import mongoose from "mongoose";

const specialPriceSchema = new mongoose.Schema({
    nombre_producto: {
        type: String,
        required: true
    },
    precio_especial_personal: {
        type: Number,
        required: true
    }
});

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        equired: true
    },
    nombre: {
        type: String,
        equired: true
    },
    metadata: {
        type: Object
    },
    precios_especiales: {
        type: [specialPriceSchema],
        default: undefined
    }
});

const User = mongoose.model('User', userSchema);

export default User
