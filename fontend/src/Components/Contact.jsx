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
            src="https://maps.app.goo.gl/SohXujGk7dstB1vQ6"
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