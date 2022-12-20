const React = require('react');

function NoteListItem({ note }) {
  return (
    <li className="js-note" data-id={note.id}>
      <a href={`/notes/${note.id}`}>{note.title}</a>
      <br />
      <small>{note.createdAt}</small>
      <br />
      <button type="button" className="js-delete">
        Удалить
      </button>
      <br />
      <br />
    </li>
  );
}

module.exports = NoteListItem;
