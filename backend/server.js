const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
console.log('Email:', process.env.EMAIL_USER)
console.log('Password loaded:', !!process.env.EMAIL_PASS)
console.log('Password length:', process.env.EMAIL_PASS?.length)
const app = express()

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}))

app.use(express.json())

app.use('/api/students', require('./routes/studentRoutes'))

app.get('/', (req, res) => {
  res.send('Student Registration API is running')
})

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected')

    app.listen(process.env.PORT || 5000, () => {
      console.log('Server running on port 5000')
    })
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message)
  })