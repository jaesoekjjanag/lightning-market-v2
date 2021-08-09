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
    return res.status(200).send('success')
  })
})

router.post('/mypost', async (req, res, next) => {
  const myPost = await Post.find({ seller: req.body.id }).sort({ createdAt: -1 })
  console.log(myPost)
  return res.json(myPost);
})

router.post('/posts', async (req, res, next) => {
  try {
    const posts = await Post.find().limit(25).sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    return next(err)
  }

})
module.exports = router;