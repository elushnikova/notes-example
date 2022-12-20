require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const db = require('./db/models');
const formatLocals = require('./middleware/formatLocals');
const ssr = require('./middleware/ssr');
const indexRouter = require('./routes/indexRouter');
const notesRouter = require('./routes/notesRouter');
const authRouter = require('./routes/authRouter');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

const app = express();
const PORT = process.env.PORT || 3000;
// абсолютный путь до папки со статическими файлами
const staticDir = path.join(__dirname, 'public');

app.locals.appTitle = 'Анонимный блог';

app.use(ssr);
app.use(formatLocals);
// прочесть тело запросов в формате urlencoded -> req.body
app.use(express.urlencoded({ extended: true }));
// прочесть тело запросов в формате JSON -> req.body
app.use(express.json());
// раздать статические файлы — изображения, стили, клиентские скрипты, etc.
app.use(express.static(staticDir));
app.use(session(sessionConfig));

app.use('/auth', authRouter);
app.use('/notes', notesRouter);
app.use('/', indexRouter);

// app.get('*', (req, res) => res.redirect('/'));

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
