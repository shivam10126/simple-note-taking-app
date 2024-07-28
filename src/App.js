import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddEditNote from './pages/AddEditNote';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEditNote />} />
        <Route path="/edit/:id" element={<AddEditNote />} />
      </Routes>
    </Router>
  );
};

export default App;
