const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const dotenv = require("dotenv")
const path = require('path')
const mongoose = require('mongoose');

const User = require('../models/User')
const Post = require('../models/Post')
const Follow = require('../models/Follow')

dotenv.config();
//* 이미지 업로드를 위한 multer storage 셋팅
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

    const info = await User.findOne({ email }, (err) => { if (err) { return res.status(401).send('존재하지 않는 계정입니다.'); } })
    const posts = await Post.find({ seller: info._id })
    const follow = await Follow.find({ followFrom: info._id }, { '_id': 0, 'followTo': 1, 'followFrom': 1 })
    bcrypt.compare(password, info.password)
      .then((result) => {
        if (result == true) {
          const token = jwt.sign(info._id.toString(), process.env.SECRET)
          res.cookie('auth', token)
          res.cookie('id', info._id)
          res.status(200).json({
            'id': info._id,
            'profile': info.profile,
            'nickname': info.nickname,
            'email': info.email,
            'posts': posts,
            'comment': info.comment,
            'createdAt': info.createdAt,
            'follow': follow,
          })
        } else {
          return res.status(401).send('비밀번호 불일치')
        }
      })
  } catch (err) {
    console.error(err)
    return next(err);
  }
})
//* 프로필 이미지 등록 버튼을 눌렀을 때, 이미지 파일을 받아서 base64 형태로 저장 
router.post('/profile', upload.single('image'), async (req, res, next) => {
  res.send(req.file.filename)
})
//* 프로필 이미지 수정
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

//* 상점 소개글 수정
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

//* 다른 사람의 상점에 접속 했을 때, 상점 정보 받아오기
router.get('/', async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.query.id }, '_id profile nickname comment createdAt email')
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(401).send('인증받지 못한 사용자입니다.')
    return next(err);
  }
})

//* 상점 팔로우
router.post('/follow', async (req, res, next) => {
  const { followTo, followFrom } = req.body
  try {
    const already = await Follow.findOne({ followTo: followTo, followFrom: followFrom })
    if (already) {
      const error = new Error('이미 팔로우 되어있습니다.')
      return res.status(403).send(error.message)
    }
    // * followTo: 상점 
    await new Follow(req.body).save((err, data) => {
      if (err) {
        throw Error(err)
      }
      res.status(200).json({ followTo: data.followTo, followFrom: data.followFrom })
    })
  } catch (err) {
    console.error(err);
    return next(err);
  }
})

router.delete('/follow', async (req, res, next) => {
  const { followTo, followFrom } = req.query;
  console.log(followTo, followFrom);
  try {
    await Follow.deleteOne({ followTo, followFrom }, (err, data) => {
      if (err) {
        throw ('팔로우 관계를 찾을 수 없습니다.')
      }
      return res.status(200).json({ followTo: followTo, followFrom: followFrom })
    })
  } catch (err) {
    console.error(err);
    return next(err);
  }
})

module.exports = router;