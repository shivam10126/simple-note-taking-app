import React, { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import { useNavigate, useParams } from 'react-router-dom';
import './notebook.css';

const AddEditNote = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      const noteToEdit = storedNotes.find(note => note.id === id);
      setNote(noteToEdit);
    }
  }, [id]);

  const saveNote = (note) => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    if (note.id) {
      const updatedNotes = storedNotes.map(n => (n.id === note.id ? note : n));
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    } else {
      note.id = new Date().getTime().toString();
      storedNotes.push(note);
      localStorage.setItem('notes', JSON.stringify(storedNotes));
    }
    navigate('/');
  };

  return (
    <div id='addNote'>
              <button className="back-button" onClick={() => navigate('/')}>←  Go Back</button>
      <div className="notebook">
        <div className="notebook-header">
          <h2>{id ? 'Edit Note' : 'Add Note'}</h2>
        </div>
        <div className="notebook-content">
          <NoteForm note={note} saveNote={saveNote} />
        </div>
      </div>
    </div>
  );
};

export default AddEditNote;
