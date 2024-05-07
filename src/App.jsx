import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Tour from './pages/Tour/Tour';


const App = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/tour" element={<Tour />} />  
    </Routes>
  );
};

export default App;
