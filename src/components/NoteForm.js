import React, { useState, useEffect } from 'react';

const NoteForm = ({ note, saveNote }) => {
  const [title, setTitle] = useState(note ? note.title : '');
  const [content, setContent] = useState(note ? note.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveNote({
      ...note,
      title,
      content,
      timestamp: new Date().toLocaleString(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
      rows="10"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;
