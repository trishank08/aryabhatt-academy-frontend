import React from 'react'

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 sm:px-8 lg:px-20 py-10 md:py-16 gap-8 md:gap-10">

      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif">
          Hi there, I'm Senual!
          <br />
          I love to <span className="text-green-700">Inspire and Guide</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl mt-6 md:mt-12 max-w-xl">
          I’m a passionate teacher dedicated to inspiring young minds and making learning meaningful. My focus is on creating an engaging and supportive learning environment where students can grow, explore, and reach their full potential. Explore my teaching journey, let’s connect, and inspire a brighter future together!
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="rounded-full w-full max-w-md md:max-w-full h-auto object-cover"
          src="https://tse3.mm.bing.net/th/id/OIP.nzTVgNMvktoN_pP8-qlsFQHaEU?r=0&pid=Api&h=220&P=0"
          alt="Teacher"
        />
      </div>

    </div>
  )
}

export default Hero