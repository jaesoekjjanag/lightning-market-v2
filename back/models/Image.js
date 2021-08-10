const mongoose = require('mongoose');

const Image = mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  src: {
    type: String,
    required: true,
  }

})

module.exports = mongoose.model('Image', Image)