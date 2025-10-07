// src/components/Footer.jsx
import React from 'react';
import { Mic } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <Mic className="logo-icon" />
              <span>Orbit-X</span>
            </div>
            <p className="footer-tagline">
              AI-Powered Blockchain Router - Revolutionizing crypto with voice control
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#security">Security</a>
              <a href="#networks">Networks</a>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#compliance">Compliance</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Orbit-X. All rights reserved. Powered by LayerOneX infrastructure.</p>
          <p>AI-Powered Voice Controlled Blockchain Router</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;