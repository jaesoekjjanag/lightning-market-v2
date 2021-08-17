const mongoose = require("mongoose");

const Post = mongoose.Schema({
  //_id
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  image: [{
    type: String,
    required: true,
  }],
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
  state: {
    type: String,
    required: true,
    default: '판매 중'
  }
}, { timestamps: true })


module.exports = mongoose.model('Post', Post)