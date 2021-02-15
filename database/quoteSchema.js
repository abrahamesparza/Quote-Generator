const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
  text: String,
  author: String,
  favorite: {
    type: Boolean,
    default: false
  }
});

const Quotes = mongoose.model('Quotes', quoteSchema);

module.exports {
  Quotes
}