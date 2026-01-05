
import React from 'react'
import Button from './Button'
import Slider from './Slider'
import Heading from './Heading'
import Collections from './Collections'

const Header = () => {
  return (
    <div
      className="
        w-full min-h-screen
        flex flex-col lg:flex-row
        items-center justify-center lg:justify-between
        px-6 lg:px-20
        lg:gap-16 sm:gap-5
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          flex flex-col
          items-center lg:items-start
          text-center lg:text-left gap-2
        "
      >
        <Heading text={"New"} text1={"Collections"} />

        <div className="lg:text-2xl sm:text-xl text-gray-500 capitalize sm:pt-2 lg:pt-6 sm:leading-5 md:leading-9 lg:leading-9 font-extralight">
          <h1>summer</h1>
          <h1>2025</h1>
        </div>

        <div className="lg:mt-10 sm:mt-2">
          <Button text={"Go To Shop"} />
        </div>
      </div>

      {/* RIGHT SLIDER */}
      <div
        className="
          w-full lg:w-1/2
          h-[300px] sm:h-[400px] lg:h-[500px]
          flex items-center justify-center
          overflow-hidden
        "
      >
        <Slider />
      </div>
    </div>
  )
}

export default Header
