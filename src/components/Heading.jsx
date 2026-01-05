
import React from 'react'

const Heading = ({ text, text1 }) => {
  return (
    <div
      className="
        uppercase font-extrabold
        leading-tight
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-8xl
      "
    >
      <h1>{text}</h1>
      <h1>{text1}</h1>
    </div>
  )
}

export default Heading
