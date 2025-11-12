import React from 'react';
import ImageComponent from '../components/ImageComponent';
import HomePageButtons from '../components/HomePageButtons';
const Home = () => {
  return (
    <div className=' min-h-screen flex items-center justify-center px-4'>
      <div className=' h-[90vh] w-full flex flex-col items-center justify-around mt-1'>
        {/* Image */}
        <div className='bg-black'>
          <ImageComponent></ImageComponent>
        </div>

        {/* Text with Login and getstarted buttons */}
        <div className="flex flex-col items-center  px-10 py-10">
          <h1 className='font-semibold text-6xl mb-3 italic text-shadow-lg'>Welcome</h1>
          <h1 className='font-serif italic text-2xl mt-3 shadow-2xl mb-3 py-2'>VibeNote — your thoughts, in tune with your mood. </h1>
          <div className="flex w-full items-center justify-around mt-2">
            <HomePageButtons name="Get Started"></HomePageButtons>
            <HomePageButtons name="Login"></HomePageButtons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
