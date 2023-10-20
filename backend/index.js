const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const peliculasRouter = require('./routes/peliculas');
const resenasRouter = require('./routes/resenas');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/api_peliculas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(cors());
app.use(express.json());
app.use('/peliculas', peliculasRouter);
app.use('/resenas', resenasRouter);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
