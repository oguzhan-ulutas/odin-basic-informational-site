const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Routing
  let path = '';
  switch (req.url) {
    case '/':
      path = './01-index.html';
      break;
    case '/about':
      path = './02-about.html';
      break;
    case '/contact-me':
      path = '03-contact-me.html';
      break;
    default:
      path = '04-404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      fs.readFile('./04-404.html', (err, dataErr) => {
        res.write(dataErr);
      });
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, hostname);
