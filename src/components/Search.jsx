// import React, { useState } from 'react'
// import { CiSearch } from "react-icons/ci";
// import { useNavigate } from 'react-router-dom';
// // import Collection from './Collections';

// const Search = () => {
//   const [query,setQuery] = useState("");
//   const navigate = useNavigate();
//   const handleSearch = (e) => {
//     e.preventDefult();
//     if(!query.trim())return;
//     navigate (`./Collections ? q = ${query}`);
//     setQuery("");

//   }
//   return (
//     <>
//   <div className='Search  ml-60'>
//          <div className='border-1 border-black flex items-center justify-center '>
//              <input type="search"
//               placeholder='Search'
//               value={query} 
//               onChange={(e)=>setQuery(e.target.value)}
//                className=' outline-none font-normal px-2  h-10 w-[15vw]  '  />
//              <CiSearch className='w-10 h-6 cursor-pointer' />
//          </div>
//       </div>
      
//     </>
//   )
// }

// export default Search
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/collections?q=${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="ml-60">
      <div className="border border-black flex items-center">
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="outline-none px-2 h-10 w-[15vw]"
        />

        <button type="submit">
          <CiSearch className="w-6 h-6 cursor-pointer" />
        </button>
      </div>
    </form>
  );
};

export default Search;

