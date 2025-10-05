import React, { useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Tokenomics.css';

const Tokenomics = memo(() => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText('CA1234567890abcdef1234567890abcdef12345678');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <motion.section 
      className="tokenomics"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>TOKENOMICS</h2>
      <motion.div 
        className="tokenomics-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="tokenomics-logo">
          <img src="./whale-shark-logo.svg" alt="WhaleShark Logo" className="tokenomics-logo-img" />
        </div>
        <div className="tokenomics-info">
          <h3>1,000,000,000</h3>
          <p>TOTAL SUPPLY</p>
          <div className="tokenomics-details">
            <div className="tokenomics-item">
              <span className="label">Liquidity:</span>
              <span className="value">100% Locked</span>
            </div>
            <div className="tokenomics-item">
              <span className="label">Tax:</span>
              <span className="value">0% Buy / 0% Sell</span>
            </div>
            <div className="tokenomics-item">
              <span className="label">Burns:</span>
              <span className="value">5% of Supply</span>
            </div>
            <div className="tokenomics-item">
              <span className="label">Marketing:</span>
              <span className="value">2% of Supply</span>
            </div>
          </div>
          <div className="contract-info">
            <p>$whaleshark CONTRACT ADDRESS</p>
            <div className="contract-address">
              <span>CA1234567890abcdef1234567890abcdef12345678</span>
              <motion.button 
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={copyToClipboard}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </motion.button>
            </div>
            <div className="tokenomics-actions">
              <motion.a 
                href="https://dexscreener.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                View Chart
              </motion.a>
              <motion.a 
                href="https://pump.fun" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Buy Now
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
});

export default Tokenomics;
