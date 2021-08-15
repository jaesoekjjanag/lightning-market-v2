const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const postRouter = require('./routes/post')
const commentRouter = require('./routes/comment')

dotenv.config();
app.set('port', process.env.PORT || 5000);

app.use(morgan())
app.use('/', express.static(path.join(__dirname, 'uploads')))
app.use('/profile', express.static(path.join(__dirname, 'profile')))
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
  origin: true,
  credentials: true,
}))

mongoose.connect(process.env.MONGO, {
  dbName: 'lightning-market',
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('mongoDB connected')
  }
})

app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

app.get('/', (req, res) => {
  res.send('hi')
})


app.listen(app.get('port'), () => {
  console.log('server on')
})