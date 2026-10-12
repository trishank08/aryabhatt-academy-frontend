const express = require('express');
const { google } = require('googleapis');
const Student = require('../models/student');

const router = express.Router();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const gmail = google.gmail({
  version: 'v1',
  auth: oauth2Client
});

async function sendEmail(to, subject, text) {
  const message = [
    `From: ${process.env.EMAIL_USER}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    text
  ].join('\r\n');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: Buffer.from(message).toString('base64url')
    }
  });
}

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
        message: 'Please fill all required fields.'
      });
    }

    const student = await Student.create({
      studentName,
      fatherName,
      contact,
      studentClass,
      email,
      address
    });

    const details = `
Student Name: ${student.studentName}
Father's Name: ${student.fatherName}
Contact: ${student.contact}
Class: ${student.studentClass}
Email: ${student.email || 'Not provided'}
Address: ${student.address || 'Not provided'}
`;

    res.status(201).json({
      message: 'Registration successful!',
      studentId: student._id
    });

    sendEmail(
      process.env.ADMIN_EMAIL,
      'New Student Registration',
      details
    ).catch(err => {
      console.error('Admin email failed:', err.message);
    });

    if (student.email) {
      sendEmail(
        student.email,
        'Registration Successful - Aryabhatt Academy',
        `Hello ${student.studentName},

Your registration has been received successfully.

Class: ${student.studentClass}

Thank you for registering with Aryabhatt Academy.
We will contact you soon.`
      ).catch(err => {
        console.error('Student email failed:', err.message);
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