const express = require('express');
const nodemailer = require('nodemailer');
const Student = require('../models/student');

const router = express.Router();

const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS
},
connectionTimeout: 10000
});

router.post('/register', async (req, res) => {
try {
const student = await Student.create(req.body);

res.status(201).json({
  message: 'Registration successful!'
});

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.ADMIN_EMAIL,
  subject: 'New Student Registration',
  text: JSON.stringify(student, null, 2)
}).catch(err => {
  console.log('Email failed:', err.message);
});

} catch (err) {
console.log(err.message);
res.status(500).json({
message: 'Registration failed'
});
}
});

module.exports = router;