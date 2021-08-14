const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/', async (req, res, next) => {
  const { id, text } = req.body
  const user = await User.findOne({ _id: id })
  console.log(user)
})

module.exports = router