const authRouter = require('express').Router();
const LoginPage = require('../views/LoginPage');

// GET /auth/login
authRouter.get('/login', (req, res) => {
  res.locals.title = 'Войти';
  res.renderComponent(LoginPage);
});

// POST /auth/login

module.exports = authRouter;
