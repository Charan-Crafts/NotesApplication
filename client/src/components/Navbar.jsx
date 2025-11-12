import React, { useState } from 'react';
import SearchBar from './Notes/SearchBar';
import ProfileButton from './Notes/ProfileButton';

const Navbar = () => {
    const [search, setSearch] = useState('');

    return (
        <header className="w-full bg-white shadow-md">
            <div className="max-w-6xl mx-auto flex items-center gap-4 md:gap-6 p-3">
                <div className="px-2 md:px-4">
                    <h1 className="font-serif text-2xl md:text-4xl italic cursor-pointer hover:text-amber-600 duration-300">Vibepad</h1>
                </div>

                <div className="flex-1">
                    <SearchBar value={search} setter={setSearch} />
                </div>

                <div className="w-auto flex items-center gap-2">
                    <ProfileButton />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
