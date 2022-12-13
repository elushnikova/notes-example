const React = require('react');

function NoteListItem({ note }) {
  return (
    <li>
      <a href={`/notes/${note.id}`}>{note.title}</a>
      <br />
      <small>{note.createdAt}</small>
    </li>
  );
}

module.exports = NoteListItem;
