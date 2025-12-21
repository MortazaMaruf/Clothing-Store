import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { useCart } from './CartContext';

const Card = ({ item }) => {
    const { addToCart } = useCart();
  return (
    <div className='border border-gray-400  flex items-center justify-center flex-col '>
      <div className="w-[15vw] h-[35vh]  p-5  ">
        {/* Image */}
        <div className="overflow-hidden w-full h-[60%] hover:scale-105 trasnition-all duration-150">
          <img
            src={item.img}
            alt={item.productName}
            // onError={(e) => {
            //   e.target.onerror = null;
            //   e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
            // }}
            className="object-cover w-full h-full"
          />

        </div>

        {/* Content */}
        <div className="mt-10">
          <h1 className="text-gray-400 text-md capitalize">
            {item.style}
          </h1>

          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-md">
              {item.productName}
            </h1>
            <h1 className="font-semibold text-lg">
              ${item.price}
            </h1>
          </div>

        </div>

      </div>
      <div className='w-full flex items-center justify-center bg-gray-300 h-15 '>
        <h1 className='capitalize w-full text-black text-xl font-semibold cursor-pointer flex items-center justify-around '>
          <FaCartPlus className=' text-2xl hover:scale-110 trasnition-all duration-150' onClick={()=>addToCart(item)}  />
          <MdFavoriteBorder className=' text-2xl hover:scale-110 trasnition-all duration-150' />
        </h1>
      </div>
    </div>
  );
};

export default Card;
