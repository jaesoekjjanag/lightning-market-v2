const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.post('/', (req, res, next) => {
  // console.log(req.body)
  const post = new Post(req.body);
  post.save((err) => {
    if (err) {
      console.error(err);
      return next(err)
    }
    res.status(200).send('success')
  })
})

router.post('/mypost', async (req, res, next) => {
  console.log(req.body.id)
  const myPost = await Post.find({ seller: req.body.id }).sort({ createdAt: -1 })
  console.log(myPost)
  res.json(myPost);
})

module.exports = router;