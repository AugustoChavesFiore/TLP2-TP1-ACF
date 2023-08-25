import {Router} from 'express';
import {newUser,login} from '../controllers/user.controller.js';
import { validaciones2 } from '../models/user.schema.js';
import { usuarioValidar } from '../middlewares/validarUsuario.js';
const routes=Router();


routes.post('/newUser',validaciones2,usuarioValidar, newUser);
routes.post('/login',login);


export default routes;