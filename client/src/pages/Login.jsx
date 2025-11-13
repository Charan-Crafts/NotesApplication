import React, { useState, useEffect } from 'react';
import HomePageButtons from '../components/HomePageButtons';
import InputFields from '../components/InputFields';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [email, setEmail] = useState('charan');
  const [password, setPassword] = useState('123');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) window.alert(error);
    if (token) navigate('/notes');
  }, [token, error]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  return (
    <div className='h-screen flex justify-center items-center px-3 bg-gray-100'>
      <form className='bg-green-50 h-[70vh] flex w-1/4 flex-col items-center justify-evenly' onSubmit={handleLogin}>
        <h1 className='py-3 bg-gray-100 px-10 text-4xl mt-3 shadow-xl rounded-md font-medium'>Login page</h1>
        <InputFields type="email" placeholder="charan@gmail.com" value={email} setter={setEmail} />
        <InputFields type="password" placeholder="****" value={password} setter={setPassword} />
        <HomePageButtons name="LoginButton" text="Login" type="submit" className="w-full bg-violet-600 text-white hover:bg-violet-700" />
        <HomePageButtons name="Back to Home" text="Back to Home" className="w-full bg-white border border-gray-200 text-gray-800" />
      </form>
    </div>
  );
}

export default Login;
