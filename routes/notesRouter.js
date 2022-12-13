const notesRouter = require('express').Router();
const db = require('../db/models');

// GET /notes
notesRouter.get('/', async (req, res) => {
  res.locals.title = 'Заметки';

  try {
    res.locals.data = await db.Note.list();
  } catch (error) {
    res.locals.error = error.message;
    res.status(500);
  }

  res.json(res.locals);
});

// GET /notes/:id
notesRouter.get('/:id', async (req, res) => {
  res.locals.title = `Заметка №${req.params.id}`;

  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.locals.error = 'ID должен быть числовой';
    res.status(406).json(res.locals);
    return;
  }

  try {
    res.locals.data = await db.Note.findByPk(id);
  } catch (error) {
    res.locals.error = error.message;
    res.status(500);
  }

  res.json(res.locals);
});

module.exports = notesRouter;
