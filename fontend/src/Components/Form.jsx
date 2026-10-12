import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    contact: '',
    studentClass: '',
    email: '',
    address: ''
  })

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch(
        'https://aryabhatt-academy-api.onrender.com/api/students/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      setMessage(data.message)

      setFormData({
        studentName: '',
        fatherName: '',
        contact: '',
        studentClass: '',
        email: '',
        address: ''
      })
    } catch (error) {
      setMessage(error.message || 'Unable to connect to the server.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full min-w-0 border border-gray-200 rounded-xl p-3 text-base outline-none focus:border-green-600'

  return (
    <div
      id="form"
      className="min-h-screen bg-white flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12"
    >
      <div className="w-full max-w-xl min-w-0 bg-white p-5 sm:p-8 rounded-3xl shadow-sm">

        <p className="text-green-700 mb-3 text-sm sm:text-base">
          STUDENT REGISTRATION
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Let's get to know you.
        </h1>

        <p className="text-gray-500 mt-2 mb-6 sm:mb-8 text-sm sm:text-base">
          Fill in your details to begin your learning journey.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">

          <input
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Student Name"
            className={inputClass}
            required
          />

          <input
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Father's Name"
            className={inputClass}
            required
          />

          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            type="tel"
            placeholder="Contact Number"
            className={inputClass}
            required
          />

          <select
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Select Class</option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={`Class ${i + 1}`}>
                Class {i + 1}
              </option>
            ))}
          </select>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address (Optional)"
            className={inputClass}
          />

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Residential Address"
            rows={3}
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c8f169] hover:bg-[#b8e454] disabled:opacity-60 text-gray-900 font-semibold py-3 rounded-xl transition"
          >
            {loading ? 'Registering...' : 'Register Student →'}
          </button>

          {message && (
            <p role="status" className="text-center text-sm text-gray-700 break-words">
              {message}
            </p>
          )}

        </form>
      </div>
    </div>
  )
}

export default Form