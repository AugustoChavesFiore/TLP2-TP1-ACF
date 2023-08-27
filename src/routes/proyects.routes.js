import {Router} from 'express';
import { actualizarProyect, crearProyects,eliminarProyects,obtenerProyect,obtenerProyects } from '../controllers/proyects.controller.js';
const routes=Router();

routes.get('/obtenerProyects/userId',obtenerProyects);
routes.get('/obtenerProyect/:id/userId',obtenerProyect);
routes.post('/createProyects',crearProyects);
routes.put('/updateProyect/:id/userId',actualizarProyect);
routes.delete('/deleteProyect/:id/userId',eliminarProyects);
export default routes;