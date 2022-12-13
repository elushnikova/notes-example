const React = require('react');
const Layout = require('./Layout');

function HomePage({ title, appTitle }) {
  return (
    <Layout title={title} appTitle={appTitle}>
      <h2>{title}</h2>
    </Layout>
  );
}

module.exports = HomePage;
