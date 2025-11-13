import React from 'react';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {

    const Navigate = useNavigate();
    const handleBackToHome = () => {
        Navigate("/");
        console.log("Clicked");
    }
    return (
        <div>

            <button onClick={handleBackToHome} className='bg-amber-100 px-3 align-center cursor-pointer'>Back to Home</button>
            <h1 className='bg-amber-50 text-4xl text-center text-shadow-2xs'>Page not found</h1>
        </div>
    );
}

export default PageNotFound;
