// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Mic, Wallet } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setIsWalletConnected(true);
        console.log('Connected account:', accounts[0]);
      } catch (error) {
        console.error('User rejected connection:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="logo">
            <Mic className="logo-icon" />
            <span>Orbit-X</span>
          </div>
        </div>
        
        <div className="nav-links">
          <button 
            className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('about')}
          >
            About
          </button>
          <button 
            className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </button>
        </div>

        <button 
          className={`connect-wallet-btn ${isWalletConnected ? 'connected' : ''}`}
          onClick={connectWallet}
        >
          <Wallet size={18} />
          {isWalletConnected ? 'Connected' : 'Connect Wallet'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;