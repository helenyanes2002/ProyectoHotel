import mongoose from "mongoose"

export class ControladorCliente{


    constructor(){}
    
    buscarClientes(request, response){
        let datos = [{nombre:"Helen", edad:20},{nombre:"Ana", edad:34}]
        
        try{
            response.status(200).json({
                mensaje: "Exito buscando los datos de clientes",
                data: datos,
                estado: true
            })
        }
        catch(error){
            response.status(400).json({
                mensaje: "ERROR" + error,
                data: datos,
                estado: false
            })
        }
        
    }


    buscarIdCliente(request, response){
        let datos = [{nombre:"Helen", edad:20}]
        let id = request.params.id
        console.log(id)
        try{
            response.status(200).json({
                mensaje: "Exito buscando los datos " + id,
                data: datos,
                estado: true
            })
        }
        catch(error){
            response.status(400).json({
                mensaje: "ERROR" + error,
                data: [],
                estado: false
            })
        }

    }


    registrarCliente(request, response){}


    editarCliente(request, response){}


    eliminarCliente(request, response){}

}