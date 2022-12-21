const React = require('react');
const Navigation = require('./Navigation');

// функциональный компонент с параметром props = {}
function Layout({ title, appTitle, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} · ${appTitle}`}</title>
        {/*
          Слеш в начале src очень важен!
          Атрибут defer нужен, если работаем с DOM-деревом. Почему и как сделать иначе?
        */}
        <script src="/scripts/client.js" defer />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
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
