import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const SeeMore = () => {
    const navigate = useNavigate();
    const goToCollections =() =>{
        navigate("/collections")
    }
  return (
    <div onClick={goToCollections}>
      <div className='flex items-center justify-center mb-10 text-gray-400 cursor-pointer gap-2'>
      <span className='capitalize'>All Collections</span><IoIosArrowDropupCircle  className='text-lg'/>

    </div>
    </div>
  )
}

export default SeeMore
