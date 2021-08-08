const mongoose = require("mongoose");

const Post = mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 40,
  },
  category: {
    type: String,
    reqruied: true,
  },
  address: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    requied: true,
  },
  exchange: {
    type: Boolean,
  },
  price: {
    type: Number,
    required: true,
  },
  shippng: {
    type: Boolean,
  },
  nego: {
    type: Boolean,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
})


module.exports = mongoose.model('Post', Post)