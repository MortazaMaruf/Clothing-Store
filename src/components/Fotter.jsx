
import React from 'react'
import logo from '../Images/logo.png'

const Fotter = () => {
  return (
    <div className="pt-20 pb-10 px-5 sm:px-8 md:px-20 " id="footer">
      <div className="uppercase grid sm:grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left section */}
        <div className="footer-left flex flex-col sm:items-start md:w-[35%] gap-10">
          <div>
            <span className="text-gray-400">Info</span>
            <div className="flex flex-col mt-3 gap-2 text-gray-200">
              <span>Pricing /</span>
              <span>About /</span>
              <span>Contacts</span>
            </div>
          </div>

          <div>
            <span className="text-gray-400">Languages</span>
            <div className="flex flex-col mt-3 gap-2 text-gray-200">
              <span>ENG /</span>
              <span>ESP /</span>
              <span>SVE</span>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="footer-right flex flex-col sm:items-start md:items-end gap-10">
          <span className="text-gray-400">Technologies</span>

          <div className="relative w-full md:w-auto flex flex-col items-start md:items-end gap-5">
            {/* Logo */}
            <div className="relative">
              <img src={logo} alt="logo" className="w-16 sm:w-20 z-10 relative"/>
              <h1 className="absolute top-0 left-0 text-[5vw] sm:text-[3rem] font-extrabold text-gray-100 leading-none">
                VR
              </h1>
            </div>

            {/* Tech info */}
            <div className="text-[4vw] sm:text-2xl font-extrabold leading-snug flex flex-col md:items-end gap-2">
              <div className="flex flex-col md:flex-row md:items-center md:gap-5 gap-2">
                <h1 className='text-xl md:text-4xl lg:text-5xl'>XIV</h1>
                <span className="text-sm md:text-lg lg:text-2xl sm:text-base font-extralight text-gray-200 capitalize">
                  Near-field communication
                </span>
                <span className="font-extralight text-gray-200 hidden md:inline">/</span>
              </div>
              <h1 className='text-xl md:text-4xl lg:text-5xl'>QR</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Fotter
