import React, { useState } from 'react';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "../styles.css"

const NoteList = ({ notes, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const notesPerPage = 10;
  const filteredNotes = notes.filter(note =>
    note.title.includes(searchTerm) || note.content.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);
  const displayedNotes = filteredNotes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="search-add-container">
        <TextField
          label="Search notes..."
          variant="standard"
          value={searchTerm}
          color="info"
          onChange={handleSearch}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/add')}
        >
          Add Note
        </Button>
      </div>
      
      <div className="notes-list">
        {displayedNotes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
 