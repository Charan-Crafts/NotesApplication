import React, { useState, useEffect } from 'react';
import HomePageButtons from '../components/HomePageButtons';
import InputFields from '../components/InputFields';
import { userRegistration } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")

  const { token, error } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      window.alert(error)
    }
    if (token) {
      window.alert("Registration Successful")
      navigate("/notes")
    }
  }, [token, error])

  const handleRegisterForm = (e) => {
    e.preventDefault()

    const formData = {
      email,
      password,
      userName
    }
    dispatch(userRegistration(formData))
    setEmail("")
    setPassword("")
    setUserName("")
  }
  return (
    <div className='h-screen flex justify-center items-center px-4 bg-gray-100'>
      <form className='bg-green-50 h-[80vh] flex w-2/8 flex-col items-center justify-evenly' onSubmit={handleRegisterForm}>
        <h1 className='py-3 bg-gray-100 px-10 text-4xl mt-3 shadow-xl rounded-md font-serif'>Create Account</h1>

        <InputFields type="text" placeholder="Charan" value={userName} setter={setUserName} />
        <InputFields type="email" placeholder="charan@gmail.com" value={email} setter={setEmail} />
        <InputFields type="password" placeholder="****" value={password} setter={setPassword} />


        <HomePageButtons name="LoginButton" text="Register" type="submit" className="w-full bg-violet-600 text-white hover:bg-violet-700" />

        <HomePageButtons name="Back to Home" text="Back to Home" className="w-full bg-white border border-gray-200 text-gray-800" />
      </form>
    </div>
  );
}

export default Signup;
