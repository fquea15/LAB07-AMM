const express = require('express');
const router = express.Router();
const Resena = require('../models/Resena');

// Obtener todas las reseñas
router.get('/', async (req, res) => {
    try {
        const resenas = await Resena.find();
        res.json(resenas);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// Crear una nueva reseña
router.post('/', async (req, res) => {
    const resena = new Resena({
        peliculaId: req.body.peliculaId,
        texto: req.body.texto,
        calificacion: req.body.calificacion
    });

    try {
        const savedResena = await resena.save();
        res.json(savedResena);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// Obtener todas las reseñas de una película específica
router.get('/pelicula/:peliculaId', async (req, res) => {
    try {
        const reseñas = await Resena.find({ peliculaId: req.params.peliculaId });
        res.json(reseñas);
    } catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;
