const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Logins = mongoose.model('Logins', loginSchema);

module.exports = {
  Logins
};