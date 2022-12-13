require('@babel/register');
const express = require('express');
const db = require('./db/models');
const formatLocals = require('./middleware/formatLocals');
const ssr = require('./middleware/ssr');
const notesRouter = require('./routes/notesRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(ssr);
app.use(formatLocals);

app.use('/notes', notesRouter);

app.get('/', (req, res) => {
  res.locals.title = 'Анонимный блог';
  res.locals.data = [
    {
      title: 'Заметки',
      path: '/notes',
    },
  ];

  res.json(res.locals);
});

/* eslint-disable no-console */
app
  .listen(PORT)
  .on('error', (error) => {
    console.error('Ошибка при запуске веб-сервера');
    console.error(error.message);
  })
  .on('listening', async () => {
    console.log('Веб-сервер слушает порт', PORT);

    try {
      await db.sequelize.authenticate({ logging: false });
      console.log('БД подключена успешно');
    } catch (error) {
      console.error('Ошибка подключения БД');
      console.error(error.message);
    }
  });
/* eslint-enable no-console */
