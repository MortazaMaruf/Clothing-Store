import React from 'react'

const Heading = ({text,text1}) => {
  return (
    <>
      <div className='text-8xl uppercase leading-22 font-extrabold'>
        <h1 >{text}</h1>
      <h1>{text1}</h1>
    </div>
    </>
  )
}

export default Heading
