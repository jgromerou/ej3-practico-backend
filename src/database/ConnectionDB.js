import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/paletacolores';

mongoose.connect(uri);

const datosConexion = mongoose.connection;

datosConexion.once('open', () => {
  console.log('BD conectada');
});
