const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginData = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: String
});

const LoginData = mongoose.model('LoginData', loginData);

module.exports = {
  LoginData
};