const React = require('react');
const Layout = require('./Layout');

function LoginPage({ title, appTitle }) {
  return (
    <Layout title={title} appTitle={appTitle}>
      <h2>{title}</h2>

      <form
        method="POST"
        action="/auth/login"
        className="col col-md-6 col-lg-4"
      >
        <div className="mb-3">
          <label htmlFor="loginInput" className="form-label">
            Логин
          </label>
          <input
            name="login"
            id="loginInput"
            type="text"
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Пароль
          </label>
          <input
            name="password"
            id="passwordInput"
            type="password"
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </Layout>
  );
}

module.exports = LoginPage;
