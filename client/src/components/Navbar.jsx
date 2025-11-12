import React from 'react';
import SearchBar from './Notes/SearchBar';
import ProfileButton from './Notes/ProfileButton';
import { useState } from 'react';
const Navbar = () => {

    const [search,setSearch] = useState("")

    return (
        <div className=' p-3 flex items-center justify-between shadow-xl'>
            <div className=' px-10 text-5xl py-4'>
                <h1 className='font-serif text-shadow-lg italic cursor-pointer hover:text-amber-100 duration-500'>Vibepad</h1>
            </div>
            <div className='  w-1/4 '>
                <SearchBar value={search} setter={setSearch}/>
            </div>
            <div className=' w-2/12 flex gap-2'>
                <ProfileButton/>
            </div>
        </div>
    );
}

export default Navbar;
