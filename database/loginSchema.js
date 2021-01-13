const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginData = {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: String
}

const loginData = mongoose.model('LoginData', loginData);

module.exports = {
  LoginData
};