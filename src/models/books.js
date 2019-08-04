const mongoose = require('mongoose');

const books = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: false,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('books', books);
