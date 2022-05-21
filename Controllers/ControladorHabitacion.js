import mongoose from "mongoose"

export class ControladorHabitacion{

    constructor(){} 
    
    buscarHabitaciones(request, response){

        let datos = [{nombre:"Helen", edad:20},{nombre:"Ana", edad:34}]

        try{
            response.status(200).json({
                mensaje: "Exito buscando los datos",
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


    buscarIdHabitacion(request, response){
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


    registrarHabitacion(request, response){



    }


    editarHabitacion(request, response){



    }


    eliminarHabitacion(request, response){





    }

}