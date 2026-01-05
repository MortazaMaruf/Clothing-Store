
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ text, onClick, to, isActive }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    if (onClick) onClick()
    if (to) navigate(to)
  }

  return (
    <button
      onClick={handleOnClick}
      className={`
        cursor-pointer capitalize transition-all duration-300
        px-4 py-2 text-sm
        sm:px-5 sm:py-2 sm:text-base
        md:px-6 md:py-3 md:text-lg
        ${
          isActive
            ? 'bg-gray-600 text-white'
            : 'bg-gray-300 text-black hover:bg-gray-600 hover:text-white'
        }
      `}
    >
      {text}
    </button>
  )
}

export default Button
