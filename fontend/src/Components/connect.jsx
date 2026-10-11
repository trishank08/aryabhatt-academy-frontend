import React from 'react'

export const connect = () => {
  return (
     <section className="min-h-screen bg-[#f7f8f2] px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest text-green-700 mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Let's connect and <br />
            <span className="text-green-700">grow together.</span>
          </h1>

          <p className="text-gray-500 mt-5 max-w-xl leading-7">
            Have a question about classes, learning opportunities, or teaching?
            I'd love to hear from you. Feel free to reach out!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-[#e9f0df] rounded-3xl p-8 md:p-10 flex flex-col justify-between">

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Let's start a conversation.
              </h2>

              <p className="text-gray-600 leading-7 mb-10">
                Every great learning journey starts with a conversation.
                Get in touch, and let's make learning a wonderful experience.
              </p>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl">
                    <Mail size={22} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm mt-1">
                      yourname@email.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl">
                    <Phone size={22} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600 text-sm mt-1">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl">
                    <MapPin size={22} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Your City, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <p className="text-sm text-gray-500 mt-12">
              Inspiring minds, one conversation at a time.
            </p>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">

            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Send me a message
            </h2>

            <p className="text-gray-500 text-sm mb-8">
              Fill in the details below, and I'll be happy to connect.
            </p>

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-[#fafbf8] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#fafbf8] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full bg-[#fafbf8] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-[#fafbf8] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#c8f169] hover:bg-[#b8e454] text-gray-900 font-semibold py-4 rounded-xl transition duration-300"
              >
                Send Message
                <ArrowUpRight size={20} />
              </button>

            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 Teacher Portfolio. All rights reserved.</p>
          <p>Made with care for a brighter future.</p>
        </div>

      </div>
    </section>
  )
}
export default connect