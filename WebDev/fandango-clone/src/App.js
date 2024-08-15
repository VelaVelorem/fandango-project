import './index.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TicketSelection from './components/TicketSelection'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Seats from './pages/Seats'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <TicketSelection />
      </div>
    </Router>
  );
}


export default App;
