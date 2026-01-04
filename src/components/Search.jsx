
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

