import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { conectarDB } from './database.js';
import routes from './routes/user.routes.js';
import routesProyects from './routes/proyects.routes.js';     


const app=express();

const port= process.env.PORT || 3000;


//middlewares
app.use(morgan('dev'));
app.use(express.json());


app.use(routes);
app.use(routesProyects);

conectarDB();
app.listen(port,()=>{
    
    console.log(`server on http://localhost:${port}`);
    
})


