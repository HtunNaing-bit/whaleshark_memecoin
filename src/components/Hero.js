import React, { memo } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = memo(() => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="./whale-shark-logo.svg" alt="whale shark wif backpack" className="hero-logo" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          $whaleshark
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          The Ocean's Most Powerful Meme Coin 🦈🌊
        </motion.p>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Dive deep into the crypto ocean with WhaleShark - the meme coin that's making waves! 
          Our friendly whale shark is ready to devour the competition with its massive mouth wide open. 
          Join the pod and ride the wave to the moon! 🚀
        </motion.p>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="stat-item">
            <span className="stat-number">1B</span>
            <span className="stat-label">Total Supply</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">0%</span>
            <span className="stat-label">Tax</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Community</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.a 
            href="https://dexscreener.com" 
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
            Check on DexScreener
          </motion.a>
          <motion.a 
            href="https://pump.fun" 
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
            Buy $whaleshark Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
