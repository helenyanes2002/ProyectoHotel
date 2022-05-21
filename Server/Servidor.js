import express from 'express'
import { rutacliente } from '../routes/rutasClientes.js'
import { rutaHabitacion } from '../routes/rutasHabitacion.js'
import {conectarConBD} from '../database/conexion.js'

export class Servidor{

     constructor(){
        this.app = express()
        this.conectarBD()
        this.llamarAuxiliares()
        this.atenderPeticiones()
     }

     despertarServidor(){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`SERVIDOR ENCENDIDO EN ${process.env.PORT}`)
        })    
     }

     atenderPeticiones(){
        this.app.use('/', rutaHabitacion)
        this.app.use('/', rutacliente)
     }

     llamarAuxiliares(){
        this.app.use(express.json())
     }

      conectarBD(){
         conectarConBD()
      }


} 