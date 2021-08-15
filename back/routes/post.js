const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const Image = require('../models/Image')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

// * router.[메소드]('/응답할 주소', (req,res,[next])) 형태로 작성

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
    const basename = path.basename(file.originalname, ext)
    cb(null, basename + '_' + Date.now() + ext);
  }
})

// 3. multer의 storage 객체에 담음
const upload = multer({ storage })

//상품등록
router.post('/', async (req, res, next) => {
  try {
    const post = new Post(req.body);
    if (req.body.image.length === 0) {
      const error = new Error('이미지를 선택한 후 이미지 등록 버튼을 꼭 눌러주세요')
    }
    await post.save((err) => {
      if (err) {
        console.error(err);
        return next(err)
      }
      res.status(200).send(post)
    })
    // const images = await Promise.all(req.body.image.map(v => {
    //   const image = new Image({ postId: post._id, src: v });
    //   image.save((err) => { if (err) { console.error(err) } })
    // }))
  } catch (err) {
    console.error(err);
    return res.status(500).send(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const _id = req.query.id
    await Post.deleteOne({ _id })
    res.status(200).send('상품이 삭제되었습니다.')
  } catch (err) {
    console.error(err);
    return next(err)
  }
})

//내 상점
router.post('/mypost', async (req, res, next) => {
  const myPost = await Post.find({ seller: req.body.id }).sort({ createdAt: -1 })
  console.log(myPost)
  return res.json(myPost);
})

//메인화면
router.post('/posts', async (req, res, next) => {
  try {
    const posts = await Post.find().limit(25).sort({ createdAt: -1 });
    // console.log(posts)
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    return next(err)
  }
})

router.post('/image', upload.array('image'), async (req, res, next) => {
  res.send(req.files.map((v) => (v.filename)));
})

router.get('/product', async (req, res, next) => {
  //상품 id
  const { id } = req.query
  const post = await Post.findOne({ _id: id }).populate('seller', 'nickname')
  res.status(200).send(post)
})

router.post('/test', async (req, res, next) => {
  const { id } = req.body;
  console.log(id)
  const post = await Post.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(`${id}`) } }
  ])
  console.log(post)
})
module.exports = router;