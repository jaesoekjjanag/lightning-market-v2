const mongoose = require('mongoose');

const Image = mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  postId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  }],
})

module.exports = mongoose.model('Image', Image)