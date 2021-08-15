const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment')
const Ask = require('../models/Ask')

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
        throw Error('댓글게시자의 정보를 찾을 수 없습니다.')
      }
      res.status(200).json(data)
    })
  } catch (err) {
    console.error(err);
    if (err.message === '댓글 게시자의 정보를 찾을 수 없습니다.') {
      res.status(403).send(err.message)
    }
    return next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    await Comment.deleteOne({ _id: req.query.id })
    res.status(200).send('delete')
  } catch (err) {
    console.error(err)

    return next(err)
  }
})

router.get('/comments', async (req, res, next) => {
  try {
    const comments = await Comment.find({ 'post': req.query.productId }).populate('writer', 'nickname _id profile createdAt')
    return res.status(200).json(comments)
  } catch (err) {
    console.error(err);
    return next(err)
  }
})

router.post('/ask', async (req, res, next) => {
  try {
    const ask = await new Ask(req.body).save();
    Ask.populate(ask, { path: 'AskFrom', select: "profile nickname createdAt" }, (err, data) => {
      res.status(200).json(data)
    })
  } catch (err) {
    console.error(err);
    return next(err)
  }
})

router.get('/asks', async (req, res, next) => {
  try {
    console.log(req.query.id)
    const asks = await Ask.find({ 'AskTo': req.query.id }).populate('AskFrom', 'nickname profile createdAt')
    console.log(asks)
    return res.status(200).json(asks);
  } catch (err) {
    console.error(err)
    return next(err)
  }
})
module.exports = router