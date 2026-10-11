const express = require('express')
const nodemailer = require('nodemailer')
const Student = require('../models/student')

const router = express.Router()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

router.post('/register', async (req, res) => {
  try {
    const {
      studentName,
      fatherName,
      contact,
      studentClass,
      email,
      address
    } = req.body

    if (
      !studentName?.trim() ||
      !fatherName?.trim() ||
      !contact?.trim() ||
      !studentClass
    ) {
      return res.status(400).json({
        message: 'Please fill in all required fields.'
      })
    }

    // Save registration first
    const student = await Student.create({
      studentName,
      fatherName,
      contact,
      studentClass,
      email,
      address
    })

    const details = `
      Student Name: ${student.studentName}
      Father's Name: ${student.fatherName}
      Contact: ${student.contact}
      Class: ${student.studentClass}
      Email: ${student.email || 'Not provided'}
      Address: ${student.address || 'Not provided'}
    `

    // Email full details to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Student Registration',
      text: details
    })

    // Send confirmation to student if email was provided
    if (student.email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: student.email,
        subject: 'Registration Received',
        text: `Hello ${student.studentName},

Your registration has been received successfully.

Class: ${student.studentClass}

Thank you for registering. We will contact you soon.`
      })
    }

    res.status(201).json({
      message: 'Registration successful!',
      studentId: student._id
    })

  } catch (error) {
    console.error('Registration error:', error)

    res.status(500).json({
      message: 'Registration could not be completed. Please try again.'
    })
  }
})

module.exports = router