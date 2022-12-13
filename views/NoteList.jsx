const React = require('react');
const NoteListItem = require('./NoteListItem');

function NoteList({ title, notes }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {notes.map((note) => (
          <NoteListItem key={note.id} note={note} />
        ))}
      </ul>
    </section>
  );
}

module.exports = NoteList;
