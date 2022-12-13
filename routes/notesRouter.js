const notesRouter = require('express').Router();
const db = require('../db/models');

// GET /notes
notesRouter.get('/', async (req, res) => {
  const result = {
    title: 'Заметки',
    error: null,
    data: null,
  };

  try {
    result.data = await db.Note.findAll();
  } catch (error) {
    result.error = error.message;
    res.status(500);
  }

  res.json(result);
});

// GET /notes/:id
notesRouter.get('/:id', async (req, res) => {
  const result = {
    title: `Заметка №${req.params.id}`,
    error: null,
    data: null,
  };

  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    result.error = 'ID должен быть числовой';
    res.status(406).json(result);
    return;
  }

  try {
    result.data = await db.Note.findByPk(id);
  } catch (error) {
    result.error = error.message;
    res.status(500);
  }

  res.json(result);
});

module.exports = notesRouter;
