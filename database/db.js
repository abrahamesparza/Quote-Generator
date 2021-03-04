const mongoose = require('mongoose');
let url = require('./url.js').url;

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.on('open', () => console.log('Connected to database'));

