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
  connectionTimeout: 10000,
  greetingTimeout: 10000
});

router.post('/register', async (req, res) => {
  try {
    const {
      studentName,
      fatherName,
      contact,
      studentClass,
      email,
      address
    } = req.body;

    if (!studentName || !fatherName || !contact || !studentClass) {
      return res.status(400).json({
        message: 'Please fill all required fields'
      });
    }

    // Save student in MongoDB
    const student = await Student.create({
      studentName,
      fatherName,
      contact,
      studentClass,
      email,
      address
    });

    console.log('Student saved:', student._id);

    // Tell frontend registration is saved
    res.status(201).json({
      message: 'Registration successful!',
      studentId: student._id
    });

    // Send emails
    const details = `
Student Name: ${student.studentName}
Father Name: ${student.fatherName}
Contact: ${student.contact}
Class: ${student.studentClass}
Email: ${student.email || 'Not provided'}
Address: ${student.address || 'Not provided'}
`;

    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Student Registration',
      text: details
    }).then(() => {
      console.log('Admin email sent');
    }).catch(err => {
      console.log('Admin email failed:', err.message);
    });

    if (student.email) {
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: student.email,
        subject: 'Registration Successful - Aryabhatt Academy',
        text: `Hello ${student.studentName},

Your registration has been received successfully.

Class: ${student.studentClass}

Thank you for registering with Aryabhatt Academy.`
      }).then(() => {
        console.log('Student confirmation email sent');
      }).catch(err => {
        console.log('Student email failed:', err.message);
      });
    }

  } catch (err) {
    console.error('Registration failed:', err.message);

    if (!res.headersSent) {
      res.status(500).json({
        message: 'Registration failed. Please try again.'
      });
    }
  }
});

module.exports = router;