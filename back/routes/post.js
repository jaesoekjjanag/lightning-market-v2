const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const Image = require('../models/Image')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

// 2. uploads 폴더 없으면 생성
try {
  fs.accessSync('uploads')
} catch (err) {
  fs.mkdirSync('uploads');
}

// 1. storage객체에 담길 옵션 destination, filename 설정 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //uploads폴더를 경로로 지정. 디렉토리가 반드시 존재하야함
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const basename = path.basename(file.originalname)
    cb(null, basename + '_' + Date.now() + ext);
  }
})

// 3. multer의 storage 객체에 담음
const upload = multer({ storage })

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

router.post('/image', upload.array('image'), async (req, res, next) => {
  res.send(req.files.map((v) => (v.filename)));
})
module.exports = router;