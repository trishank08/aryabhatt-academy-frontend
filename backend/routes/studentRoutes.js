const express = require('express');
const { Resend } = require('resend');
const Student = require('../models/student');

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

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

    if (
      !studentName?.trim() ||
      !fatherName?.trim() ||
      !contact?.trim() ||
      !studentClass
    ) {
      return res.status(400).json({
        message: 'Please fill in all required fields.'
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

    const details = `
Student Name: ${student.studentName}
Father's Name: ${student.fatherName}
Contact: ${student.contact}
Class: ${student.studentClass}
Email: ${student.email || 'Not provided'}
Address: ${student.address || 'Not provided'}
`;

    // Send registration response
    res.status(201).json({
      message: 'Registration successful!',
      studentId: student._id
    });

    // Send email to admin
    const adminEmail = resend.emails.send({
      from: 'Aryabhatt Academy <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL],
      subject: 'New Student Registration',
      text: details
    });

    adminEmail
      .then(result => console.log('Admin email result:', result))
      .catch(err => console.error('Admin email failed:', err.message));

    // Send confirmation email to student
    if (student.email) {
      resend.emails.send({
        from: 'Aryabhatt Academy <onboarding@resend.dev>',
        to: [student.email],
        subject: 'Registration Successful - Aryabhatt Academy',
        text: `Hello ${student.studentName},

Your registration has been received successfully.

Class: ${student.studentClass}

Thank you for registering with Aryabhatt Academy.
We will contact you soon.`
      })
        .then(result => console.log('Student email result:', result))
        .catch(err => console.error('Student email failed:', err.message));
    }

  } catch (error) {
    console.error('Registration error:', error.message);

    if (!res.headersSent) {
      res.status(500).json({
        message: 'Registration could not be completed. Please try again.'
      });
    }
  }
});

module.exports = router;