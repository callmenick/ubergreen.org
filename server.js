const next = require('next');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const sitemap = require('./sitemap');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());

    server.get('/robots.txt', (req, res) => {
      res.sendFile(path.join(__dirname, 'robots.txt'));
    });

    server.get('/sitemap.xml', (req, res) => {
      sitemap.toXML((err, xml) => {
        if (err) {
          return res.status(500).end();
        }
        res.header('Content-Type', 'application/xml');
        res.send(xml);
      });
    });

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
