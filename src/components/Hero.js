import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-3d-ocean">
      {/* 3D Underwater Environment */}
      <div className="ocean-depth-layers">
        <div className="depth-layer layer-1"></div>
        <div className="depth-layer layer-2"></div>
        <div className="depth-layer layer-3"></div>
        <div className="depth-layer layer-4"></div>
      </div>

      {/* Floating Sea Creatures */}
      <div className="sea-creatures">
        <motion.div 
          className="jellyfish jellyfish-1"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="jellyfish-body">🪼</div>
        </motion.div>
        
        <motion.div 
          className="jellyfish jellyfish-2"
          animate={{ 
            y: [0, -40, 0],
            x: [0, -15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="jellyfish-body">🪼</div>
        </motion.div>

        <motion.div 
          className="fish-school"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="fish">🐠</div>
          <div className="fish">🐟</div>
          <div className="fish">🐡</div>
        </motion.div>
      </div>

      {/* Interactive 3D Hero Content */}
      <div className="hero-3d-container">
        {/* Main 3D Title with Parallax */}
        <motion.div 
          className="hero-3d-title-section"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
            perspective: 1000
          }}
          initial={{ opacity: 0, y: 100, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="whale-shark-3d-model"
            style={{
              transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)`,
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
            <div className="whale-shark-3d">
              <img 
                src="/whale-shark-logo.svg" 
                alt="WhaleShark Logo" 
                style={{
                  height: '120px',
                  width: 'auto',
                  filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.8)) brightness(1.2)'
                }}
              />
            </div>
            <div className="whale-shark-glow"></div>
          </motion.div>

          <motion.h1 
            className="hero-3d-title"
            style={{
              fontSize: '3.5rem'
            }}
            animate={{ 
              scale: [1, 1.05, 1],
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
            $WHALESHARK
          </motion.h1>
          
          <motion.p 
            className="hero-3d-tagline"
            style={{
              fontSize: '1.4rem'
            }}
            animate={{ 
              y: [0, -5, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌊 DIVE DEEP INTO THE FUTURE OF DEFI 🌊
          </motion.p>
        </motion.div>

        {/* Revolutionary 3D Underwater Card */}
        <motion.div 
          className="hero-3d-card"
          style={{
            background: 'rgba(0, 50, 100, 0.2)',
            backdropFilter: 'blur(30px)',
            borderRadius: '25px',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '2rem',
            border: '2px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 100, 200, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transform: 'translateZ(20px)',
            perspective: 1000
          }}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.6
          }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            boxShadow: '0 40px 80px rgba(0, 100, 200, 0.6)'
          }}
        >
          {/* 3D Underwater Background Effects */}
          <div className="underwater-bubbles">
            <motion.div 
              className="bubble bubble-1"
              animate={{ 
                y: [0, -100, 0],
                x: [0, 20, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="bubble bubble-2"
              animate={{ 
                y: [0, -120, 0],
                x: [0, -15, 0],
                scale: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div 
              className="bubble bubble-3"
              animate={{ 
                y: [0, -80, 0],
                x: [0, 30, 0],
                scale: [0.4, 0.9, 0.4]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>
          
          <div className="hero-3d-content" style={{ position: 'relative', zIndex: 2 }}>
            {/* 3D Logo with Holographic Effect */}
            
            <motion.div
              className="hero-3d-description"
              style={{
                textAlign: 'center',
                maxWidth: '1000px',
                margin: '0 auto',
                transform: 'translateZ(30px)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(45deg, #00ffff, #0099ff, #66ccff, #00ccff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
                  transform: 'translateZ(40px)'
                }}
                animate={{ 
                  textShadow: [
                    '0 0 40px rgba(0, 255, 255, 0.6)',
                    '0 0 60px rgba(0, 255, 255, 0.9)',
                    '0 0 40px rgba(0, 255, 255, 0.6)'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🌊 REVOLUTIONARY DEFI ECOSYSTEM 🌊
              </motion.h2>
              
              <motion.p 
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  transform: 'translateZ(20px)'
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
                $WHALESHARK isn't just another token - it's a complete underwater ecosystem 
                that's revolutionizing decentralized finance with cutting-edge technology, 
                community-driven innovation, and sustainable growth mechanisms.
              </motion.p>
              
              {/* 3D Feature Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                <motion.div
                  className="feature-3d-card"
                  style={{
                    background: 'rgba(0, 100, 200, 0.2)',
                    border: '2px solid rgba(0, 255, 255, 0.4)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(20px)',
                    transform: 'translateZ(30px)',
                    boxShadow: '0 15px 30px rgba(0, 100, 200, 0.3)'
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: '0 30px 60px rgba(0, 100, 200, 0.5)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ⚡
                  </motion.div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#00ffff', marginBottom: '0.8rem', textShadow: '0 0 15px rgba(0, 255, 255, 0.6)' }}>Lightning Speed</h4>
                  <p style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.9, lineHeight: '1.4' }}>Instant transactions with minimal fees and maximum efficiency</p>
                </motion.div>
                
                <motion.div
                  className="feature-3d-card"
                  style={{
                    background: 'rgba(0, 150, 100, 0.2)',
                    border: '2px solid rgba(0, 255, 150, 0.4)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(20px)',
                    transform: 'translateZ(30px)',
                    boxShadow: '0 15px 30px rgba(0, 150, 100, 0.3)'
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    rotateY: -10,
                    boxShadow: '0 30px 60px rgba(0, 150, 100, 0.5)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
                    animate={{ 
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🛡️
                  </motion.div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#00ff99', marginBottom: '0.8rem', textShadow: '0 0 15px rgba(0, 255, 150, 0.6)' }}>Ocean Security</h4>
                  <p style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.9, lineHeight: '1.4' }}>Military-grade security protocols protecting your investments</p>
                </motion.div>
                
                <motion.div
                  className="feature-3d-card"
                  style={{
                    background: 'rgba(100, 0, 200, 0.2)',
                    border: '2px solid rgba(150, 0, 255, 0.4)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(20px)',
                    transform: 'translateZ(30px)',
                    boxShadow: '0 15px 30px rgba(100, 0, 200, 0.3)'
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: '0 30px 60px rgba(100, 0, 200, 0.5)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🌊
                  </motion.div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#9900ff', marginBottom: '0.8rem', textShadow: '0 0 15px rgba(150, 0, 255, 0.6)' }}>Community Pod</h4>
                  <p style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.9, lineHeight: '1.4' }}>Built by the community, for the community, swimming together</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Revolutionary 3D Action Buttons */}
        <motion.div 
          className="hero-3d-buttons"
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            transform: 'translateZ(40px)'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 2rem)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            perspective: 1000
          }}>
            <motion.a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-ocean"
              style={{
                background: 'linear-gradient(135deg, #00ffff, #0099ff, #0066cc)',
                border: '2px solid rgba(0, 255, 255, 0.6)',
                borderRadius: '25px',
                padding: 'clamp(0.8rem, 3vw, 1.5rem) clamp(1.5rem, 6vw, 3rem)',
                fontSize: 'clamp(0.7rem, 2vw, 1rem)',
                fontWeight: '900',
                color: '#ffffff',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 15px 30px rgba(0, 200, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                transition: 'all 0.4s ease',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                transform: 'translateZ(30px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.08,
                rotateY: 10,
                boxShadow: '0 35px 70px rgba(0, 200, 255, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                borderColor: 'rgba(0, 255, 255, 0.9)'
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 25px 50px rgba(0, 200, 255, 0.5)',
                  '0 30px 60px rgba(0, 200, 255, 0.7)',
                  '0 25px 50px rgba(0, 200, 255, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transform: 'translateX(-100%)',
                  animation: 'shimmer 2s infinite'
                }}
              />
              🌊 BUY NOW 🌊
            </motion.a>
            
            <motion.a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-ocean"
              style={{
                background: 'linear-gradient(135deg, #ff6600, #ff3300, #cc0000)',
                border: '2px solid rgba(255, 100, 0, 0.6)',
                borderRadius: '25px',
                padding: 'clamp(0.8rem, 3vw, 1.5rem) clamp(1.5rem, 6vw, 3rem)',
                fontSize: 'clamp(0.7rem, 2vw, 1rem)',
                fontWeight: '900',
                color: '#ffffff',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 15px 30px rgba(255, 100, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                transition: 'all 0.4s ease',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                transform: 'translateZ(30px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.08,
                rotateY: -10,
                boxShadow: '0 35px 70px rgba(255, 100, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                borderColor: 'rgba(255, 100, 0, 0.9)'
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 25px 50px rgba(255, 100, 0, 0.5)',
                  '0 30px 60px rgba(255, 100, 0, 0.7)',
                  '0 25px 50px rgba(255, 100, 0, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transform: 'translateX(-100%)',
                  animation: 'shimmer 2s infinite'
                }}
              />
              🚀 DEXSCREENER 🚀
            </motion.a>
          </div>
          
            <motion.p 
            style={{
              marginTop: '2rem',
              fontSize: '0.9rem',
              color: '#ffffff',
              fontStyle: 'italic',
              fontWeight: '700',
              opacity: 0.9,
              textShadow: '0 2px 15px rgba(0, 255, 255, 0.4)',
              transform: 'translateZ(20px)'
            }}
            animate={{ 
              opacity: [0.7, 1, 0.7],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img src="/whale-shark-logo.svg" alt="WhaleShark" style={{height: '20px', width: 'auto', margin: '0 8px', filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))'}} />
            Join thousands of investors swimming in the depths of DeFi!
            <img src="/whale-shark-logo.svg" alt="WhaleShark" style={{height: '20px', width: 'auto', margin: '0 8px', filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))'}} />
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;