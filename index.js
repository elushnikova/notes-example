require('@babel/register');
const path = require('path');
const express = require('express');
const db = require('./db/models');
const formatLocals = require('./middleware/formatLocals');
const ssr = require('./middleware/ssr');
const indexRouter = require('./routes/indexRouter');
const notesRouter = require('./routes/notesRouter');

const app = express();
const PORT = process.env.PORT || 3000;
const staticDir = path.join(__dirname, 'public');

app.locals.appTitle = 'Анонимный блог';

app.use(ssr);
app.use(formatLocals);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticDir));

app.use('/notes', notesRouter);
app.use('/', indexRouter);

app.get('*', (req, res) => res.redirect('/'));

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
