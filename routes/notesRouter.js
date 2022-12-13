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

module.exports = notesRouter;
