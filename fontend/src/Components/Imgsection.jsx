
import React from 'react'
import './Imgsection.css'

const Imgsection = () => {
  const images = [
    '/students/student1.avif',
    '/students/student2.avif',
    '/students/student3.avif',
    '/students/student4.avif',
  ]

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-12">

      <h1 className="text-3xl sm:text-4xl font-serif mb-8 sm:mb-12 text-center sm:mr-12">
        Memories of My Students
      </h1>

      <div className="book ">
        {images.map((img, index) => (
          <div
            className="page"
            key={img}
            style={{ '--i': index }}
          >
            <img src={img} alt={`Student ${index + 1}`} />
          </div>
        ))}
      </div>

      <p className="text-gray-500 mt-10 sm:mt-12 text-center">
        Every student has a story to tell.
      </p>

    </div>
  )
}

export default Imgsection
