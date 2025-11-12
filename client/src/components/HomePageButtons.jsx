import React from 'react';
import {useNavigate} from "react-router-dom"
const HomePageButtons = ({ name,text }) => {

    const handleOnClick =(e)=>{

        if(name==="Navigate to Login"){
            navigate("/login")
        }else if(name==="Get Started"){
            navigate("/signup")
        }else if(name==="Back to Home"){
            navigate("/")
        }
    }

    const navigate = useNavigate()
    return (
        <button
            className="px-8 sm:px-12 text-xl sm:text-2xl py-2 sm:py-3 text-shadow-lg font-medium cursor-pointer active:bg-gray-300 duration-300 rounded-md shadow-lg"
            name={name}
            onClick={(e)=>handleOnClick(e)}>
            {text}
        </button>
    );
};

export default HomePageButtons;
