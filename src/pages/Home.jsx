// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Collaboration from '../components/Collaboration';
import Workflow from '../components/Workflow';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      {/* <Collaboration /> */}
      <Workflow />
    </div>
  );
};

export default Home;