const notesRouter = require('express').Router();
const db = require('../db/models');
const checkId = require('../middleware/checkId');
const NoteListItem = require('../views/NoteListItem');
const NoteListPage = require('../views/NoteListPage');
const NotePage = require('../views/NotePage');

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

  if (res.locals.error) {
    res.renderComponent(NotePage);
    return;
  }

  let note;
  try {
    note = await db.Note.findByPk(req.params.id);
  } catch (error) {
    res.locals.error = error.message;
    res.status(500);
    res.renderComponent(NotePage);
    return;
  }

  if (!note) {
    res.locals.error = 'Заметка с таким ID не найдена';
    res.status(404);
    res.renderComponent(NotePage);
    return;
  }

  res.locals.title = note.title;
  res.locals.data = note;
  res.renderComponent(NotePage);
});

// POST /notes
notesRouter.post('/', async (req, res) => {
  res.locals.title = 'Создать заметку';

  if (!req.body || !req.body.body) {
    res.locals.error = 'У заметки должен быть текст';
    res.status(400);
    res.renderComponent(NoteListPage);
    return;
  }

  try {
    res.locals.data = await db.Note.create({
      title: req.body.title,
      body: req.body.body,
    });
    // res.redirect('/notes'); // <- вариант 0: полная перезагрузка страницы! не устраивает
    // res.json(res.locals); // вариант 1: отправить JSON
    // ИЛИ вариант 2: отправить HTML
    res.renderComponent(
      NoteListItem,
      { note: res.locals.data },
      { doctype: false },
    );
  } catch (error) {
    res.locals.error = error.message;
    res.status(500);
    res.renderComponent(NoteListPage);
  }
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
