import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
  ];

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
          {states.map((state, index) => (
            <div key={index} className="state-box">
              <p>{state}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
