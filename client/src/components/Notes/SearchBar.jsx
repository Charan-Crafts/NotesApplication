import React from 'react';

const SearchBar = ({value,setter}) => {
  return (
    <>
      <input type="text" name="" id="" className='w-full py-3 px-4 bg-gray-200 shadow-xl rounded-xl text-xl italic' value={value} onChange={(e)=>setter(e.target.value)} placeholder='Search'  />
    </>
  );
}

export default SearchBar;
