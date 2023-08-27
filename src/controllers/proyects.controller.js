import { Proyects } from "../models/proyects.model.js";
import { usuarios } from '../models/user.model.js';
import { tasks } from "../models/task.model.js";
export const obtenerProyects=async(req,res)=>{
    const userId=req.params.userId;
    try {
        const proyects= await Proyects.findAll(
            {
                where:{
                    userId:userId
                },
                include:[
                    {
                        model:tasks,
                        attributes: ['task']
                    },
                    {
                        model: usuarios,
                        attributes: ['user' ]
                    }
                ]
            },
                );
        if(proyects.length===0){
            return res.status(404).json({
                message: 'No hay proyectos'
            })
        }
        res.status(200).json(proyects);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Ocurrio un error al obtener los proyectos'
        })
    }
}
export const obtenerProyect=async(req,res)=>{
    const {id,userId}=req.params;
    try {
        const proyect= await Proyects.findOne({
            where:{
                id,
                userId
            },
            include:[
                {
                    model:tasks,
                    attributes: ['task']
                },
                {
                    model: usuarios,
                    attributes: ['user' ]
                }
            ]
            
        });
        if(!proyect){
            return res.status(404).json({
                message: 'Proyecto no encontrado'
            })
        }
        
        res.status(200).json(proyect);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Ocurrio un error al obtener el proyectos'
        })
    }
}

export const crearProyects=async(req,res)=>{
    const {title}=req.body;
    const userId=req.params.userId;
    try {
        const existeTitle= await Proyects.findOne({
            where:{
                title,
                userId
            }
        });
        if(existeTitle){
            return res.status(400).json({
                message: 'El titulo ya existe'
            })
        };
        const nuevoProyect= new Proyects({
            title,
            userId
        });
        const nuevoProyectGuardado= await nuevoProyect.save();
        if(!nuevoProyectGuardado){
            return res.status(500).json({
                message: 'Error al crear el proyecto'
            })
        };
        return res.status(201).json({
            message: 'Proyecto creado exitosamente',
        });
        
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el proyecto'
        })
    }
}

export const actualizarProyect=async(req,res)=>{
    try {
        const {id,userId}=req.params;
        if(!id || !userId){
            return res.status(400).json({
                message: 'Faltan IDs'
            })
        }
        const proyect= await Proyects.findOne({
            where:{
                id,
                userId
            }
        });
        if(!proyect){
            return res.status(404).json({
                message: 'Proyecto no encontrado'
            })
        }
        await proyect.update(req.body);
        return res.status(200).json({
            message: 'Proyecto actualizado exitosamente'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al actualizar el proyecto'
        })
    }
};

export const eliminarProyects=async(req,res)=>{
    try {
        const {id,userId}=req.params;
        const proyect= await Proyects.findOne({
            where:{
                id,
                userId
            }
        });
        if(!proyect){
            return res.status(404).json({
                message: 'Proyecto no encontrado'
            })
        }
        await proyect.destroy();
        return res.status(200).json({
            message: 'Proyecto eliminado exitosamente'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          message: 'Error al eliminar el proyecto'  
        })
    }
};
