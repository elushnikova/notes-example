const React = require('react');
const Navigation = require('./Navigation');

function Layout({ title, appTitle, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} · ${appTitle}`}</title>
      </head>
      <body>
        <header>
          <h1>{appTitle}</h1>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

module.exports = Layout;
