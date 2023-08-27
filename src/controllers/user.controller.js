import { usuarios } from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const newUser=async(req,res)=>{
    const{
        name,
        user,
        email,
        password,}=req.body;
    try {
        
        const existeUsuario = await usuarios.findOne({
            where: {
                user,
            }
        });


        if (existeUsuario) {
            throw ({
                status: 400,
                message: 'El usuario ya existe',
            })
        };

        const nuevoUsuario = new usuarios({
            name,
            user,
            email,
            password,
        });

     
        const salt = await bcrypt.genSalt(10);
        nuevoUsuario.password = await bcrypt.hash(password, salt);

        const usuarioCreado = await nuevoUsuario.save();

        if (!usuarioCreado) {
            throw ({
                message: 'Error al crear el usuario',
            })
        }

        return res.status(201).json({
            message: 'Usuario creado exitosamente',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al crear el usuario',
        });
    }
};
export const login=async(req,res)=>{
    const {user, password } = req.body;

    try {
        
        const existeUsuario = await usuarios.findOne({
            where:{ user }
        });
        
        if(!existeUsuario) {
            return res.status(400).json({
                message: 'El Usuario no existe',
            });
        }

        
        const passwordValido = bcrypt.compareSync(password, existeUsuario.password);

        if(!passwordValido) {
            return res.status(400).json({
                message: 'La contraseña no es válida',
            });
        }
        res.status(200).json({
            message: 'Login correcto',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al iniciar sesión',
        });
    }
};
