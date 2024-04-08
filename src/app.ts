import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes/index';
import dbConnect from './config/mongo';
//Se habilita el puerto de nuestra app
//Si no esta en el archivo sería el 8081
const PORT=process.env.PORT || 8081;
///Se crea una aplicación
const app=express();
// Los cors nos dan permiso a externos a conectarse al api
app.use(cors());
//Decir que todas la peticiones son en json
app.use(express.json());
//Se crean las rutas
app.use(router);
//Conectar base de datos
dbConnect().then(()=>console.log("Conectado carajo eso"));
//Mostrar mensaje
app.listen(PORT,()=>
{console.log(`Corriendo en localhost:${PORT}`)})