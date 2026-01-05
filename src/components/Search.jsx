
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    navigate(`/collections?q=${query}`)
    setQuery("")
  }

  return (
    <form 
      onSubmit={handleSearch}
      className="w-full flex justify-center lg:justify-start"
    >
      <div className="
        flex items-center
        border border-black
        w-full
        sm:w-[70%]
        md:w-[50%]
        lg:w-[15vw]
        h-10
      ">
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none px-3 text-sm"
        />

        <button type="submit" className="px-3">
          <CiSearch className="w-5 h-5 cursor-pointer" />
        </button>
      </div>
    </form>
  )
}

export default Search

