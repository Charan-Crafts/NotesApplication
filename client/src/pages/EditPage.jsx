import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosClient from '../redux/axiosClient';
import JoditEditor from 'jodit-react';
import InputFields from '../components/InputFields';
import HomePageButtons from '../components/HomePageButtons';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editor = useRef(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      try {
        const res = await axiosClient.get(`/notes/get-note/${id}`);
        if (res.data && res.data.data && res.data.data.note) {
          setTitle(res.data.data.note.title || '');
          setContent(res.data.data.note.content || '');
        }
      } catch (err) {
        console.error('Failed to load note', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchNote();
  }, [id]);

  const handleSave = async () => {
    try {
      const res = await axiosClient.put(`/notes/update-note/${id}`, { title, content });
      if (res.data && res.data.success) navigate('/notes');
    } catch (err) {
      console.error('Update failed', err);
      window.alert('Failed to update note');
    }
  };

  const handleDelete = async () => {
    try {
      await axiosClient.delete(`/notes/delete-note/${id}`);
      navigate('/notes');
    } catch (err) {
      console.error('Delete failed', err);
      window.alert('Failed to delete');
    }
  };

  if (loading) return <div className="p-6">Loading note…</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center gap-4 p-4 border-b">
          <div className="flex-1">
            <InputFields type="text" placeholder="Title" value={title} setter={setTitle} />
          </div>
          <div className="flex items-center gap-3">
            <HomePageButtons name="save" text="Save" type="button" onClick={handleSave} className="bg-violet-600 text-white" />
            <HomePageButtons name="delete" text="Delete" type="button" onClick={handleDelete} className="bg-white border text-red-600" />
            <HomePageButtons name="Back to Home" text="Back" className="bg-white border border-gray-200 text-gray-800" />
          </div>
        </div>

        <div className="p-4">
          <div className="border rounded-md min-h-[60vh] overflow-hidden">
            <JoditEditor ref={editor} value={content} onBlur={(newContent) => setContent(newContent)} onChange={() => { }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
