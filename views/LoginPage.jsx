const React = require('react');
const Layout = require('./Layout');

function LoginPage({ title, appTitle }) {
  return (
    <Layout title={title} appTitle={appTitle}>
      <h2>{title}</h2>

      <form method="POST" action="/auth/login">
        <label htmlFor="loginInput">Логин</label>
        <input name="login" id="loginInput" type="text" required />

        <label htmlFor="passwordInput">Пароль</label>
        <input name="password" id="passwordInput" type="password" required />

        <button type="submit">Войти</button>
      </form>
    </Layout>
  );
}

module.exports = LoginPage;
