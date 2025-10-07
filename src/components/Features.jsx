// src/components/Features.jsx - Enhanced
import React from 'react';
import { Mic, Shield, Brain, Zap, Lock, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features = () => {
  useScrollAnimation();

  const features = [
    {
      icon: <Mic className="feature-icon" />,
      title: 'Voice Controlled',
      description: 'Execute blockchain transactions using natural voice commands with advanced speech recognition.'
    },
    {
      icon: <Brain className="feature-icon" />,
      title: 'AI Tone Analysis',
      description: 'Advanced AI analyzes voice tone to ensure confident and intentional transaction confirmations.'
    },
    {
      icon: <Shield className="feature-icon" />,
      title: 'Secure Authentication',
      description: 'Multi-layer security with voice biometrics and blockchain signatures for maximum protection.'
    },
    {
      icon: <Zap className="feature-icon" />,
      title: 'Lightning Fast',
      description: 'Near-instant transaction execution with optimized blockchain routing and gas management.'
    },
    {
      icon: <Lock className="feature-icon" />,
      title: 'Non-Custodial',
      description: 'Your keys, your crypto. We never hold your assets - complete decentralized control.'
    },
    {
      icon: <Globe className="feature-icon" />,
      title: 'Multi-Chain',
      description: 'Support for Ethereum, Polygon, BSC, and other major blockchain networks.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title fade-in">Revolutionary Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;