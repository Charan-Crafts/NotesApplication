import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Notes/Card';
import { Link } from 'react-router-dom';
const Notes = () => {

  const length = 23;

  return (
    <div className=' min-h-screen p-3 '>

      <div className=''>
        <Navbar></Navbar>

        <div className='grid grid-cols-3 gap-2 mt-4 '>
          {
            Array.from({ length }).map(()=>
            <Link to="">
              <Card/>
            </Link>)
          }
        </div>
      </div>

    </div>
  );
}

export default Notes;
