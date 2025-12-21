import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, onClick, to, isActive }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (onClick) onClick();
    if (to) navigate(to);
  };

  return (
    <button
      onClick={handleOnClick}
      className={`px-5 py-2 cursor-pointer transition-all capitalize ${
        isActive
          ? 'bg-gray-500 text-white'
          : 'bg-gray-300 text-black hover:bg-gray-500 hover:text-white'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
