import React from 'react';

const HomePageButtons = ({name}) => {
    return (
        <>
            <button className=' px-20 text-2xl py-3 text-shadow-lg font-medium cursor-pointer active:bg-gray-300 duration-300 rounded-md shadow-lg'>{name}</button>
        </>
    );
}

export default HomePageButtons;
