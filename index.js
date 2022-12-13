const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ title: 'Анонимный блог', message: 'Ведутся работы' });
});

/* eslint-disable no-console */
app
  .listen(PORT)
  .on('error', (error) => {
    console.error('Ошибка при запуске веб-сервера');
    console.error(error.message);
  })
  .on('listening', () => {
    console.log('Веб-сервер слушает порт', PORT);
  });
/* eslint-enable no-console */
