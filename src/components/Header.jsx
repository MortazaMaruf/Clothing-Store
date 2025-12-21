import React from 'react'
import Button from './Button'
import Slider from './Slider'
import Heading from './Heading'
import Collections from './Collections'




const Header = () => {
  return (
    <div className='w-full h-screen flex  justify-between items-center'>
    <div className='flex  justify-center flex-col'>
      <Heading text={"New"} text1={"Collections"}/>
    <div className='text-3xl text-gray-500 capitalize pt-10 leading-10 font-extralight'>
      <h1>summer</h1>
      <h1>2025</h1>
    </div>
      <div className='flex mt-30' >
    <Button text={"Go To Shop"}  />
      </div>
    </div>
    <div className='slider w-[50%] h-[50%] flex items-center justify-center overflow-hidden'>
    <Slider/>


    </div>
    </div>
  )
}

export default Header
