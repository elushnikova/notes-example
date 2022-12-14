const React = require('react');

function Navigation() {
  return (
    <nav>
      <a href="/">Главная</a>
      {' · '}
      <a href="/notes">Заметки</a>
    </nav>
  );
}

module.exports = Navigation;
