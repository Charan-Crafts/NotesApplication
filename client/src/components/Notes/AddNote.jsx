import React from 'react';
import { NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom';
const AddNote = () => {
  return (
    <div className="bg-amber-50 flex items-center p-6">
      <div className="max-w-5xl mx-auto w-full bg-white rounded-lg shadow-md flex items-center gap-6 p-6">
        <Link to="/notes/editor" className="flex-shrink-0 bg-gray-100 rounded-md p-4 flex flex-col items-center justify-center cursor-pointer">
          <NotebookPen size={48} color="#1f2937" />
        </Link>

        <div>
          <h1 className="text-2xl italic font-serif text-gray-800">Create New Note</h1>
          <p className="text-sm text-gray-600 mt-1">Click create to start writing a new note.</p>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
