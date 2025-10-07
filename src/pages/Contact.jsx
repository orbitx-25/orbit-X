// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="page contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about Orbit-X? We'd love to hear from you.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> hello@orbit-x.io
              </div>
              <div className="contact-item">
                <strong>Telegram:</strong> @orbitx_support
              </div>
              <div className="contact-item">
                <strong>Twitter:</strong> @OrbitX_Official
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;