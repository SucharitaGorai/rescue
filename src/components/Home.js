import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div>
      <div
        className="banner"
        style={{
          position: 'relative',
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px'
        }}
      >
        <img
          src="\image.png"
          alt="Disaster Management Banner"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '250px', 
            objectFit: 'cover',
            borderRadius: '8px' 
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px', 
            right: '20px', 
            padding: '10px 20px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            borderRadius: '5px'
          }}
        >
          Disaster Management Dashboard
        </div>
      </div>

      <div className="home-container">
        <div className="left-column">
          <h2>Notifications Related To Disasters</h2>
          <Link to="/youtube-videos">Tab for Youtube</Link>
        </div>
        
        <div className="right-section">
          <h2>Disaster-Related Information</h2>
          <div className="alert-container">
            <div className="blinking-text">Alert!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
