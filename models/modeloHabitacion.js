import mongoose from "mongoose";

const Schema = mongoose.Schema; 

const Habitacion = new Schema({
    nombre :{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    capacidad:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagen:{
        type:String,
        required:true
    }
})

export const modeloHabitacion = mongoose.model('habitaciones', Habitacion)