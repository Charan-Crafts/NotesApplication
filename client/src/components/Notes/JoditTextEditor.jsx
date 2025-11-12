import React, { useState,useRef } from 'react';
import SearchBar from './SearchBar';
import HomePageButtons from '../HomePageButtons';
import InputFields from '../InputFields';

import JoditEditor from 'jodit-react';

const JoditTextEditor = () => {

  const [title, setTitle] = useState("")

  const editor = useRef(null);

  const [content, setContent] = useState('');


  return (
    <div className=' min-h-screen p-10'>
      <div className='bg-gray-50 min-h-screen '>

        <div className='bg-gray-300 flex h-1/4 p-2 w-full'>
          {/* type,placeholder,value,setter */}
          <InputFields type="text" placeholder="Add the Title " className="" />
          <HomePageButtons name="Create" text="Create" value={title} setter={setTitle} />
        </div>

        <div className=" min-h-[60vh]">
          <JoditEditor className='h-full'

            ref={editor}
            value={content}
        
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={e => { }}
          />
        </div>

      </div>
    </div>
  );
}

export default JoditTextEditor;
