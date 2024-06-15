import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import GermanyPage from './GermanyPage';
import './App.css'; // Import your App.css file
import BackToStates from './BackToStatesPage';
import NewBeginning from './NewBeginningPage';
import PhotoGallery from './PhotoGalleryPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/germany" element={<GermanyPage />} />
          <Route path="/back-to-states" element={<BackToStates />} />
          <Route path ="/new-beginning" element={<NewBeginning />} />
          <Route path ="/photo-gallery" element={<PhotoGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
