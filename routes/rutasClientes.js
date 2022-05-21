import express from 'express'

import {ControladorCliente} from '../Controllers/ControladorCliente.js'

let controladorCliente = new ControladorCliente()

export let rutacliente = express.Router() 


rutacliente.get('/api/v1/cliente', controladorCliente.buscarClientes)

rutacliente.get('/api/v1/cliente:id', controladorCliente.buscarIdCliente)

rutacliente.post('/api/v1/cliente', controladorCliente.registrarCliente)

rutacliente.put('/api/v1/cliente', controladorCliente.editarCliente)

rutacliente.delete('/api/v1/cliente', controladorCliente.eliminarCliente)
