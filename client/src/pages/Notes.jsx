import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Notes/Card';
import { Link, useNavigate } from 'react-router-dom';
import AddNote from '../components/Notes/AddNote';
const Notes = () => {
  const length = 23;

  const navigate = useNavigate()

  
  return (
    <div className="min-h-screen p-3 bg-gray-50">
      <Navbar />
      <AddNote/>
      <main className="max-w-6xl mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {Array.from({ length }).map((_, idx) => (
            <Link to={navigate(`/notes/${idx}`)} key={idx} className="block">
              <Card />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notes;
