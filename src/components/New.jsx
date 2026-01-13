import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import ProductFilter from "./ProductFilter";
// import SizeFilter from "./SizeFilter";
import Card from "./Card";
import data from "../assets/data.json";
import { useSearchParams } from "react-router-dom";

const New = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("q") || "";

  const [activeFilter, setActiveFilter] = useState(categoryFromUrl);


  useEffect(() => {
    setActiveFilter(categoryFromUrl);
  }, [categoryFromUrl]);


  const handleCategoryChange = (category) => {
    setActiveFilter(category);
    setSearchParams({
      category,
      q: searchQuery,
    });
  };

  
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
            <div className="grid gap-5 mt-[15vh] 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5">
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

export default New;
