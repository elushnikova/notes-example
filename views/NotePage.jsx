const React = require('react');
const Layout = require('./Layout');

function NotePage({ title, appTitle, error, data }) {
  return (
    <Layout title={data?.title || title} appTitle={appTitle}>
      <h2>{data?.title || title}</h2>
      {error && (
        <>
          <h3>Ошибка</h3>
          <p>{error}</p>
        </>
      )}

      {data && (
        <>
          <p>{data.body}</p>
          <p>{data.createdAt}</p>
        </>
      )}

      <a href="/notes">&larr; Назад</a>
    </Layout>
  );
}

module.exports = NotePage;
