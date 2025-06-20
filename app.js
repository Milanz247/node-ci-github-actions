// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, DevOps Professor! This is my first CI-powered Node.js App! <By Milan Madusanka --->>');
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = server;