const notesRouter = require('express').Router();
const db = require('../db/models');
const checkId = require('../middleware/checkId');
const NoteListPage = require('../views/NoteListPage');

// GET /notes
notesRouter.get('/', async (req, res) => {
  res.locals.title = 'Заметки';

  try {
    res.locals.data = await db.Note.list();
  } catch (error) {
    res.locals.error = error.message;
    res.status(500);
  }

  res.renderComponent(NoteListPage);
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

// POST /notes
notesRouter.post('/', (req, res) => {
  res.locals.title = 'Создать заметку';
  res.locals.error = 'Пока не реализовано';
  res.status(501).json(res.locals);
});

// PUT /notes/:id
notesRouter.put('/:id', checkId, (req, res) => {
  res.locals.title = `Редактировать заметку №${req.params.id}`;
  res.locals.error = 'Пока не реализовано';
  res.status(501).json(res.locals);
});

// DELETE /notes/:id
notesRouter.delete('/:id', checkId, (req, res) => {
  res.locals.title = `Удалить заметку №${req.params.id}`;
  res.locals.error = 'Пока не реализовано';
  res.status(501).json(res.locals);
});

module.exports = notesRouter;
