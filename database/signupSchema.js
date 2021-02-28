const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const { call } = require('file-loader');

const signupSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Users = mongoose.model('Users', signupSchema);

signupSchema.methods.validatePassword = (password, callback) => {
  bcrypt.compare(password, this.password, (err, data) => {
    if (err) callback(err);
    else callback(err, data);
  });
}

module.exports = {
  Users
};