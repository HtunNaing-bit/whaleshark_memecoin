import React from 'react';
import { motion } from 'framer-motion';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <motion.section 
      className="video-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="video-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Dive into the Ocean 🌊
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Experience the majestic WhaleShark swimming through the crypto seas
        </motion.p>
        <div className="whale-shark-animation">
          <svg viewBox="0 0 800 400" className="animation-svg">
            <defs>
              {/* Enhanced Gradients */}
              <radialGradient id="oceanGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" style={{stopColor:'#000811', stopOpacity:1}} />
                <stop offset="30%" style={{stopColor:'#001122', stopOpacity:1}} />
                <stop offset="70%" style={{stopColor:'#002244', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#003366', stopOpacity:1}} />
              </radialGradient>
              
              <linearGradient id="whaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#00ffff', stopOpacity:1}} />
                <stop offset="30%" style={{stopColor:'#00d4ff', stopOpacity:1}} />
                <stop offset="70%" style={{stopColor:'#0099cc', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#006699', stopOpacity:1}} />
              </linearGradient>
              
              <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor:'#00ffff', stopOpacity:0.8}} />
                <stop offset="70%" style={{stopColor:'#00d4ff', stopOpacity:0.4}} />
                <stop offset="100%" style={{stopColor:'#0099cc', stopOpacity:0.1}} />
              </radialGradient>
              
              <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.3}} />
                <stop offset="100%" style={{stopColor:'#00d4ff', stopOpacity:0.1}} />
              </linearGradient>
              
              {/* Filter Effects */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00d4ff" floodOpacity="0.5"/>
              </filter>
            </defs>
            
            {/* Ocean Background with Depth */}
            <rect width="800" height="400" fill="url(#oceanGradient)" />
            
            {/* Light Rays */}
            <g className="light-rays">
              <path d="M 100 0 L 120 400" stroke="url(#lightGradient)" strokeWidth="2" opacity="0.3" className="ray ray-1" />
              <path d="M 200 0 L 220 400" stroke="url(#lightGradient)" strokeWidth="2" opacity="0.3" className="ray ray-2" />
              <path d="M 400 0 L 420 400" stroke="url(#lightGradient)" strokeWidth="2" opacity="0.3" className="ray ray-3" />
              <path d="M 600 0 L 620 400" stroke="url(#lightGradient)" strokeWidth="2" opacity="0.3" className="ray ray-4" />
              <path d="M 700 0 L 720 400" stroke="url(#lightGradient)" strokeWidth="2" opacity="0.3" className="ray ray-5" />
            </g>
            
            {/* Ocean Floor with Texture */}
            <ellipse cx="400" cy="380" rx="400" ry="50" fill="#001a33" opacity="0.8" />
            <ellipse cx="400" cy="370" rx="350" ry="30" fill="#002244" opacity="0.6" />
            
            {/* Enhanced Whale Shark */}
            <g className="whale-shark-group" filter="url(#glow)">
              {/* Whale Shark Body with Highlights */}
              <ellipse cx="400" cy="200" rx="120" ry="50" fill="url(#whaleGradient)" className="whale-body" />
              <ellipse cx="420" cy="190" rx="80" ry="30" fill="url(#lightGradient)" className="whale-highlight" />
              
              {/* Whale Shark Head */}
              <ellipse cx="500" cy="200" rx="60" ry="45" fill="url(#whaleGradient)" className="whale-head" />
              <ellipse cx="510" cy="190" rx="40" ry="25" fill="url(#lightGradient)" className="head-highlight" />
              
              {/* Enhanced Mouth */}
              <ellipse cx="550" cy="200" rx="25" ry="35" fill="#000811" className="whale-mouth" />
              <ellipse cx="545" cy="195" rx="15" ry="25" fill="#001122" className="mouth-inner" />
              
              {/* Enhanced Eye */}
              <circle cx="520" cy="185" r="10" fill="#ffffff" className="whale-eye" />
              <circle cx="522" cy="187" r="5" fill="#000000" className="whale-pupil" />
              <circle cx="521" cy="186" r="2" fill="#ffffff" className="eye-shine" />
              
              {/* Enhanced Tail */}
              <path d="M 280 200 Q 260 185 270 170 Q 265 200 260 230 Q 270 215 280 200" fill="url(#whaleGradient)" className="whale-tail" />
              <path d="M 270 200 Q 250 190 260 180 Q 255 200 250 220 Q 260 210 270 200" fill="url(#lightGradient)" className="tail-highlight" />
              
              {/* Enhanced Fins */}
              <ellipse cx="330" cy="170" rx="30" ry="18" fill="url(#whaleGradient)" transform="rotate(-20 330 170)" className="whale-fin-top" />
              <ellipse cx="330" cy="230" rx="30" ry="18" fill="url(#whaleGradient)" transform="rotate(20 330 230)" className="whale-fin-bottom" />
              
              {/* Enhanced Spots with Glow */}
              <circle cx="350" cy="180" r="10" fill="#00ffff" opacity="0.8" className="whale-spot" filter="url(#glow)" />
              <circle cx="370" cy="210" r="8" fill="#00d4ff" opacity="0.8" className="whale-spot" filter="url(#glow)" />
              <circle cx="390" cy="190" r="9" fill="#00ffff" opacity="0.8" className="whale-spot" filter="url(#glow)" />
              <circle cx="410" cy="220" r="7" fill="#00d4ff" opacity="0.8" className="whale-spot" filter="url(#glow)" />
              <circle cx="430" cy="200" r="8" fill="#00ffff" opacity="0.8" className="whale-spot" filter="url(#glow)" />
            </g>
            
            {/* Enhanced Bubbles with Variety */}
            <g className="bubbles">
              <circle cx="150" cy="350" r="20" fill="url(#bubbleGradient)" className="bubble bubble-1" filter="url(#glow)" />
              <circle cx="250" cy="360" r="15" fill="url(#bubbleGradient)" className="bubble bubble-2" filter="url(#glow)" />
              <circle cx="450" cy="355" r="25" fill="url(#bubbleGradient)" className="bubble bubble-3" filter="url(#glow)" />
              <circle cx="550" cy="350" r="18" fill="url(#bubbleGradient)" className="bubble bubble-4" filter="url(#glow)" />
              <circle cx="650" cy="365" r="22" fill="url(#bubbleGradient)" className="bubble bubble-5" filter="url(#glow)" />
              <circle cx="100" cy="340" r="12" fill="url(#bubbleGradient)" className="bubble bubble-6" filter="url(#glow)" />
              <circle cx="750" cy="345" r="16" fill="url(#bubbleGradient)" className="bubble bubble-7" filter="url(#glow)" />
            </g>
            
            {/* Enhanced Particles */}
            <g className="particles">
              <circle cx="120" cy="80" r="3" fill="#00ffff" className="particle particle-1" filter="url(#glow)" />
              <circle cx="220" cy="120" r="2" fill="#00d4ff" className="particle particle-2" filter="url(#glow)" />
              <circle cx="320" cy="90" r="4" fill="#00ffff" className="particle particle-3" filter="url(#glow)" />
              <circle cx="480" cy="110" r="2" fill="#00d4ff" className="particle particle-4" filter="url(#glow)" />
              <circle cx="580" cy="85" r="3" fill="#00ffff" className="particle particle-5" filter="url(#glow)" />
              <circle cx="680" cy="95" r="2" fill="#00d4ff" className="particle particle-6" filter="url(#glow)" />
            </g>
            
            {/* School of Small Fish */}
            <g className="fish-school">
              <ellipse cx="200" cy="150" rx="8" ry="4" fill="#00d4ff" opacity="0.7" className="fish fish-1" />
              <ellipse cx="180" cy="160" rx="6" ry="3" fill="#00ffff" opacity="0.7" className="fish fish-2" />
              <ellipse cx="160" cy="155" rx="7" ry="3" fill="#00d4ff" opacity="0.7" className="fish fish-3" />
              <ellipse cx="600" cy="140" rx="9" ry="4" fill="#00ffff" opacity="0.7" className="fish fish-4" />
              <ellipse cx="620" cy="135" rx="6" ry="3" fill="#00d4ff" opacity="0.7" className="fish fish-5" />
            </g>
          </svg>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
