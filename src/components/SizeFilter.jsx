
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const SizeFilter = () => {
  const filterRef = useRef(null);

  const buttonFilter = ["xs","s","m","l","xl","2xl"]; 
  const availableFilter = [
    "Availability","Category","Colors","Price Range",
    "Collections","Tags","Ratings"
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: filterRef.current,
      start: "top 0%",
      endTrigger: "#footer",
      end: "top bottom",
      pin: true,
      pinSpacing: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={filterRef} className="pt-[15vh]">
      <h1 className="mb-10 text-2xl font-semibold capitalize">Filters</h1>

      <h1 className="text-xl font-semibold capitalize pb-2">Size</h1>
      <div className="flex gap-5 py-1">
        {buttonFilter.map((btn, i) => (
          <Button key={i} text={btn} />
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-5">
        {availableFilter.map((text, i) => (
          <h1
            key={i}
            className="text-xl font-semibold border-b border-gray-200 border-dashed pb-3"
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;





