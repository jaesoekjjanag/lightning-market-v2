const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const dotenv = require("dotenv")
const path = require('path')


dotenv.config();

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, 'profile')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const basename = path.basename(file.originalname, ext)
    cb(null, basename + '_' + Date.now() + ext);
  }
})

const upload = multer({ storage })

router.post('/signup', async (req, res, next) => {
  let { email, password } = req.body;
  try {
    password = await bcrypt.hash(password, 11)
    const user = new User({ email, password });
    await user.save()
    res.status(201).json()
  } catch (err) {
    console.error(err)
    res.status(401).send('이미 존재하는 계정입니다.')
    return next(err)
  }
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const info = await User.findOne({ email })
    const posts = await Post.find({ seller: info._id })
    console.log(posts)
    bcrypt.compare(password, info.password)
      .then((result) => {
        if (result == true) {
          const token = jwt.sign(info._id.toString(), process.env.SECRET)
          res.cookie('auth', token)
          res.status(200).json({
            'id': info._id,
            'profile': info.profile,
            'nickname': info.nickname,
            'email': info.email,
            'posts': posts,
            'comment': info.comment,
            'createdAt': info.createdAt
          })
        } else {
          return res.status(401).send('비밀번호 불일치')
        }
      })
  } catch (err) {
    res.status(401).send('존재하지 않는 계정입니다.');
    return next(err);
  }
})

router.post('/profile', upload.single('image'), async (req, res, next) => {
  res.send(req.file.filename)
})

router.patch('/profile', async (req, res, next) => {
  const { id, imgPath } = req.body
  console.log(id)
  try {
    const user = await User.findOne({ _id: id })
    user.profile = imgPath;
    await user.save();
    res.status(200).send('ok')
  } catch (err) {
    console.error(err);
    next(err)
  }

})

router.patch('/nickname', async (req, res, next) => {
  const { id, nickname } = req.body
  console.log(id, nickname)
  try {
    const user = await User.findOne({ _id: id })
    user.nickname = nickname;
    user.save();
    return res.status(200).send('닉네임 변경됨');
  } catch (err) {
    console.error(err);
    return next(err)
  }

})

router.patch('/comment', async (req, res, next) => {
  const { id, comment } = req.body;
  try {
    const user = await User.findOne({ _id: id })
    user.comment = comment;
    await user.save();
    res.status(200).send(user)
  } catch (err) {
    console.error(err);
    next(err)
  }
})

module.exports = router;