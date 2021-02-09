const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const NewUser = mongoose.model('NewUser', loginSchema);

module.exports = {
  NewUser
};