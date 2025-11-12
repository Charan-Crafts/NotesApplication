import React from 'react';

const InputFields = ({type,placeholder,value,setter}) => {
  return (
    <>
      <input type={type} name="" id="" placeholder={placeholder} className=' bg-gray-200 p-3 text-xl  rounded-md shadow-xl ' value={value} onChange={(e)=>setter(e.target.value)} />
    </>
  );
}

export default InputFields;
