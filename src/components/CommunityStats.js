import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CommunityStats.css';

const CommunityStats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    sharks: 0,
    treasure: 0,
    growth: 0,
    waters: 0
  });

  useEffect(() => {
    const animateNumbers = () => {
      const targetStats = {
        sharks: 1700,
        treasure: 5.2,
        growth: 250,
        waters: 2.4
      };

      const duration = 1500; // Reduced duration
      const steps = 30; // Reduced steps for better performance
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          sharks: Math.floor(targetStats.sharks * progress),
          treasure: (targetStats.treasure * progress).toFixed(1),
          growth: Math.floor(targetStats.growth * progress),
          waters: Math.floor(targetStats.waters * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateNumbers, 300); // Reduced delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="community-stats-3d">
      {/* Underwater Data Visualization Background */}
      <div className="data-ocean-background">
        <div className="data-streams">
          <motion.div 
            className="data-stream stream-1"
            animate={{ y: [0, -100, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="data-stream stream-2"
            animate={{ y: [0, -120, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="data-stream stream-3"
            animate={{ y: [0, -80, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <div className="container-3d">
        <motion.div
          className="stats-3d-header"
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            transform: 'translateZ(50px)'
          }}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #00ffff, #0099ff, #66ccff, #00ccff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 60px rgba(0, 255, 255, 0.8)',
              transform: 'translateZ(60px)',
              lineHeight: '1.3',
              letterSpacing: '0.025em',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              textAlign: 'center'
            }}
            animate={{ 
              textShadow: [
                '0 0 60px rgba(0, 255, 255, 0.8)',
                '0 0 80px rgba(0, 255, 255, 1)',
                '0 0 60px rgba(0, 255, 255, 0.8)'
              ]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌊 SHARK POD ANALYTICS 🌊
          </motion.h2>
          <motion.p 
            className="section-description"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#ffffff',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '500',
              opacity: 0.9,
              textShadow: '0 2px 20px rgba(0, 255, 255, 0.4)',
              transform: 'translateZ(30px)',
              letterSpacing: '0.01em',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              textAlign: 'center'
            }}
            animate={{ 
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Dive deep into the metrics that showcase our pod's dominance in the crypto ocean
          </motion.p>
        </motion.div>

        {/* Revolutionary 3D Stats Grid */}
        <div className="stats-3d-grid">
          <motion.div
            className="stat-3d-card"
            style={{
              background: 'rgba(100, 0, 200, 0.2)',
              border: '2px solid rgba(150, 0, 255, 0.4)',
              borderRadius: '20px',
              padding: '1.2rem',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              transform: 'translateZ(30px)',
              boxShadow: '0 15px 30px rgba(100, 0, 200, 0.3)',
              minHeight: '280px'
            }}
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -15, 
              scale: 1.05,
              rotateY: 10,
              boxShadow: '0 30px 60px rgba(100, 0, 200, 0.5)'
            }}
          >
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <motion.div
                style={{
                  fontSize: '5rem',
                  marginBottom: '1rem',
                  color: '#00ffff',
                  filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.8))'
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div style={{
                  fontSize: '1.8rem',
                  filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.8))'
                }}>
                  👥
                </div>
              </motion.div>
              <motion.h3 
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  fontWeight: '900',
                  marginBottom: '1rem',
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                  transform: 'translateZ(20px)',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  textAlign: 'center'
                }}
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(255, 255, 255, 0.8)',
                    '0 0 50px rgba(0, 255, 255, 1)',
                    '0 0 20px rgba(255, 255, 255, 0.8)'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {(animatedStats.sharks / 1000).toFixed(1)}k+
              </motion.h3>
              <p style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                fontWeight: '800',
                color: '#00ffff',
                marginBottom: '0.8rem',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                transform: 'translateZ(15px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}>
                Community Members
              </p>
              <p style={{
                fontSize: 'clamp(0.5rem, 1.2vw, 0.7rem)',
                color: '#ffffff',
                opacity: 0.9,
                lineHeight: '1.4',
                transform: 'translateZ(10px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}>
                Swimming with fierce determination in our pod
              </p>
            </div>
          </motion.div>

          <motion.div
            className="stat-3d-card"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 100, 50, 0.3) 0%, rgba(0, 150, 75, 0.2) 50%, rgba(0, 200, 100, 0.3) 100%)',
              backdropFilter: 'blur(40px)',
              borderRadius: '20px',
              padding: '0.6rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(0, 255, 150, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 150, 100, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'translateZ(30px)',
              transformStyle: 'preserve-3d'
            }}
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -20, 
              scale: 1.05,
              rotateY: -10,
              boxShadow: '0 40px 80px rgba(0, 150, 100, 0.6)'
            }}
          >
            {/* Treasure Visualization */}
            <div className="treasure-visualization">
              <motion.div 
                className="treasure-chest"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  width: '80px',
                  height: '60px',
                  background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
                  borderRadius: '10px',
                  transform: 'translateX(-50%) translateZ(25px)'
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotateY: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="treasure-glow"
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  width: '100px',
                  height: '20px',
                  background: 'radial-gradient(ellipse, rgba(255, 215, 0, 0.6) 0%, transparent 70%)',
                  borderRadius: '50%',
                  transform: 'translateX(-50%) translateZ(20px)'
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <motion.div
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  color: '#00ff99',
                  filter: 'drop-shadow(0 0 30px rgba(0, 255, 150, 0.8))'
                }}
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💎
              </motion.div>
              <motion.h3 
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  fontWeight: '900',
                  marginBottom: '1rem',
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                  transform: 'translateZ(20px)',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  textAlign: 'center'
                }}
                animate={{ 
                  textShadow: [
                    '0 0 30px rgba(255, 255, 255, 0.8)',
                    '0 0 50px rgba(0, 255, 150, 1)',
                    '0 0 30px rgba(255, 255, 255, 0.8)'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ${animatedStats.treasure}M+
              </motion.h3>
              <p style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                fontWeight: '800',
                color: '#00ff99',
                marginBottom: '1rem',
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)',
                transform: 'translateZ(20px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}>
                Market Cap
              </p>
              <p style={{
                fontSize: 'clamp(0.5rem, 1.2vw, 0.7rem)',
                color: '#ffffff',
                opacity: 0.9,
                lineHeight: '1.4',
                transform: 'translateZ(10px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}>
                Secure and growing ecosystem value
              </p>
            </div>
          </motion.div>

          <motion.div
            className="stat-3d-card"
            style={{
              background: 'linear-gradient(135deg, rgba(200, 50, 0, 0.3) 0%, rgba(255, 100, 25, 0.2) 50%, rgba(255, 150, 50, 0.3) 100%)',
              backdropFilter: 'blur(40px)',
              borderRadius: '20px',
              padding: '0.6rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255, 150, 0, 0.2)',
              boxShadow: '0 20px 40px rgba(255, 100, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'translateZ(30px)',
              transformStyle: 'preserve-3d'
            }}
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -20, 
              scale: 1.05,
              rotateY: 10,
              boxShadow: '0 40px 80px rgba(255, 100, 0, 0.6)'
            }}
          >
            {/* Growth Rocket Visualization */}
            <div className="rocket-visualization">
              <motion.div 
                className="rocket-trail"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  width: '4px',
                  height: '80px',
                  background: 'linear-gradient(to top, #ff6600, #ff9900, transparent)',
                  borderRadius: '2px',
                  transform: 'translateX(-50%) translateZ(20px)'
                }}
                animate={{ 
                  height: ['20px', '80px', '20px'],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="rocket"
                style={{
                  position: 'absolute',
                  bottom: '100px',
                  left: '50%',
                  width: '30px',
                  height: '40px',
                  background: 'linear-gradient(45deg, #ff6600, #ff9900)',
                  borderRadius: '5px',
                  transform: 'translateX(-50%) translateZ(25px)'
                }}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <motion.div
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  color: '#ff6600',
                  filter: 'drop-shadow(0 0 30px rgba(255, 100, 0, 0.8))'
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>
              <motion.h3 
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  fontWeight: '900',
                  marginBottom: '1rem',
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                  transform: 'translateZ(20px)',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  textAlign: 'center'
                }}
                animate={{ 
                  textShadow: [
                    '0 0 30px rgba(255, 255, 255, 0.8)',
                    '0 0 50px rgba(255, 100, 0, 1)',
                    '0 0 30px rgba(255, 255, 255, 0.8)'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {animatedStats.growth}%
              </motion.h3>
              <p style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                fontWeight: '800',
                color: '#ff6600',
                marginBottom: '1rem',
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)',
                transform: 'translateZ(20px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}>
                Growth Rate
              </p>
              <p style={{
                fontSize: 'clamp(0.5rem, 1.2vw, 0.7rem)',
                color: '#ffffff',
                opacity: 0.9,
                lineHeight: '1.4',
                transform: 'translateZ(10px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}>
                Month-over-month pod expansion
              </p>
            </div>
          </motion.div>

          <motion.div
            className="stat-3d-card"
            style={{
              background: 'linear-gradient(135deg, rgba(50, 0, 100, 0.3) 0%, rgba(100, 25, 150, 0.2) 50%, rgba(150, 50, 200, 0.3) 100%)',
              backdropFilter: 'blur(40px)',
              borderRadius: '20px',
              padding: '0.6rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(150, 0, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(100, 0, 200, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'translateZ(30px)',
              transformStyle: 'preserve-3d'
            }}
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -20, 
              scale: 1.05,
              rotateY: -10,
              boxShadow: '0 40px 80px rgba(100, 0, 200, 0.6)'
            }}
          >
            {/* Global Waters Visualization */}
            <div className="global-waters-visualization">
              <motion.div 
                className="world-map"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  width: '120px',
                  height: '60px',
                  background: 'radial-gradient(ellipse, rgba(0, 150, 255, 0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  transform: 'translateX(-50%) translateZ(20px)'
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="wave"
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '50%',
                  width: '100px',
                  height: '20px',
                  background: 'linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.6), transparent)',
                  borderRadius: '50%',
                  transform: 'translateX(-50%) translateZ(15px)'
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <motion.div
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  color: '#9900ff',
                  filter: 'drop-shadow(0 0 30px rgba(150, 0, 255, 0.8))'
                }}
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🌊
              </motion.div>
              <motion.h3 
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  fontWeight: '900',
                  marginBottom: '1rem',
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                  transform: 'translateZ(20px)',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  textAlign: 'center'
                }}
                animate={{ 
                  textShadow: [
                    '0 0 30px rgba(255, 255, 255, 0.8)',
                    '0 0 50px rgba(150, 0, 255, 1)',
                    '0 0 30px rgba(255, 255, 255, 0.8)'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ${animatedStats.waters.toFixed(1)}M
              </motion.h3>
              <p style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                fontWeight: '800',
                color: '#9900ff',
                marginBottom: '1rem',
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)',
                transform: 'translateZ(20px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}>
                24 Hours Volume
              </p>
              <p style={{
                fontSize: 'clamp(0.5rem, 1.2vw, 0.7rem)',
                color: '#ffffff',
                opacity: 0.9,
                lineHeight: '1.4',
                transform: 'translateZ(10px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}>
                Global trading activity and market participation
              </p>
            </div>
          </motion.div>

        </div>

        {/* Revolutionary 3D Analytics Summary */}
        <motion.div
          className="analytics-3d-summary"
          style={{
            background: 'rgba(0, 50, 100, 0.2)',
            backdropFilter: 'blur(30px)',
            borderRadius: '40px',
            padding: '0.8rem',
            marginTop: '3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 40px 80px rgba(0, 100, 200, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d'
          }}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            boxShadow: '0 50px 100px rgba(0, 100, 200, 0.6)'
          }}
        >
          {/* 3D Data Flow Visualization */}
          <div className="data-flow-3d">
            <motion.div 
              className="data-node"
              style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '20px',
                height: '20px',
                background: 'radial-gradient(circle, #00ffff 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translateZ(30px)'
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="data-node"
              style={{
                position: 'absolute',
                top: '30%',
                right: '15%',
                width: '25px',
                height: '25px',
                background: 'radial-gradient(circle, #00ff99 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translateZ(25px)'
              }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="data-node"
              style={{
                position: 'absolute',
                bottom: '25%',
                left: '20%',
                width: '18px',
                height: '18px',
                background: 'radial-gradient(circle, #ff6600 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translateZ(35px)'
              }}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.9, 0.3]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.h3 
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                fontWeight: '900',
                marginBottom: '1.5rem',
                background: 'linear-gradient(45deg, #00ffff, #0099ff, #66ccff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(0, 255, 255, 0.6)',
                transform: 'translateZ(40px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}
              animate={{ 
                textShadow: [
                  '0 0 40px rgba(0, 255, 255, 0.6)',
                  '0 0 60px rgba(0, 255, 255, 0.9)',
                  '0 0 40px rgba(0, 255, 255, 0.6)'
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🌊 POD POWER ANALYTICS 🌊
            </motion.h3>
            <motion.p 
              style={{
                fontSize: 'clamp(0.7rem, 1.8vw, 1rem)',
                color: '#ffffff',
                lineHeight: '1.8',
                maxWidth: '1000px',
                margin: '0 auto',
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)',
                opacity: 0.9,
                transform: 'translateZ(30px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'center'
              }}
              animate={{ 
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Our success is measured not just in numbers, but in the strength of our community. 
              Every shark in our pod contributes to our ecosystem's growth, creating a sustainable 
              and thriving environment where everyone can succeed together in the depths of DeFi.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityStats;