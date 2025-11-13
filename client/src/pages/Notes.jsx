import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Notes/Card';
import { Link, useNavigate } from 'react-router-dom';
import AddNote from '../components/Notes/AddNote';
import axiosClient from '../redux/axiosClient';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get('/notes/get-notes');
      if (res.data && res.data.data) setNotes(res.data.data.notes || []);
    } catch (err) {
      console.error('Failed to fetch notes', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (noteId) => {
    try {
      await axiosClient.delete(`/notes/delete-note/${noteId}`);
      setNotes((s) => s.filter((n) => n._id !== noteId));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="min-h-screen p-3 bg-gray-50">
      <Navbar />
      <AddNote />
      <main className="max-w-6xl mx-auto mt-4">
        {loading ? (
          <div className="text-center py-10">Loading notes…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {notes.map((note) => (
              <div key={note._id} className="block">
                <Card
                  title={note.title}
                  body={note.content}
                  onEdit={() => navigate(`/notes/${note._id}`)}
                  onDelete={() => handleDelete(note._id)}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Notes;
