import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Tokenomics.css';

const Tokenomics = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tokenomics-3d">
      {/* Underwater Blockchain Visualization */}
      <div className="blockchain-ocean">
        <div className="blockchain-blocks">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`blockchain-block ${i === activeBlock ? 'active' : ''}`}
              style={{
                position: 'absolute',
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
                width: '60px',
                height: '40px',
                background: i === activeBlock 
                  ? 'linear-gradient(45deg, #00ffff, #0099ff)' 
                  : 'rgba(0, 100, 200, 0.3)',
                borderRadius: '8px',
                border: '2px solid rgba(0, 255, 255, 0.4)',
                transform: 'translateZ(20px)',
                boxShadow: i === activeBlock 
                  ? '0 0 30px rgba(0, 255, 255, 0.8)' 
                  : '0 0 15px rgba(0, 255, 255, 0.3)'
              }}
              animate={{
                y: [0, -10, 0],
                scale: i === activeBlock ? [1, 1.1, 1] : [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        
        {/* Blockchain Connections */}
        <div className="blockchain-connections">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="blockchain-connection"
              style={{
                position: 'absolute',
                left: `${15 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, #00ffff, #0099ff)',
                transform: 'translateZ(15px)',
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-3d">
        <motion.div
          className="tokenomics-3d-header"
          style={{
            textAlign: 'center',
            marginBottom: '6rem',
            transform: 'translateZ(50px)'
          }}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            style={{
              fontSize: '5rem',
              fontWeight: '900',
              marginBottom: '2rem',
              background: 'linear-gradient(45deg, #00ffff, #0099ff, #66ccff, #00ccff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 60px rgba(0, 255, 255, 0.8)',
              transform: 'translateZ(60px)'
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
            🌊 SHARK ECONOMICS 🌊
          </motion.h2>
          <motion.p 
            style={{
              fontSize: '1.8rem',
              color: '#ffffff',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.8',
              fontWeight: '600',
              opacity: 0.9,
              textShadow: '0 2px 20px rgba(0, 255, 255, 0.4)',
              transform: 'translateZ(30px)'
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
            Revolutionary tokenomics designed for maximum impact and sustainable growth in the crypto ocean
          </motion.p>
        </motion.div>

        {/* Revolutionary 3D Token Information */}
        <motion.div
          className="token-info-3d"
          style={{
            background: 'rgba(0, 50, 100, 0.2)',
            backdropFilter: 'blur(30px)',
            borderRadius: '40px',
            padding: '5rem',
            marginBottom: '5rem',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid rgba(0, 255, 255, 0.4)',
            boxShadow: '0 40px 80px rgba(0, 100, 200, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d'
          }}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            boxShadow: '0 50px 100px rgba(0, 100, 200, 0.6)'
          }}
        >
          {/* 3D Holographic Logo */}
          <motion.div
            className="holographic-logo-container"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '4rem',
              transform: 'translateZ(60px)'
            }}
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="holographic-logo-3d"
              style={{
                position: 'relative',
                transform: 'translateZ(80px)'
              }}
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.img
                src="/whale-shark-logo.svg"
                alt="WhaleShark Logo"
                style={{
                  height: '150px',
                  width: 'auto',
                  filter: 'drop-shadow(0 0 50px rgba(0, 255, 255, 0.8)) brightness(1.3)',
                  transform: 'translateZ(40px)'
                }}
              />
              <div className="holographic-ring"></div>
              <div className="holographic-ring ring-2"></div>
              <div className="holographic-ring ring-3"></div>
            </motion.div>
          </motion.div>

          {/* 3D Token Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            transform: 'translateZ(40px)'
          }}>
            <motion.div
              className="token-metric-3d"
              style={{
                background: 'rgba(0, 100, 200, 0.2)',
                border: '2px solid rgba(0, 255, 255, 0.4)',
                borderRadius: '25px',
                padding: '3rem',
                textAlign: 'center',
                backdropFilter: 'blur(20px)',
                transform: 'translateZ(30px)',
                boxShadow: '0 25px 50px rgba(0, 100, 200, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 10,
                boxShadow: '0 35px 70px rgba(0, 100, 200, 0.5)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* 3D Supply Visualization */}
              <div className="supply-visualization">
                <motion.div 
                  className="supply-bar"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    width: '80px',
                    height: '100px',
                    background: 'linear-gradient(to top, #00ffff, #0099ff)',
                    borderRadius: '10px',
                    transform: 'translateX(-50%) translateZ(25px)',
                    boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)'
                  }}
                  animate={{ 
                    height: ['20px', '100px', '20px'],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <h4 style={{ 
                fontSize: '2rem', 
                fontWeight: '800', 
                color: '#00ffff', 
                marginBottom: '1.5rem', 
                textShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
                transform: 'translateZ(20px)'
              }}>
                Total Supply
              </h4>
              <motion.p 
                style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: '#ffffff', 
                  marginBottom: '1rem', 
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.8)',
                  transform: 'translateZ(25px)'
                }}
                animate={{ 
                  textShadow: [
                    '0 0 30px rgba(255, 255, 255, 0.8)',
                    '0 0 50px rgba(0, 255, 255, 1)',
                    '0 0 30px rgba(255, 255, 255, 0.8)'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                1B $WHALE
              </motion.p>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#ffffff', 
                opacity: 0.9,
                transform: 'translateZ(15px)'
              }}>
                Fixed supply for ultimate scarcity
              </p>
            </motion.div>

            <motion.div
              className="token-metric-3d"
              style={{
                background: 'rgba(0, 150, 100, 0.2)',
                border: '2px solid rgba(0, 255, 150, 0.4)',
                borderRadius: '25px',
                padding: '3rem',
                textAlign: 'center',
                backdropFilter: 'blur(20px)',
                transform: 'translateZ(30px)',
                boxShadow: '0 25px 50px rgba(0, 150, 100, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: -10,
                boxShadow: '0 35px 70px rgba(0, 150, 100, 0.5)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* 3D Market Cap Visualization */}
              <div className="market-cap-visualization">
                <motion.div 
                  className="market-chart"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    width: '100px',
                    height: '80px',
                    background: 'linear-gradient(45deg, #00ff99, #00cc66)',
                    borderRadius: '15px',
                    transform: 'translateX(-50%) translateZ(25px)',
                    boxShadow: '0 0 30px rgba(0, 255, 150, 0.6)'
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <h4 style={{ 
                fontSize: '2rem', 
                fontWeight: '800', 
                color: '#00ff99', 
                marginBottom: '1.5rem', 
                textShadow: '0 0 20px rgba(0, 255, 150, 0.6)',
                transform: 'translateZ(20px)'
              }}>
                Market Cap
              </h4>
              <motion.p 
                style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: '#ffffff', 
                  marginBottom: '1rem', 
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.8)',
                  transform: 'translateZ(25px)'
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
                $50M+
              </motion.p>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#ffffff', 
                opacity: 0.9,
                transform: 'translateZ(15px)'
              }}>
                Rapidly growing ecosystem
              </p>
            </motion.div>

            <motion.div
              className="token-metric-3d"
              style={{
                background: 'rgba(255, 100, 0, 0.2)',
                border: '2px solid rgba(255, 150, 0, 0.4)',
                borderRadius: '25px',
                padding: '3rem',
                textAlign: 'center',
                backdropFilter: 'blur(20px)',
                transform: 'translateZ(30px)',
                boxShadow: '0 25px 50px rgba(255, 100, 0, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 10,
                boxShadow: '0 35px 70px rgba(255, 100, 0, 0.5)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* 3D Liquidity Visualization */}
              <div className="liquidity-visualization">
                <motion.div 
                  className="liquidity-lock"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(45deg, #ff6600, #ff9900)',
                    borderRadius: '50%',
                    transform: 'translateX(-50%) translateZ(25px)',
                    boxShadow: '0 0 30px rgba(255, 100, 0, 0.6)'
                  }}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="lock-chain"
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #ff6600, #ff9900)',
                    borderRadius: '2px',
                    transform: 'translateX(-50%) translateZ(20px)',
                    boxShadow: '0 0 15px rgba(255, 100, 0, 0.5)'
                  }}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scaleX: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <h4 style={{ 
                fontSize: '2rem', 
                fontWeight: '800', 
                color: '#ff6600', 
                marginBottom: '1.5rem', 
                textShadow: '0 0 20px rgba(255, 100, 0, 0.6)',
                transform: 'translateZ(20px)'
              }}>
                Liquidity
              </h4>
              <motion.p 
                style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: '#ffffff', 
                  marginBottom: '1rem', 
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.8)',
                  transform: 'translateZ(25px)'
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
                90%
              </motion.p>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#ffffff', 
                opacity: 0.9,
                transform: 'translateZ(15px)'
              }}>
                Locked for maximum security
              </p>
            </motion.div>
          </div>

          {/* Contract Address Section */}
          <motion.div
            className="contract-address-section"
            style={{
              marginTop: '3rem',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            
            <motion.div
              className="contract-address-container"
              style={{
                background: 'rgba(0, 100, 200, 0.3)',
                border: '2px solid rgba(0, 255, 255, 0.4)',
                borderRadius: '20px',
                padding: '2rem',
                margin: '2rem auto',
                maxWidth: '1000px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 100, 200, 0.3)',
                transform: 'translateZ(20px)'
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 30px 60px rgba(0, 100, 200, 0.5)'
              }}
            >
              <motion.div
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Contract address
              </motion.div>
              
              <motion.div
                style={{
                  fontSize: '1rem',
                  fontFamily: 'monospace',
                  color: '#00ffff',
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  wordBreak: 'break-all',
                  cursor: 'pointer',
                  userSelect: 'all',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                }}
                whileHover={{ 
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigator.clipboard.writeText('Coming Soon');
                }}
                animate={{
                  textShadow: [
                    '0 0 10px rgba(0, 255, 255, 0.5)',
                    '0 0 20px rgba(0, 255, 255, 0.8)',
                    '0 0 10px rgba(0, 255, 255, 0.5)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Coming Soon
              </motion.div>
              
              <motion.div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1rem',
                  gap: '1rem'
                }}
              >
                <motion.p
                  style={{
                    fontSize: '0.9rem',
                    color: '#b8d4f0',
                    opacity: 0.8,
                    margin: 0
                  }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Verified on blockchain
                </motion.p>
                
                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText('Coming Soon');
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #00ffff, #0099ff)',
                    border: '2px solid rgba(0, 255, 255, 0.6)',
                    borderRadius: '8px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                    boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 6px 20px rgba(0, 255, 255, 0.5)',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 4px 15px rgba(0, 255, 255, 0.3)',
                      '0 6px 20px rgba(0, 255, 255, 0.5)',
                      '0 4px 15px rgba(0, 255, 255, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  📋 Copy
                </motion.button>
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          style={{
            background: 'rgba(78, 205, 196, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '4rem',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(78, 205, 196, 0.3)',
            boxShadow: '0 25px 50px rgba(78, 205, 196, 0.2)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 20%, rgba(78, 205, 196, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.05) 0%, transparent 50%)',
            zIndex: 1
          }} />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontSize: '2.8rem',
              fontWeight: '900',
              textAlign: 'center',
              marginBottom: '3rem',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
            }}>
              🛡️ Security & Trust Features 🛡️
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2.5rem'
            }}>
              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '3rem',
                  opacity: 0.8
                }}>🔒</div>
                <h4 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '800', 
                  marginBottom: '1.5rem',
                  color: '#4ecdc4',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}>
                  Smart Contract Audits
                </h4>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#ffffff', opacity: 0.9 }}>
                  Comprehensive security audits by leading blockchain security firms ensure 
                  the integrity and safety of our smart contracts.
                </p>
              </motion.div>

              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '3rem',
                  opacity: 0.8
                }}>💎</div>
                <h4 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '800', 
                  marginBottom: '1.5rem',
                  color: '#ff6b6b',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}>
                  Liquidity Locked
                </h4>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#ffffff', opacity: 0.9 }}>
                  Major portion of liquidity is locked in secure contracts, 
                  preventing rug pulls and ensuring long-term stability.
                </p>
              </motion.div>

              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '3rem',
                  opacity: 0.8
                }}>🌊</div>
                <h4 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '800', 
                  marginBottom: '1.5rem',
                  color: '#00d4ff',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}>
                  Community Governance
                </h4>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#ffffff', opacity: 0.9 }}>
                  Decentralized decision-making process where community members 
                  vote on important protocol changes and improvements.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Token Distribution */}
        <motion.div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '4rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
            zIndex: 1
          }} />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              marginBottom: '2rem',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
            }}>
              <img src="/whale-shark-logo.svg" alt="WhaleShark" style={{height: '40px', width: 'auto', margin: '0 15px', filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.7))'}} />
              Token Distribution Strategy
              <img src="/whale-shark-logo.svg" alt="WhaleShark" style={{height: '40px', width: 'auto', margin: '0 15px', filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.7))'}} />
            </h3>
            <p style={{
              fontSize: '1.4rem',
              color: '#ffffff',
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              opacity: 0.9
            }}>
              Our token distribution is carefully designed to ensure fair allocation, community growth, 
              and long-term sustainability. Every token serves a purpose in building a stronger ecosystem 
              that benefits all participants in the $WHALESHARK revolution.
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Tokenomics;