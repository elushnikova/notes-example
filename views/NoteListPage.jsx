const React = require('react');
const Layout = require('./Layout');
const NoteListItem = require('./NoteListItem');

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
            <NoteListItem key={note.id} note={note} />
          ))}
        </ul>
      )}
    </Layout>
  );
}

module.exports = NoteListPage;
