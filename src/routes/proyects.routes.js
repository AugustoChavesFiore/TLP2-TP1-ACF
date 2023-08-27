import {Router} from 'express';
import { actualizarProyect, crearProyects,eliminarProyects,obtenerProyect,obtenerProyects } from '../controllers/proyects.controller.js';
const routesProyects=Router();

routesProyects.get('/obtenerProyects/:userId',obtenerProyects);
routesProyects.get('/obtenerProyect/:id/:userId',obtenerProyect);
routesProyects.post('/createProyects/:userId',crearProyects);
routesProyects.put('/updateProyect/:id/:userId',actualizarProyect);
routesProyects.delete('/deleteProyect/:id/:userId',eliminarProyects);
export default routesProyects;