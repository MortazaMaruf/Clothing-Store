
import React from 'react'
import logo from '../Images/logo.png'

const Fotter = () => {
  return (
    <div className='h-[60vh] pt-20  '  id='footer'>
        <div className='uppercase grid grid-cols-2 '>

     <div className='w-[35%] footer-left'>
         <span className='text-gray-400'>info</span>
      <div className='flex flex-col my-15'>
        <span>pricing /</span>
        <span>about /</span>
        <span>contacts </span>
      </div>
      <span className='text-gray-400'>info</span>
      <div className='flex flex-col mt-15'>
        <span>eng /</span>
        <span>esp /</span>
        <span>sve </span>
      </div>
     </div>
     <div className='footer-right'>
        <span  className='text-gray-400'>Technologies</span>
        <div>
            <div className='relative '>
                <img src={logo} alt="" className='mt-15   w-[2.5vw] pt-10 relative  z-2'/>
                <h1 className='text-[5vw]  font-extrabold leading-25 absolute top-0 text-gray-100'>vr</h1>
            </div>
            <div className='text-[4vw] font-extrabold leading-20'>
                <div className='flex items-center gap-10'>
                    <h1>xiv</h1> 
                    <span className='text-xl font-extralight text-gray-200 capitalize'>near-field communicaton </span>
                    
                        <span className='font-extralight text-gray-200'>/</span>
                    
                </div>
                <h1>qr</h1>
            </div>
        </div>
     </div>
        </div>

    </div>
  )
}

export default Fotter
