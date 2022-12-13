const React = require('react');

function NoteListItem({ note }) {
  return (
    <li>
      <span>{note.title}</span>
      <br />
      <small>{note.createdAt.toLocaleString('ru-RU')}</small>
    </li>
  );
}

module.exports = NoteListItem;
