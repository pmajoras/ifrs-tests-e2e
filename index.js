const express = require('express');
const path = require('path');
const app = express();

const userRepository = require('./api/userRepository');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/api/users', function (req, res) {
  res.json(userRepository.get());
});

app.post('/api/users/refresh', function (req, res) {
  res.json(userRepository.refreshDatabase());
});

app.post('/api/users/removeAll', function (req, res) {
  res.json(userRepository.removeAll());
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
