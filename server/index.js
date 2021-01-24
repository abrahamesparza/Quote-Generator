const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3001;
const db = require('../database/db.js')
const { Users } = require('../database/loginSchema.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('HELLO ABRAHAM');
});

app.get('/users', (req, res) => {
  Users.find((err, data) => {
    console.log('existing users:', data);

    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

app.post('/new/user', (req, res) => {
  let userData = req.body;
  console.log('userData:', userData);
  Users.create(userData, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});