const React = require('react');
const Layout = require('./Layout');

function HomePage({ title, appTitle }) {
  return (
    <Layout title={title} appTitle={appTitle}>
      <h2>{title}</h2>
      <img src="/images/harold.jpg" width="300" alt="От Гарольда с любовью" />
    </Layout>
  );
}

module.exports = HomePage;
