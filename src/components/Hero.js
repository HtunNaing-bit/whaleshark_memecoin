import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import './ButtonStyles.css';

const Hero = () => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="hero-container">
        {/* Hero Header */}
        <motion.div 
          className="hero-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="hero-logo">
            <img src="/whale-shark-logo.svg" alt="WhaleShark Logo" />
          </div>
          <h2>WHALESHARK</h2>
          <p>The Ocean's Most Powerful Meme Coin</p>
        </motion.div>


        {/* Hero Description Card */}
        <motion.div 
          className="hero-description-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="hero-description">
            <p>Dive deep into the crypto ocean with $whaleshark - launching on Pump.fun!</p>
            <p>Our friendly whale shark is ready to devour the competition and graduate to CEX exchanges.</p>
            <p>Join the pod early and ride the wave to the moon!</p>
          </div>
        </motion.div>

        {/* Hero Philosophy Section */}
        <motion.div 
          className="hero-philosophy-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>🎯 Why $whaleshark Will Moon</h3>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <div className="philosophy-icon">🏊</div>
              <p>Swimming through the crypto markets with precision and power</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">🦈</div>
              <p>Devouring weak hands and market volatility with strategic moves</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">🌙</div>
              <p>Ready to moon with our dedicated community and strong fundamentals</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://x.com/whaleshark_coin?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-follow-x"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            FOLLOW ON X
          </motion.a>
          <motion.a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            🚀 BUY NOW
          </motion.a>
          <motion.a 
            href="https://dexscreener.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary btn-dexscreener"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            📊 DEXSCREENER
          </motion.a>
          <motion.a
            href="https://t.me/whaleshark_coin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-telegram"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            JOIN ON TELEGRAM
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;