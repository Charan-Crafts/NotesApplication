import React from 'react';
import ImageComponent from '../components/ImageComponent';
import HomePageButtons from '../components/HomePageButtons';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="w-full max-w-4xl h-[90vh] flex flex-col items-center justify-center mt-1 gap-6">
        {/* Image */}
        <div className="w-full flex items-center justify-center">
          <ImageComponent />
        </div>

        {/* Text with Login and getstarted buttons */}
        <div className="flex flex-col items-center px-6 py-4">
          <h1 className="font-semibold text-5xl sm:text-6xl mb-2 italic text-shadow-lg">Welcome</h1>
          <h2 className="font-serif italic text-xl sm:text-2xl mt-2 mb-4 text-gray-700">VibeNote — your thoughts, in tune with your mood.</h2>
          <div className="flex items-center justify-center gap-6 mt-2">
            <HomePageButtons name="Get Started"  text="Get Started" />
            <HomePageButtons name="Login" text="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
