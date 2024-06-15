import React from 'react';
import { Link } from 'react-router-dom';
import "./PhotoGallery.css";


function PhotoGallery() {
  return (
    <div className = "photogallery">
      <header>
        <h1>HOOF 2024</h1>
      </header>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to="/germany">Early Life in Germany</Link></li>
          <li><Link to="/back-to-states">Back to the States</Link></li>
          <li><Link to="/new-beginning">A New Beginning</Link></li>
          <li><Link to="/photo-gallery">Photo Gallery</Link></li>
        </ul>
      </nav>
      <h2>The Photo Gallery</h2>
      <p>This is the content for the beautiful photo gallery.</p>
    </div>
  );
}

export default PhotoGallery;