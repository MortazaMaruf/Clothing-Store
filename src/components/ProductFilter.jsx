
import React, { useState } from 'react';
import Button from './Button';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ProductFilter = ({ activeFilter, onChange }) => {
  const buttonFilter = [
    "all", "new", "shirts", "polo shirts",
    "short", "suit", "t-shirts", "jeans",
    "jackets", "baggy", "panjabi", "pants"
  ];

  // For sm submenu toggle
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-[6vh] bg-white z-40 pt-4 w-11/12 mx-auto">

      {/* Small devices: submenu */}
      <div className="sm:hidden flex flex-col">
        <button
          className="flex items-center justify-between px-4 py-2 border rounded w-full mt-5"
          onClick={() => setShowMenu(!showMenu)}
        >
          {/* Show selected filter name instead of "Filters" */}
          <span className="capitalize">{activeFilter}</span>
          {showMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        {showMenu && (
          <div className="flex flex-col gap-2 mt-2 px-2">
            {buttonFilter.map((btn) => (
              <Button
                key={btn}
                text={btn}
                onClick={() => {
                  onChange(btn);
                  setShowMenu(false); // close menu after selection
                }}
                isActive={activeFilter === btn}
              />
            ))}
          </div>
        )}
      </div>

      {/* Medium and large devices: grid buttons */}
      <div className="hidden sm:grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:px-[10vw] lg:px-[15vw]">
        {buttonFilter.map((btn) => (
          <Button
            key={btn}
            text={btn}
            onClick={() => onChange(btn)}
            isActive={activeFilter === btn}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
