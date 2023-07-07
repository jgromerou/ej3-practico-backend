import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import coloresRouter from './src/routes/colores.routes';

dotenv.config();

//configurar un puerto
//crear una instancia de Express
const app = express();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), () => {
  console.log('Estoy en el puerto ' + app.get('PORT'));
});

//middlewares:
app.use(express.json()); // permite interpretar el formato JSON en un request
app.use(express.urlencoded({ extended: true })); //permite interpretar string y arrays del request
app.use(cors()); //permite conexiones remotas
app.use(morgan('dev')); //me da info extra en la terminal

//cargar un archivo estático
app.use(express.static(path.join(__dirname, '/public')));

//rutas
app.use('/apicolores', coloresRouter);
