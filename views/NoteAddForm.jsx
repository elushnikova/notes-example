const React = require('react');

function NoteAddForm() {
  return (
    <section>
      <h2>Написать заметку</h2>
      <form method="POST" action="/notes">
        <label htmlFor="titleInput">Заголовок</label>
        <br />
        <input
          name="title"
          id="titleInput"
          placeholder="Как я провела это лето"
        />
        <br />

        <label htmlFor="bodyInput">Текст</label>
        <br />
        <textarea
          name="body"
          id="bodyInput"
          required
          placeholder="Однажды в далёкой-далёкой стране..."
          cols="50"
          rows="7"
        />
        <br />

        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

module.exports = NoteAddForm;
