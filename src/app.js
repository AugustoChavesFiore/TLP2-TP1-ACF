import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { conectarDB } from './database.js';
import routes from './routes/user.routes.js';


const app=express();

const port= process.env.PORT || 3000;


//middlewares
app.use(morgan('dev'));
app.use(express.json());


app.use(routes);

conectarDB();
app.listen(port,()=>{
    
    console.log(`server on http://localhost:${port}`);
    
})


