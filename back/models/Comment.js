const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const Comment = mongoose.Schema({
  writer: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  post: {
    type: ObjectId,
    required: true,
    ref: 'Post'
  },
  content: {
    type: String,
    required: true,
    maxlength: 100
  }
}, { timestamps: true })


module.exports = mongoose.model('Comment', Comment)