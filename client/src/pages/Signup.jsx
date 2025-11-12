import React, { useState } from 'react';
import HomePageButtons from '../components/HomePageButtons';
import InputFields from '../components/InputFields';
const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")

  const handleRegisterForm =(e)=>{
    e.preventDefault()
    console.log(email,password,userName);
    setEmail("")
    setPassword("")
    setUserName("")
  }
  return (
    <div className='h-screen flex justify-center items-center px-4 bg-gray-100'>
      <form className='bg-green-50 h-[80vh] flex w-2/8 flex-col items-center justify-evenly' onSubmit={handleRegisterForm}>
        <h1 className='py-3 bg-gray-100 px-10 text-4xl mt-3 shadow-xl rounded-md font-serif'>Create Account</h1>

        <InputFields type="text" placeholder="Charan" value={userName}  setter={setUserName}/>
        <InputFields type="email" placeholder="charan@gmail.com" value={email} setter={setEmail} />
        <InputFields type="password" placeholder="****" value={password} setter={setPassword} />


        <HomePageButtons name="LoginButton" text="Register" />

        <HomePageButtons name="Back to Home" text="Back to Home" />
      </form>
    </div>
  );
}

export default Signup;
