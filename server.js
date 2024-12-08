const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const port = 3000;

const server = express()

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  res.send('Hello World!');
});

// logging requests to start
server.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}' with ${req.body}`);
  next();
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something broke! Here's the error: ${err}`);
});