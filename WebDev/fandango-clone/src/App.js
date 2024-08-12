import './index.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TicketSelection from './components/TicketSelection'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <TicketSelection />
      <Footer />
    </div>
  );
}


export default App;
