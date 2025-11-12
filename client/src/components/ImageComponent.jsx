import React from 'react';
import Logo from "../assets/Logo.jpg";

const ImageComponent = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <img src={Logo} alt="VibeNote logo" className="max-w-full h-[45vh] md:h-[50vh] object-contain rounded-md" />
        </div>
    );
};

export default ImageComponent;
