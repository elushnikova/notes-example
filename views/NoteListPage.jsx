const React = require('react');
const Layout = require('./Layout');

function NoteListPage({ title, appTitle, error, data }) {
  return (
    <Layout title={title} appTitle={appTitle}>
      <h2>{title}</h2>
      {error && (
        <>
          <h3>Ошибка</h3>
          <p>{error}</p>
        </>
      )}

      {data && data.length > 0 && (
        <ul>
          {data.map((note) => (
            <li key={note.id}>
              <span>{note.title}</span>
              <br />
              <small>{note.createdAt.toLocaleString('ru-RU')}</small>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

module.exports = NoteListPage;
