const notesRouter = require('express').Router();
const db = require('../db/models');
const checkId = require('../middleware/checkId');

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
notesRouter.get('/:id', checkId, async (req, res) => {
  res.locals.title = `Заметка №${req.params.id}`;

  try {
    res.locals.data = await db.Note.findByPk(req.param.id);
  } catch (error) {
    res.locals.error = error.message;
    res.status(500);
  }

  res.json(res.locals);
});

module.exports = notesRouter;
