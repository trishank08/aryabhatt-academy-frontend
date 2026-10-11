const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  studentClass: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Student', studentSchema)