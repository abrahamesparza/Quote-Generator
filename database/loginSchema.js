const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: String
});

const Users = mongoose.model('Users', loginSchema);

module.exports = {
  Users
};