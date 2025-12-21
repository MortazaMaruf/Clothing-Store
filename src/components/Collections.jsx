// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Fotter from "./Fotter";
// import ProductFilter from "./ProductFilter";
// import SizeFilter from "./SizeFilter";
// import Card from "./Card";
// import data from "../assets/data.json";
// import { useSearchParams } from "react-router-dom";

// const Collections = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
 
//   const activeFIlter =searchParams.get("category") || "all";
//   const searchQuery = searchParams.get("q") || "";
//   const [searchParams, setSearchParams] = useSearchParams();
//   // Combined filter: category + search
//   const filteredProducts = data.filter((item) => {
//     const matchCategory =
//       activeFilter === "all" ||
//       item.category &&
//         item.category.toLowerCase() === activeFilter.toLowerCase();

//     const matchSearch =
//       item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchQuery.toLowerCase());

//     return matchCategory && matchSearch;
//   });
// const  handleSearchCategory = (category) => {
//   setSearchParams({
//     q:searchParams,
//     category: category
//   })

// }
//   return (
//     <div>
//       <Navbar />

//       <div className="w-11/12 mx-auto bg-white">
//         <div className="flex justify-between gap-10">
//           <SizeFilter />

//           <div className="flex flex-col items-center justify-center">
//            <ProductFilter
//   activeFilter={activeFilter}
//   onChange={handleCategoryChange}
// />

//             <div className="grid grid-cols-3 gap-10 pt-15 overflow-hidden">
//               {filteredProducts.map((item) => (
//                 <Card key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         </div>

//         <Fotter />
//       </div>
//     </div>
//   );
// };

// export default Collections;
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import ProductFilter from "./ProductFilter";
import SizeFilter from "./SizeFilter";
import Card from "./Card";
import data from "../assets/data.json";
import { useSearchParams } from "react-router-dom";

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("q") || "";

  const [activeFilter, setActiveFilter] = useState(categoryFromUrl);

  // 🔁 URL change হলে state update
  useEffect(() => {
    setActiveFilter(categoryFromUrl);
  }, [categoryFromUrl]);

  // ✅ Category click handler
  const handleCategoryChange = (category) => {
    setActiveFilter(category);
    setSearchParams({
      category,
      q: searchQuery,
    });
  };

  // ✅ Combined filter (category + search)
  const filteredProducts = data.filter((item) => {
    const matchCategory =
      activeFilter === "all" ||
      item.category.toLowerCase() === activeFilter.toLowerCase();

    const matchSearch =
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div>
      <Navbar />

      <div className="w-11/12 mx-auto  bg-white">
        <div className="flex gap-10">
          {/* <SizeFilter /> */}

          <div className="flex flex-col items-center w-full">
            <ProductFilter
              activeFilter={activeFilter}
              onChange={handleCategoryChange}
            />

            <div className="grid grid-cols-4 gap-10 mt-[15vh]">
              {filteredProducts.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <Fotter />
      </div>
    </div>
  );
};

export default Collections;
