const mongoose = require('mongoose');

const Image = mongoose.Schema({
  src: {
    type: String,
    required: true,
  }

})

module.exports = mongoose.Model('Image', Image)