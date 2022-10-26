import React, { useState, useEffect } from 'react'
import SearchCard from './SearchCard';

const Search = ({ details }) => {
  const [name, setName] = useState("")

  return (
    <div>
      <div className='relative'>
        <input className='search-input pl-[35px] px-2 py-1 rounded-md w-[50vw] md:w-[250px] border outline-none' type="text" name="player" id="player" value={name} autoComplete="off" onChange={(e) => setName(e.target.value)} placeholder="Search for a player" />
        <i className="fa-solid fa-magnifying-glass absolute text-lg left-[8px] top-[8px]"></i>
      </div>

      <div id='search-results-box' className='search-results-box absolute right-4 md:right-[10%] z-10 px-2 mt-2'>
        {name.length > 1 && details.map((element, key) => {
          if (element.name.toLowerCase().includes(name.toLowerCase()))
            return <SearchCard detail={element} key={key} />
        })}
      </div>
    </div>
  )
}

export default Search