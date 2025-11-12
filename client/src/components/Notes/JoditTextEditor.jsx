import React, { useState, useRef } from 'react';
import HomePageButtons from '../HomePageButtons';
import InputFields from '../InputFields';

import JoditEditor from 'jodit-react';

const JoditTextEditor = () => {
  const [title, setTitle] = useState('');

  const editor = useRef(null);

  const [content, setContent] = useState('');

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">

        {/* Toolbar: title + create/back button */}
        <div className="flex items-center gap-4 p-4 border-b">
          <div className="flex-1">
            <InputFields type="text" placeholder="Add the Title" value={title} setter={setTitle} />
          </div>

          <div className="flex items-center gap-3">
            <HomePageButtons name="Create" text="Create" type="button" className="bg-violet-600 text-white hover:bg-violet-700" />
            <HomePageButtons name="back" text="Back" className="bg-white border border-gray-200 text-gray-800" />
          </div>
        </div>

        {/* Editor area */}
        <div className="p-4">
          <div className="border rounded-md min-h-[60vh] overflow-hidden">
            <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => setContent(newContent)}
              onChange={() => { }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoditTextEditor;
