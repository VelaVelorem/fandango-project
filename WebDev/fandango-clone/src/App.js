import './index.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seats from './pages/Seats';
import Tickets from './pages/Tickets'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/seats" element={<Seats />} /> 
      </Routes>
    </Router>
  );
}

export default App;
