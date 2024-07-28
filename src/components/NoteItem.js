import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Modal, Box, Typography, IconButton } from '@mui/material';

const NoteItem = ({ note, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formatDateTime = (timestamp) => {
    const [date, time] = timestamp.split(' ');
    return { date, time };
  };

  const { date, time } = formatDateTime(note.timestamp);

  return (
    <div className="note-item">
      <div className='note-title'>
      <h3>{note.title.length > 150 ? note.title.slice(0, 150) + '...' : note.title}</h3>
      <div className="timestamp">
          <CalendarTodayIcon fontSize="small" />
          <span>{date}</span>
          <AccessTimeIcon fontSize="small" />
          <span>{time}</span>
        </div>
      </div>
      <div className="note-item-buttons">
        <IconButton onClick={() => onEdit(note)} className="note-button">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(note.id)} className="note-button">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={handleOpen} className="note-button">
          <VisibilityIcon />
        </IconButton>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 800,height: '60vh',border:'10px solid #6F14BC',borderRadius:'17px'  }}>
          <Typography variant="h6" component="h2">
            {note.title}
          </Typography>
          <Typography sx={{ mt: 2, maxHeight: '40vh', overflow: 'auto' }}>
            {note.content}
          </Typography>
          <Typography sx={{ mt: 2 }}>
          <div className="timestamp">
          <CalendarTodayIcon fontSize="small" />
          <span>{date}</span>
          <AccessTimeIcon fontSize="small" />
          <span>{time}</span>
        </div>
         </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,

  p: 4,
};

export default NoteItem;
