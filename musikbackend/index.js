const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const mongoURL = 'mongodb://localhost:27017/tokomusik'

mongoose.connect(mongoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{
  console.log('Berhasil Connect Ke Database')
}).catch(() =>{
  console.log('Gagal Connect Ke Database')
})

const directory = path.join(__dirname, '/statics/')
app.use(express.static(directory))
app.use(cors())

app.use(bodyParser.json({
  extended: true,
  limit: '20mb'
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb'
}))

// routes

app.use('/user', require('./routes/User'))
app.use('/musik', require('./routes/Musik'))
app.use('/order', require('./routes/Order'))

app.listen(5000, () => {
  console.log('Server Telah Dijalankan')
})