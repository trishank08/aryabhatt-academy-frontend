import React from 'react'

export const Contact = () => {
  return (
   <div id="contact" className="bg-white px-6 py-24 text-center">

      <h1 className="text-4xl md:text-5xl font-serif text-black">
        Let's connect! ☺
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mt-5">
        Feel free to reach out for academic guidance, teaching inquiries, or to discuss learning opportunities!
      </p>

      <div className="mt-7">
        <a
          href="mailto:teacher@gmail.com"
          className="text-[#c8f169] underline text-lg md:text-xl"
        >
          ✉ sunnylilhore@gmail.com
        </a>
      </div>

      <div className="flex justify-center gap-8 mt-8 text-2xl">
         <a
            href="tel:12345677"
            className="group text-green-700 relative hover:text-green-700"
       >
             Admissions & Enquiries <br /> +91 6267800659
            <span className="absolute left-0 top-full mt-2 whitespace-nowrap rounded-full bg-[#c8f169] px-3 py-2 text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              +91 6267800659
            </span>
         </a>

   
      </div>

      {/* Google Map */}
      <div id="map" className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-serif mb-6">
          Find Me Here
        </h2>

        <div className="w-full h-80 rounded-2xl overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.6884181958785!2d79.79824017533227!3d21.763206380076348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ae91e32854975%3A0x51d9cf4819dad35f!2sARYABHATTA%20ACADEMY!5e1!3m2!1sen!2sin!4v1791783349499!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  )
}
export default Contact