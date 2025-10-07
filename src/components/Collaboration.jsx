// src/components/Collaboration.jsx
import React from 'react';

const Collaboration = () => {
  return (
    <section className="collaboration">
      <div className="container">
        <div className="collab-content">
          <div className="collab-text">
            <h2 className="section-title">
              Powered by <span className="highlight">LayerOneX</span>
            </h2>
            <p className="collab-description">
              Orbit-X joins forces with LayerOneX to bring you the most advanced 
              voice-controlled blockchain infrastructure. Together, we're pushing 
              the boundaries of decentralized technology and user experience.
            </p>
            <div className="collab-stats">
              <div className="collab-stat">
                <div className="stat-value">$2.1B+</div>
                <div className="stat-label">Total Value Secured</div>
              </div>
              <div className="collab-stat">
                <div className="stat-value">150K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="collab-stat">
                <div className="stat-value">12+</div>
                <div className="stat-label">Blockchain Networks</div>
              </div>
            </div>
          </div>
          <div className="collab-visual">
            <div className="orbit-animation">
              <div className="central-core"></div>
              <div className="orbit-ring ring-1"></div>
              <div className="orbit-ring ring-2"></div>
              <div className="orbit-ring ring-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;