const bcrypt = require('bcrypt');
const authRouter = require('express').Router();
const LoginPage = require('../views/LoginPage');
const db = require('../db/models');

// GET /auth/login
authRouter.get('/login', (req, res) => {
  res.locals.title = 'Войти';
  res.renderComponent(LoginPage);
});

// POST /auth/login
authRouter.post('/login', async (req, res) => {
  const hasLogin = Boolean(req.body.login);
  const hasPassword = Boolean(req.body.password);

  // 1. валидация на бэкенде — защита данных
  if (!hasLogin || !hasPassword) {
    res.status(400).json({
      error: 'Введите логин и пароль',
    });
    return; // early return, ранний возврат
  }

  // 2. найти пользователя
  let user;
  try {
    user = await db.User.findOne({
      where: {
        login: req.body.login,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  if (!user) {
    res
      .status(400)
      .json({ error: 'Нет пользователя с таким логином или паролем' });
    return;
  }

  // 3. проверить пароль
  const rawPassword = req.body.password;
  const hashedPassword = user.password;
  const isSame = await bcrypt.compare(rawPassword, hashedPassword); // TODO try/catch

  if (!isSame) {
    res
      .status(400)
      .json({ error: 'Нет пользователя с таким логином или паролем' });
    return;
  }

  // 4. логин и пароль правильные
  // создать пользовательскую сессию
  req.session.userId = user.id; // пользователь авторизован
  res.redirect('/');
});

module.exports = authRouter;
