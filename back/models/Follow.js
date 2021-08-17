const mongoose = require('mongoose')
const { Types } = mongoose

const Follow = mongoose.Schema({
  followFrom: {
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  },
  followTo: {
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, { timestamps: true })


module.exports = mongoose.model('Follow', Follow)