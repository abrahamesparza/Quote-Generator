const mongoose = require('mongoose');
let connectionUrl = require('./url.js').connectionUrl;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.on('open', () => console.log('Connected to database'));
