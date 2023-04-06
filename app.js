if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  }
  

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var cors = require('cors')
var morgan = require('morgan')
const axios = require('axios');
const {User}= require('./models')
const router = require('./router')


//body parse
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

