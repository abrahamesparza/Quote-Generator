const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  sessionId: String
});

const Sessions = mongoose.model('Sessions', sessionSchema);

module.exports = {
  Sessions
}