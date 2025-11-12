import React from 'react';
import Logo from "../assets/Logo.jpg"
const ImageComponent = () => {
  return (
    <div>
      <img src={Logo} alt="" className='h-[50vh]' />
    </div>
  );
}

export default ImageComponent;
