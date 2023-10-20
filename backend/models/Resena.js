const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
  peliculaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelicula'
  },
  texto: String,
  calificacion: Number
});

module.exports = mongoose.model('Resena', resenaSchema);
