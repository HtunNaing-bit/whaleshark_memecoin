import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './FinalSection.css';

const FinalSection = () => {
  const [activeShark, setActiveShark] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShark(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="final-section-3d">
      {/* Underwater Call-to-Action Environment */}
      <div className="cta-ocean-environment">
        <div className="swimming-sharks">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`swimming-shark ${i === activeShark ? 'active' : ''}`}
              style={{
                position: 'absolute',
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 2) * 30}%`,
                fontSize: '3rem',
                filter: i === activeShark 
                  ? 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.8))' 
                  : 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.4))',
                transform: 'translateZ(30px)'
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: i === activeShark ? [1, 1.2, 1] : [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            >
              <img 
                src="/whale-shark-logo.svg" 
                alt="WhaleShark" 
                style={{
                  height: '48px',
                  width: 'auto',
                  filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.8)) brightness(1.2)'
                }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Underwater Treasure Chests */}
        <div className="treasure-chests">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="treasure-chest"
              style={{
                position: 'absolute',
                left: `${20 + i * 30}%`,
                bottom: '10%',
                fontSize: '2rem',
                filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))',
                transform: 'translateZ(20px)'
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2
              }}
            >
              💎
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container-3d">
        {/* Revolutionary 3D Main CTA */}
        <motion.div
          className="main-cta-3d"
          style={{
            background: 'rgba(0, 50, 100, 0.2)',
            backdropFilter: 'blur(30px)',
            borderRadius: '50px',
            padding: '2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '3px solid rgba(0, 255, 255, 0.4)',
            boxShadow: '0 50px 100px rgba(0, 100, 200, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.1)',
            marginBottom: '2.5rem',
            transform: 'translateZ(60px)',
            transformStyle: 'preserve-3d'
          }}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            boxShadow: '0 60px 120px rgba(0, 100, 200, 0.6)'
          }}
        >
          {/* 3D Underwater Effects */}
          <div className="underwater-cta-effects">
            <motion.div 
              className="cta-bubble"
              style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '30px',
                height: '30px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(0, 255, 255, 0.2) 100%)',
                borderRadius: '50%',
                transform: 'translateZ(40px)'
              }}
              animate={{ 
                y: [0, -100, 0],
                x: [0, 20, 0],
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="cta-bubble"
              style={{
                position: 'absolute',
                top: '30%',
                right: '15%',
                width: '25px',
                height: '25px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 255, 255, 0.1) 100%)',
                borderRadius: '50%',
                transform: 'translateZ(35px)'
              }}
              animate={{ 
                y: [0, -120, 0],
                x: [0, -15, 0],
                scale: [0.4, 0.9, 0.4],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.h2 
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: '900',
              marginBottom: '3rem',
              background: 'linear-gradient(45deg, #00ffff, #0099ff, #66ccff, #00ccff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 60px rgba(0, 255, 255, 0.8)',
              transform: 'translateZ(70px)',
              lineHeight: '1.3',
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
              🌊 READY TO DIVE INTO THE POD? 🌊
            </motion.h2>
            
            <motion.p 
              style={{
                fontSize: 'clamp(0.7rem, 2vw, 1rem)',
                color: '#ffffff',
                lineHeight: '1.8',
                maxWidth: '1000px',
                margin: '0 auto 5rem auto',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
                opacity: 0.9,
                transform: 'translateZ(50px)',
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
              Join thousands of investors who are already swimming in the depths of the $WHALESHARK revolution. 
              Be part of the future of decentralized finance and grow with our underwater community.
            </motion.p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'clamp(0.8rem, 2vw, 1.5rem)',
              marginBottom: '2.5rem',
              width: '100%',
              maxWidth: '100%'
            }}>
              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '1.2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', fontWeight: '800', color: '#00d4ff', marginBottom: '1rem', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)', wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: 'center' }}>🚀 Get Started Today</h4>
                <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)', color: '#ffffff', lineHeight: '1.4', opacity: 0.9, wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: 'center' }}>
                  Join our community and start your DeFi journey with $WHALESHARK. 
                  Simple, secure, and profitable.
                </p>
              </motion.div>

              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '1.2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', fontWeight: '800', color: '#4ecdc4', marginBottom: '1rem', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)', wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: 'center' }}>📈 Long-term Value</h4>
                <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)', color: '#ffffff', lineHeight: '1.4', opacity: 0.9, wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: 'center' }}>
                  Our tokenomics are designed for sustainable growth and long-term value creation 
                  for all community members.
                </p>
              </motion.div>

              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '1.2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', fontWeight: '800', color: '#ff6b6b', marginBottom: '1rem', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)', wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: 'center' }}>🤝 Community First</h4>
                <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)', color: '#ffffff', lineHeight: '1.4', opacity: 0.9, wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: 'center' }}>
                  Everything we do is for our community. Your success is our success, 
                  and together we build the future.
                </p>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: 'clamp(0.8rem, 2vw, 1.5rem)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 20,
              pointerEvents: 'auto',
              width: '100%',
              maxWidth: '100%'
            }}>
              <motion.a
                href="https://x.com/whaleshark_coin?s=21"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                  border: '2px solid #00d4ff',
                  borderRadius: '25px',
                  padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 4vw, 2.5rem)',
                  fontSize: 'clamp(0.7rem, 1.8vw, 1rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 15px 35px rgba(0, 212, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  zIndex: 10,
                  pointerEvents: 'auto',
                  minWidth: 'clamp(120px, 20vw, 180px)',
                  maxWidth: '100%',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  textAlign: 'center'
                }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 45px rgba(0, 212, 255, 0.6)',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                🐦 Join our X
              </motion.a>
              
              <motion.a
                href="https://t.me/whaleshark_coin"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                  border: '2px solid #00d4ff',
                  borderRadius: '25px',
                  padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 4vw, 2.5rem)',
                  fontSize: 'clamp(0.7rem, 1.8vw, 1rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 15px 35px rgba(0, 212, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  zIndex: 30,
                  pointerEvents: 'auto',
                  minWidth: 'clamp(120px, 20vw, 180px)',
                  maxWidth: '100%',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  textAlign: 'center'
                }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 45px rgba(0, 212, 255, 0.6)',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('https://t.me/whaleshark_coin', '_blank', 'noopener,noreferrer');
                }}
              >
                📱 Join our Telegram
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Community Benefits */}
        <motion.div
          style={{
            background: 'rgba(78, 205, 196, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(78, 205, 196, 0.3)',
            boxShadow: '0 25px 50px rgba(78, 205, 196, 0.2)',
            textAlign: 'center',
            width: '100%',
            maxWidth: '100%'
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
              fontSize: '1.2rem',
              fontWeight: '900',
              marginBottom: '2.5rem',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
            }}>
              Why Join the $WHALESHARK Pod?
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0.8rem',
              marginTop: '2rem'
            }}>
              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#4ecdc4', marginBottom: '0.5rem', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>Proven Track Record</h4>
                <p style={{ fontSize: '0.7rem', color: '#ffffff', opacity: 0.9 }}>Consistent growth and community satisfaction</p>
              </motion.div>

              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#ff6b6b', marginBottom: '0.5rem', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>Secure & Audited</h4>
                <p style={{ fontSize: '0.7rem', color: '#ffffff', opacity: 0.9 }}>Smart contracts audited by top security firms</p>
              </motion.div>

              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#00d4ff', marginBottom: '0.5rem', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>Global Community</h4>
                <p style={{ fontSize: '0.7rem', color: '#ffffff', opacity: 0.9 }}>Join investors from around the world</p>
              </motion.div>

              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#ffc107', marginBottom: '0.5rem', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>Innovation</h4>
                <p style={{ fontSize: '0.7rem', color: '#ffffff', opacity: 0.9 }}>Cutting-edge DeFi technology and features</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            width: '100%',
            maxWidth: '100%'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p style={{
            fontSize: 'clamp(0.7rem, 2vw, 1rem)',
            color: '#ffffff',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto',
            fontStyle: 'italic',
            fontWeight: '600',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            opacity: 0.9,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            textAlign: 'center'
          }}>
            "The ocean is vast, but together we are the most powerful force in the crypto seas. 
            Join the $WHALESHARK pod and be part of something extraordinary."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;