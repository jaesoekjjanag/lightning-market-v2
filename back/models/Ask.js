const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const Ask = mongoose.Schema({
  AskTo: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  AskFrom: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  content: {
    type: String,
    required: true,
    maxlength: 300
  }
}, { timestamps: true })


module.exports = mongoose.model('Ask', Ask)