import React from 'react';
import HomePageButtons from '../components/HomePageButtons';
import InputFields from '../components/InputFields';
const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center px-3 bg-gray-100'>
      <div className='bg-green-50 h-[70vh] flex w-1/4 flex-col items-center justify-evenly'>
        <h1 className='py-3 bg-gray-100 px-10 text-4xl mt-3 shadow-xl rounded-md font-medium'>Login page</h1>
        <InputFields type="email" placeholder="charan@gmail.com" />
        <InputFields type="password" placeholder="****" />
        <HomePageButtons name="LoginButton" text="Login" />

        <HomePageButtons name="Back to Home" text="Back to Home" />
      </div>
    </div>
  );
}

export default Login;
