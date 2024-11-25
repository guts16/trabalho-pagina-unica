import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<div>Notícias sobre Futebol</div>} />
        <Route path="/ranking" element={<div>Ranking de Times</div>} />
      </Routes>
    </Router>
  );
};

export default App;

