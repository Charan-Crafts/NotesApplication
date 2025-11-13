import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePageButtons = ({ name, text, type = 'button', className = '', onClick }) => {
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        if (onClick) return onClick(e);
        // let form submission happen when type is submit
        if (type === 'submit') return;

        if (name === 'Navigate to Login') {
            navigate('/login');
        } else if (name === 'Get Started') {
            navigate('/signup');
        } else if (name === 'Back to Home') {
            navigate('/');
        } else if (name === 'back') {
            navigate('/notes');
        }
    };

    return (
        <button
            type={type}
            className={`px-8 sm:px-12 text-xl sm:text-2xl py-2 sm:py-3 text-shadow-lg font-medium cursor-pointer active:bg-gray-300 duration-300 rounded-md shadow-lg ${className}`}
            name={name}
            onClick={handleOnClick}
        >
            {text}
        </button>
    );
};

export default HomePageButtons;
