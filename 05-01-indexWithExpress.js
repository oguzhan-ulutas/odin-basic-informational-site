const express = require('express');
const path = require('path');

const router = express.Router();
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '01-index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '02-about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '03-contact-me.html'));
});

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '04-404.html'));
});

app.listen(port, () => {});
