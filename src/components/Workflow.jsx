// src/components/Workflow.jsx - Updated with 6 Steps
import React from 'react';
import { Mic, Brain, Shield, CheckCircle, Zap, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Workflow = () => {
  useScrollAnimation();

  const steps = [
    {
      icon: <Mic className="step-icon" />,
      step: '01',
      title: 'Voice Command',
      description: 'Speak your blockchain command naturally - "Buy NFT", "Send ETH", or "Check Balance"'
    },
    {
      icon: <Brain className="step-icon" />,
      step: '02',
      title: 'AI Processing',
      description: 'Advanced NLP understands your intent and extracts transaction details accurately'
    },
    {
      icon: <Shield className="step-icon" />,
      step: '03',
      title: 'Tone Analysis',
      description: 'AI analyzes voice tone for confidence and intent, ensuring secure authentication'
    },
    {
      icon: <CheckCircle className="step-icon" />,
      step: '04',
      title: 'Security Verification',
      description: 'Multi-layer security check with voice biometrics and transaction validation'
    },
    {
      icon: <Zap className="step-icon" />,
      step: '05',
      title: 'Blockchain Routing',
      description: 'Smart routing selects optimal blockchain network and calculates best gas fees'
    },
    {
      icon: <Rocket className="step-icon" />,
      step: '06',
      title: 'Execution & Confirmation',
      description: 'Transaction executed on blockchain with instant confirmation and voice feedback'
    }
  ];

  return (
    <section className="workflow">
      <div className="container">
        <h2 className="section-title fade-in">How Orbit-X Works</h2>
        <p className="workflow-subtitle fade-in">
          Experience the future of blockchain interactions with our seamless 6-step voice-controlled process
        </p>
        
        <div className="workflow-steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="workflow-step fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="step-indicator">
                <div className="step-icon-container">
                  {step.icon}
                </div>
                <div className="step-number">{step.step}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              {/* Connection line between steps */}
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional workflow visualization */}
        <div className="workflow-visualization fade-in">
          <div className="visualization-container">
            <div className="voice-wave"></div>
            <div className="ai-processor"></div>
            <div className="security-shield"></div>
            <div className="blockchain-node"></div>
            <div className="confirmation-check"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;