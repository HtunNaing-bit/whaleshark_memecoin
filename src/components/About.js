import React, { memo } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = memo(() => {
  return (
    <motion.section 
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        <motion.div 
          className="about-profile"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="profile-pic">
            <img src="./whale-shark-logo.svg" alt="WhaleShark PFP" className="pfp-image" />
            <div className="pfp-status online"></div>
          </div>
          <div className="profile-info">
            <h2>WhaleShark</h2>
            <p className="profile-title">The Ocean's Most Powerful Meme Coin</p>
            <p className="profile-bio">
              Swimming through the crypto markets with precision and power<br />
              Devouring weak hands and market volatility with strategic moves<br />
              Ready to moon with our dedicated community and strong fundamentals<br />
              Holding strong through market cycles with diamond-fin resilience
            </p>
          </div>
        </motion.div>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
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
            Buy $whaleshark
          </motion.a>
          <motion.a 
            href="https://x.com/whaleshark_coin?s=21" 
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
            Follow on X
          </motion.a>
          <motion.a 
            href="https://t.me/whaleshark_coin" 
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
            Join Telegram
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default About;
