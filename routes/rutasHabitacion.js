import express from 'express'

import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'

let controladorHabitacion = new ControladorHabitacion()

export let rutaHabitacion = express.Router() 


rutaHabitacion.get('/api/v1/habitacion', controladorHabitacion.buscarHabitaciones)

rutaHabitacion.get('/api/v1/habitacion:id', controladorHabitacion.buscarIdHabitacion)

rutaHabitacion.post('/api/v1/habitacion', controladorHabitacion.registrarHabitacion)

rutaHabitacion.put('/api/v1/habitacion', controladorHabitacion.editarHabitacion)

rutaHabitacion.delete('/api/v1/habitacion', controladorHabitacion.eliminarHabitacion)
