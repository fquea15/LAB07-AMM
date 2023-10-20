const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

// Obtener todas las películas
router.get('/', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Crear una nueva película
router.post('/', async (req, res) => {
  const pelicula = new Pelicula({
    titulo: req.body.titulo,
    director: req.body.director,
    anio: req.body.anio,
    imagen: req.body.imagen  // Agregamos el campo de imagen
  });

  try {
    const savedPelicula = await pelicula.save();
    res.json(savedPelicula);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
