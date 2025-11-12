import React from 'react';
import { NotebookPen } from 'lucide-react';
const AddNote = () => {
  return (
    <div className='bg-amber-50 flex items-center h-[30vh] p-3'>
      <div className=' bg-gray-200 h-full flex w-1/8 items-center justify-center shadow-lg flex-col '>
      <h1 className='text-xl italic font-serif text-shadow-2xs'>Create New Note</h1>
        <NotebookPen size={48} color="#000000" className='h-full w-1/2' />
      </div>
    </div>
  );
}

export default AddNote;
