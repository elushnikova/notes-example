const React = require('react');
const Layout = require('./Layout');
const NoteList = require('./NoteList');

function NoteListPage({ title, appTitle, error, data }) {
  return (
    <Layout title={title} appTitle={appTitle}>
      {error && (
        <>
          <h2>Ошибка</h2>
          <p>{error}</p>
        </>
      )}

      {data && data.length > 0 && <NoteList title={title} notes={data} />}
    </Layout>
  );
}

module.exports = NoteListPage;
