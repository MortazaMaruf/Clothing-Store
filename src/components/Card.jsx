
import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { useCart } from './CartContext';

const Card = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-400 flex flex-col items-center  justify-between">

      {/* Card body */}
      <div className="
        w-full 
        sm:w-[45vw] 
        md:w-[30vw] 
        lg:w-[15vw] 
        h-auto 
        p-5
      ">
        {/* Image */}
        <div className="overflow-hidden w-full h-[180px] sm:h-[200px] lg:h-[220px]">
          <img
            src={item.img}
            alt={item.productName}
            className="object-cover w-full h-full transition-all duration-200 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <h1 className="text-gray-400 text-sm capitalize">
            {item.style}
          </h1>

          <div className="flex items-center justify-between mt-2">
            <h1 className="font-semibold text-sm sm:text-md">
              {item.productName}
            </h1>
            <h1 className="font-semibold text-md sm:text-lg">
              ${item.price}
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="w-full flex items-center justify-around bg-gray-300 py-3">
        <FaCartPlus
          className="text-2xl text-black cursor-pointer transition-all duration-150 hover:scale-110"
          onClick={() => addToCart(item)}
        />
        <MdFavoriteBorder
          className="text-2xl text-black cursor-pointer transition-all duration-150 hover:scale-110"
        />
      </div>

    </div>
  );
};

export default Card;
