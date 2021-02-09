const mongoose = require('mongoose');
const { Schema } = mongoose;

const signupSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Users = mongoose.model('Users', signupSchema);

module.exports = {
  Users
};