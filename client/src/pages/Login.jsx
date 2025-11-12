import React, { useState } from 'react';
import HomePageButtons from '../components/HomePageButtons';
import InputFields from '../components/InputFields';
const Login = () => {

  const [email,setEmail] = useState("charan")

  const [password,setPassword] = useState("123")

  const handleLogin =(e)=>{
    e.preventDefault()
    console.log("Clicked on login page");
    console.log(email,password);
    setEmail("")
    setPassword("")
  }

  return (
    <div className='h-screen flex justify-center items-center px-3 bg-gray-100'>
      <form className='bg-green-50 h-[70vh] flex w-1/4 flex-col items-center justify-evenly' onSubmit={handleLogin}>
        <h1 className='py-3 bg-gray-100 px-10 text-4xl mt-3 shadow-xl rounded-md font-medium'>Login page</h1>
        <InputFields type="email" placeholder="charan@gmail.com" value={email} setter={setEmail} />
        <InputFields type="password" placeholder="****"  value={password}  setter={setPassword}/>
        <HomePageButtons name="LoginButton" text="Login" />
        <HomePageButtons name="Back to Home" text="Back to Home" />
      </form>
    </div>
  );
}

export default Login;
