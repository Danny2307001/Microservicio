const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Ruta para crear
router.post('/', async (req, res) => {
  const song = new Song(req.body);
  await song.save();
  res.status(201).json(song);
});

// Ruta para leer
router.get('/', async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

// Ruta para actualizar
router.put('/:id', async (req, res) => {
  const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(song);
});

// Ruta para eliminar
router.delete('/:id', async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
