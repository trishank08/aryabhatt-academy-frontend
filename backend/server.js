const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://aryabhatt-academy-frontend-mhbl3pjpl-trishank08s-projects.vercel.app'
  ]
}));

app.use(express.json());

app.use('/api/students', require('./routes/studentRoutes'));

app.get('/', (req, res) => {
  res.send('Student Registration API is running');
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server running');
    });
  })
  .catch(err => console.log(err.message));