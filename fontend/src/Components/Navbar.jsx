import React, { useState } from 'react'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="relative flex items-center justify-between px-4 py-5 sm:px-8 sm:py-8 lg:px-[15%]">

        {/* Logo */}
        <div className="flex items-center gap-3 text-lg sm:text-2xl text-[#493b39]">
          <img
            className="w-10 h-10 object-cover rounded-lg shrink-0"
            src="aa.png"
            alt=""
          />
          <span>Aryabhatt Academy</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <div
          className={`${menuOpen ? 'flex' : 'hidden'} absolute top-full left-0 z-50 w-full flex-col gap-3 bg-white p-4 shadow-md md:static md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <a
            href="#form"
            onClick={() => setMenuOpen(false)}
            className="bg-[#c8f169] px-7 py-2.5 text-center text-white transition-colors duration-300 hover:bg-[#596b95]"
          >
            Form
          </a>

          <a
            href="#map"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2.5 text-center text-black transition-colors duration-300 hover:bg-[#c8f169] hover:text-white"
          >
            Map
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2.5 text-center text-black transition-colors duration-300 hover:bg-[#c8f169] hover:text-white"
          >
            Contact Me
          </a>
        </div>

      </nav>
    </div>
  )
}

export default Navbar