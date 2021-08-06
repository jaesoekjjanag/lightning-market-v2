const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")

dotenv.config();


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
    const info = await User.findOne({ email }, ['password'])
    bcrypt.compare(password, info.password)
      .then((result) => {
        if (result == true) {
          console.log(info._id)
          const token = jwt.sign(info._id.toString(), process.env.SECRET)
          res.cookie('auth', token)
          res.status(200).json({ 'id': info._id })
        } else {
          return res.status(401).send('비밀번호 불일치')
        }
      })
  } catch (err) {
    console.error(err);
    res.status(401).send('존재하지 않는 계정입니다.');
    next(err);
  }
})

module.exports = router;