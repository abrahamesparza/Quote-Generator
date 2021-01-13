const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const port = 1996;
const db = require('../database/db.js')
const { LoginData } = require('../database/loginSchema.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use(cors);

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.get('/users', (req, res) => {
  LoginData.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
  console.log('server /users')
});

app.post('/newuser', (req, res) => {
  let userData = req.body;
  console.log(userData);
  LoginData.create(userData, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});