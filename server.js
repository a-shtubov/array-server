const express = require('express');
const cors = require('cors');
const generateArray = require('./array');

const PORT = 1234;
const HOST = 'localhost';
const app = express();

app.use(cors());

let requestCount = 1;

app.get('/array', function(req, res) {
  const delay = Math.floor(Math.random() * 2e3 + 1e3);
  const array = generateArray(50);

  setTimeout(function() {
    const error = requestCount % 3 === 0;
    const status = error ? 500 : 200;
    const result = error ? { error: 'Internal Error' } : { result: array };

    requestCount += 1;
    res.status(status);
    res.send(result);
  }, delay);
});

app.listen(PORT, HOST, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is listening on port', PORT);
  }
});
