import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage';
import './App.css';
import HomePage from './pages/HomePage'
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import AboutPage from './pages/AboutPage';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCampsites());
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage/>} />
        <Route path='about' element={<AboutPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
