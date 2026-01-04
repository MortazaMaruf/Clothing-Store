import React from 'react';
import Button from './Button';

const ProductFilter = ({ activeFilter, onChange }) => {
  const buttonFilter = [
    "all", "new", "shirts", "polo shirts",
    "short", "suit", "t-shirts", "jeans",
    "jackets", "baggy", "panjabi", "pants"
  ];

  return (
    <div className="sticky top-[6vh] bg-white z-40 pt-10 w-full">
      <div className="px-[15vw]  grid gap-6 grid-cols-6">
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
