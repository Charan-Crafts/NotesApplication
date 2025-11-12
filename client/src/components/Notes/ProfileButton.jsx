import React from 'react';

const ProfileButton = () => {
    return (
        <div className="flex items-center space-x-2">
            {/* Profile Button */}
            <button className="w-12 h-12 rounded-full overflow-hidden shadow-xl  flex-shrink-0">
                <img
                    src="https://i.pinimg.com/736x/c4/3a/4c/c43a4c5c90e7b9b3ec49d3189c820a59.jpg"
                    alt="Profile"
                    className="object-cover w-full h-full shadow-xl"
                />
            </button>

            {/* Dropdown */}
            <select
                className="bg-white text-black text-sm border  rounded px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 shadow-lg active:duration-300">
                <option value="logout">Logout</option>
            </select>
        </div>
    );
};

export default ProfileButton;
