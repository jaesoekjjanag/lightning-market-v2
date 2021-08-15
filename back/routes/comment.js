const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

// writer: {
//   type: ObjectId,
//   required: true,
//   ref: 'User'
// },
// post: {
//   type: ObjectId,
//   required: true,
//   ref: 'Post'
// },
// content: {
//   type: String,
//   required: true,
//   maxlength: 100
// }

router.post('/', async (req, res, next) => {
  try {
    const comment = await new Comment(req.body).save()
    Comment.populate(comment, 'writer', (err, data) => {
      if (err) {
        throw Error('댓글의 게시자를 찾을 수 없습니다.')
      }
      res.status(200).json(data)
    })
  } catch (err) {
    console.error(err);
    return next(err)
  }
})


router.get('/comments', async (req, res, next) => {
  try {
    const comments = await Comment.find({ 'post': req.query.productId }).populate('writer', 'nickname _id')
    console.log(comments)
    return res.status(200).json(comments)
  } catch (err) {
    console.error(err);
    return next(err)
  }
})
module.exports = router