
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Button from './Button';

// gsap.registerPlugin(ScrollTrigger);

// const ProductFilter = ({ activeFilter, onChange }) => {
//   const filterRef = useRef(null);

//   const buttonFilter = [
//     "all", "new", "shirts", "polo shirts",
//     "short", "suit", "t-shirts", "jeans",
//     "jackets", "baggy", "panjabi", "pants"
//   ];

//   useEffect(() => {
//     ScrollTrigger.create({
//       trigger: filterRef.current,
//       start: "top 0%",
//       endTrigger: "#footer",
//       end: "top bottom",
//       pin: true,
//       pinSpacing: true,
//     });
//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   return (
//      <div  className=" mt-[15vh] bg-white z-40">
//        <div className="px-10 grid gap-10 grid-cols-6">
//          {buttonFilter.map((btn) => (
//            <Button 
//     key={btn} 
//     text={btn} 
//            onClick={()=>onChange(btn)} 
//            isActive = {activeFilter ===btn}
//            />
//          ))}
//        </div>
//      </div>
    
//   );
// };

// export default ProductFilter;



// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Button from './Button';

// gsap.registerPlugin(ScrollTrigger);

// const ProductFilter = ({ activeFilter, onChange }) => {
//   const filterRef = useRef(null);
//   const wrapperRef = useRef(null);

//   const buttonFilter = [
//     "all", "new", "shirts", "polo shirts",
//     "short", "suit", "t-shirts", "jeans",
//     "jackets", "baggy", "panjabi", "pants"
//   ];

//   useEffect(() => {
//     const trigger = ScrollTrigger.create({
//       trigger: wrapperRef.current,    // wrapper element
//       start: "top top",
//       endTrigger: "#footer",          // pin until footer
//       end: "top bottom",
//       pin: true,
//       pinSpacing: true,               // reserve space for pinned section
//     });

//     return () => trigger.kill();
//   }, []);

//   return (
//     <div ref={wrapperRef} className="relative z-40">
//       <div ref={filterRef} className="bg-white py-4">
//         <div className="px-10 grid gap-6 grid-cols-6">
//           {buttonFilter.map((btn) => (
//             <Button
//               key={btn}
//               text={btn}
//               onClick={() => onChange(btn)}
//               isActive={activeFilter === btn}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Button from './Button';

// gsap.registerPlugin(ScrollTrigger);

// const ProductFilter = ({ activeFilter, onChange }) => {
//   const filterRef = useRef(null);
//   const wrapperRef = useRef(null);

//   const buttonFilter = [
//     "all", "new", "shirts", "polo shirts",
//     "short", "suit", "t-shirts", "jeans",
//     "jackets", "baggy", "panjabi", "pants"
//   ];

//   useEffect(() => {
//     const trigger = ScrollTrigger.create({
//       trigger: wrapperRef.current,    // wrapper element
//       start: "top top",
//       endTrigger: "#footer",          // pin until footer
//       end: "top bottom",
//       pin: true,
//       pinSpacing: true,               // reserve space for pinned section
//     });

//     return () => trigger.kill();
//   }, []);

//   return (
//     <div ref={wrapperRef} className="relative z-40">
//       <div ref={filterRef} className="bg-white py-4">
//         <div className="px-10 grid gap-6 grid-cols-6">
//           {buttonFilter.map((btn) => (
//             <Button
//               key={btn}
//               text={btn}
//               onClick={() => onChange(btn)}
//               isActive={activeFilter === btn}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;






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
