import {body, checkSchema} from 'express-validator';

export const validaciones2 = checkSchema({
    email:{
        notEmpty:{
            errorMessage:'El email es obligatorio'
        },
        isEmail:{
            errorMessage:'El email debe ser valido'
        }
    },
    password:{
        notEmpty:{
            errorMessage:'El password es obligatorio'
        },
        isLength:{
            errorMessage:'El password debe tener al menos 4 caracteres',
            options:{min:4}
        }
    },
    user:{
        notEmpty:{
            errorMessage:"El usuario  es obligatorio"
        },
        isLength:{
            errorMessage:"El nombre debe tener al menos 2 caracteres.",
            options:{min:2}
        }
    }
})