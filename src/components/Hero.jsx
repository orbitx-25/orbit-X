// src/components/Hero.jsx - Final Working Version
import React, { useState, useEffect, useRef } from 'react';
import { Mic, Search, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);
  const recognitionRef = useRef(null);

  const commands = [
    "Buy NFT from OpenSea",
    "Send 0.1 ETH to vitalik.eth",
    "Swap ETH for USDC",
    "Check my portfolio balance",
    "Bridge assets to Polygon",
    "Show my transaction history"
  ];

  // Initialize speech recognition
  useEffect(() => {
    const initSpeechRecognition = () => {
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onstart = () => {
          console.log('Speech recognition started');
          setIsListening(true);
          setTranscript('');
          setSearchQuery('');
        };

        recognitionRef.current.onresult = (event) => {
          console.log('Speech recognition result received');
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcriptPart = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcriptPart;
            } else {
              interimTranscript += transcriptPart;
            }
          }

          console.log('Interim:', interimTranscript, 'Final:', finalTranscript);

          // Update the search box with live transcription
          if (interimTranscript) {
            setTranscript(interimTranscript);
            setSearchQuery(interimTranscript);
          }

          if (finalTranscript) {
            console.log('Final transcript received:', finalTranscript);
            setSearchQuery(finalTranscript);
            setTranscript(finalTranscript);
            
            // Stop listening when we have final transcript
            setTimeout(() => {
              if (recognitionRef.current) {
                recognitionRef.current.stop();
              }
            }, 500);
          }
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          if (event.error === 'not-allowed') {
            alert('Please allow microphone access to use voice commands. Click the microphone icon again and allow permission.');
          } else if (event.error === 'audio-capture') {
            alert('No microphone was found. Ensure that a microphone is installed.');
          }
        };

        recognitionRef.current.onend = () => {
          console.log('Speech recognition ended');
          setIsListening(false);
        };

      } else {
        console.warn('Speech recognition not supported in this browser');
        setIsSpeechSupported(false);
      }
    };

    initSpeechRecognition();

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Typewriter effect for demo commands
  useEffect(() => {
    if (isListening || searchQuery) return;
    
    const currentCommand = commands[currentIndex];
    if (typedText.length < currentCommand.length) {
      const timer = setTimeout(() => {
        setTypedText(currentCommand.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % commands.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [typedText, currentIndex, isListening, searchQuery]);

  const startListening = () => {
    if (!isSpeechSupported) {
      alert('Speech recognition is not supported in your browser. Please try Chrome, Edge, or Safari.');
      return;
    }

    if (!recognitionRef.current) {
      alert('Speech recognition is not available. Please refresh the page and try again.');
      return;
    }

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      // If already started, stop and restart
      if (error.message.includes('already started')) {
        recognitionRef.current.stop();
        setTimeout(() => {
          recognitionRef.current.start();
        }, 300);
      } else {
        setIsListening(false);
        alert('Error starting voice recognition. Please try again.');
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleVoiceButtonClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const processCommand = (command) => {
    if (command.trim()) {
      // Simulate AI processing with different responses based on command
      let response = `Command received: "${command}"`;
      let emoji = '🎯';
      
      if (command.toLowerCase().includes('buy') && command.toLowerCase().includes('nft')) {
        response = `🎨 Processing NFT purchase: "${command}"\n\nConnecting to OpenSea...\nVerifying wallet balance...\nConfirming transaction...`;
        emoji = '🎨';
      } else if (command.toLowerCase().includes('send') && command.toLowerCase().includes('eth')) {
        response = `💸 Processing ETH transfer: "${command}"\n\nValidating recipient address...\nChecking gas fees...\nConfirming transaction details...`;
        emoji = '💸';
      } else if (command.toLowerCase().includes('swap')) {
        response = `🔄 Processing token swap: "${command}"\n\nFinding best exchange rates...\nCalculating slippage...\nExecuting swap...`;
        emoji = '🔄';
      } else if (command.toLowerCase().includes('balance')) {
        response = `💰 Checking portfolio balance: "${command}"\n\nFetching latest data from blockchain...\nCalculating total value...\nGenerating portfolio report...`;
        emoji = '💰';
      } else if (command.toLowerCase().includes('bridge')) {
        response = `🌉 Processing cross-chain bridge: "${command}"\n\nInitializing bridge protocol...\nVerifying network compatibility...\nExecuting cross-chain transfer...`;
        emoji = '🌉';
      }
      
      alert(`${emoji} ${response}`);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      processCommand(searchQuery);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setTranscript('');
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="title-wrapper">
            <h1 className="hero-title">
              Speak Your <span className="gradient-text">Blockchain</span> Commands
            </h1>
            <div className="sparkle-container">
              <Sparkles className="sparkle-icon" />
            </div>
          </div>
          
          <p className="hero-subtitle">
            Revolutionizing crypto transactions with AI-powered voice control. 
            Execute trades, transfer assets, and manage your portfolio - just by speaking.
          </p>
          
          <form className="search-container" onSubmit={handleSearchSubmit}>
            <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder={isListening ? "Speak now..." : (typedText || "Say 'Buy NFT' or 'Send 0.1 ETH to...'")}
                value={isListening ? transcript : searchQuery}
                onChange={(e) => !isListening && setSearchQuery(e.target.value)}
                className="search-input"
                readOnly={isListening}
              />
              <button 
                type="button"
                className={`voice-btn ${isListening ? 'listening' : ''}`}
                onClick={handleVoiceButtonClick}
                disabled={!isSpeechSupported}
              >
                <Mic className="voice-icon" />
                {isListening && (
                  <div className="voice-waves">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                  </div>
                )}
              </button>
            </div>
            
            {isListening && (
              <div className="listening-indicator">
                <div className="pulse"></div>
                {transcript ? (
                  <span className="live-transcript">Heard: "<strong>{transcript}</strong>"</span>
                ) : (
                  'Listening... Speak your command'
                )}
                <button 
                  type="button"
                  className="stop-listening-btn"
                  onClick={stopListening}
                >
                  Stop
                </button>
              </div>
            )}

            {!isSpeechSupported && (
              <div className="browser-warning">
                ⚠️ Voice commands not supported in this browser. Try Chrome or Edge.
              </div>
            )}

            {searchQuery && !isListening && (
              <div className="command-preview">
                <p>Ready to execute: <strong>"{searchQuery}"</strong></p>
                <div className="action-buttons">
                  <button type="submit" className="execute-btn">
                    🚀 Execute Command
                  </button>
                  <button 
                    type="button" 
                    className="clear-btn"
                    onClick={clearSearch}
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">99%</div>
              <div className="stat-label">Voice Accuracy</div>
            </div>
            <div className="stat">
              <div className="stat-number">2s</div>
              <div className="stat-label">Avg Response</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Commands</div>
            </div>
            <div className="stat">
              <div className="stat-number">AI</div>
              <div className="stat-label">Tone Analysis</div>
            </div>
          </div>

          {/* Voice Command Examples */}
          <div className="voice-examples">
            <h3>Try saying:</h3>
            <div className="example-chips">
              {commands.slice(0, 4).map((command, index) => (
                <button
                  key={index}
                  className="example-chip"
                  onClick={() => setSearchQuery(command)}
                  type="button"
                >
                  {command}
                </button>
              ))}
            </div>
            <p className="examples-tip">
              Or click the microphone and speak any blockchain command!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;