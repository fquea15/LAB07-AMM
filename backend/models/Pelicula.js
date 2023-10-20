const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  titulo: String,
  director: String,
  anio: Number,
  imagen: String  // Nuevo campo para la URL de la imagen
});

module.exports = mongoose.model('Pelicula', peliculaSchema);
