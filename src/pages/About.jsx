// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="page about">
      <div className="container">
        <h1>About Orbit-X</h1>
        <div className="about-content">
          <p>
            Orbit-X is revolutionizing the blockchain space by introducing voice-controlled 
            transactions powered by advanced AI technology. Our mission is to make blockchain 
            interactions as natural as speaking.
          </p>
          
          <h2>Our Vision</h2>
          <p>
            To create a seamless, intuitive interface between users and blockchain technology, 
            eliminating complex interfaces and making crypto accessible to everyone.
          </p>
          
          <h2>AI-Powered Security</h2>
          <p>
            Our advanced tone analysis ensures that every transaction is confirmed with 
            confidence and intent, providing an additional layer of security through 
            voice biometrics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;