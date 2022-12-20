const React = require('react');

function Navigation() {
  return (
    <nav>
      <a href="/">Главная</a>
      {' · '}
      <a href="/notes">Заметки</a>
      {' · '}
      <a href="/auth/login">Войти</a>
    </nav>
  );
}

module.exports = Navigation;
