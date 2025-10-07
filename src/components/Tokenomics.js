import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import './Tokenomics.css';

const Tokenomics = memo(() => {
  const [copied, setCopied] = useState(false);
  
  const copyContractAddress = async () => {
    try {
      await navigator.clipboard.writeText(tokenInfo.contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  
  const tokenInfo = {
    name: "WHALESHARK",
    symbol: "$WHALESHARK",
    totalSupply: "1,000,000,000",
    decimals: 9,
    network: "Solana",
    contract: "Contract address is coming soon"
  };

  const securityFeatures = [
    {
      title: "Liquidity Locked",
      description: "100% of liquidity is locked for 24 months",
      status: "Verified",
      icon: "🔒"
    },
    {
      title: "Smart Contract Audit",
      description: "Contract audited by certified security firm",
      status: "Completed",
      icon: "🛡️"
    },
    {
      title: "Transparent Distribution",
      description: "All token allocations are publicly documented",
      status: "Live",
      icon: "📊"
    }
  ];

  return (
    <motion.section 
      className="tokenomics"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="tokenomics-container">
        {/* Header */}
        <motion.div 
          className="tokenomics-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: '2.7rem',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <motion.img 
              src="/whale-shark-logo.svg" 
              alt="WhaleShark Logo" 
              style={{ 
                width: '50px', 
                height: '50px',
                filter: 'hue-rotate(60deg) drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
              }}
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
                filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)']
              }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                filter: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            Tokenomics
          </h2>
          <p style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #8b5cf6)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientShift 3s ease-in-out infinite'
          }}>Built for the community, by the community - where every holder becomes part of the WhaleShark ecosystem</p>
        </motion.div>

        {/* Token Information */}
        <motion.div 
          className="token-info-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            fontSize: '2rem',
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Token Information</h3>
          <div className="token-info-container">
            {/* New Modern Token Design */}
            <motion.div 
              className="modern-token-card"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(0, 150, 255, 0.15) 100%)',
                border: '2px solid rgba(0, 255, 255, 0.4)',
                borderRadius: '20px',
                padding: '2.5rem',
                backdropFilter: 'blur(15px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              animate={{ 
                boxShadow: [
                  '0 10px 40px rgba(0, 255, 255, 0.3)',
                  '0 15px 50px rgba(0, 255, 255, 0.4)',
                  '0 10px 40px rgba(0, 255, 255, 0.3)'
                ]
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Animated Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 150, 255, 0.1) 0%, transparent 50%)',
                zIndex: 1
              }} />
              
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Token Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid rgba(0, 255, 255, 0.3)'
                }}>
                  <motion.div
                    style={{
                      fontSize: '3rem',
                      filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.6))'
                    }}
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    🦈
                  </motion.div>
                  <div>
                    <h4 style={{
                      fontSize: '2.2rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: '0 0 0.5rem 0',
                      textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
                    }}>{tokenInfo.name}</h4>
                    <p style={{
                      fontSize: '1.3rem',
                      color: '#00ffff',
                      margin: '0',
                      fontWeight: '600',
                      textShadow: '0 0 10px rgba(0, 255, 255, 0.4)'
                    }}>{tokenInfo.symbol}</p>
                  </div>
                </div>

                {/* Network Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem',
                  background: 'rgba(0, 255, 255, 0.1)',
                  borderRadius: '15px',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      background: 'linear-gradient(45deg, #00ffff, #0096ff)',
                      borderRadius: '50%',
                      boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
                    }} />
                    <span style={{
                      fontSize: '1.1rem',
                      color: '#00ffff',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Network</span>
                  </div>
                  <span style={{
                    fontSize: '1.3rem',
                    color: '#ffffff',
                    fontWeight: '700',
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.4)'
                  }}>{tokenInfo.network}</span>
                </div>

                {/* Contract Address */}
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(0, 255, 255, 0.1)',
                  borderRadius: '15px',
                  border: '1px solid rgba(0, 255, 255, 0.3)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        background: 'linear-gradient(45deg, #ff6b9d, #8b5cf6)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px rgba(255, 107, 157, 0.6)'
                      }} />
                      <span style={{
                        fontSize: '1.1rem',
                        color: '#00ffff',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>Contract Address</span>
                    </div>
                    {tokenInfo.contract !== "Contract address is coming soon" && (
                      <motion.button
                        style={{
                          background: 'linear-gradient(45deg, #ff6b9d, #8b5cf6)',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '0.5rem 1rem',
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 4px 15px rgba(255, 107, 157, 0.3)'
                        }}
                        onClick={copyContractAddress}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {copied ? '✓ Copied' : '📋 Copy'}
                      </motion.button>
                    )}
                  </div>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '10px',
                    padding: '1rem',
                    border: '1px solid rgba(0, 255, 255, 0.2)'
                  }}>
                    <span style={{
                      color: '#ffffff',
                      fontFamily: "'Courier New', monospace",
                      fontSize: '0.9rem',
                      wordBreak: 'break-all',
                      lineHeight: '1.4',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                      fontStyle: tokenInfo.contract === "Contract address is coming soon" ? 'italic' : 'normal'
                    }}>{tokenInfo.contract}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* Security Features */}
        <motion.div 
          className="security-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Security & Transparency</h3>
          <div className="security-grid">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="security-card"
                style={{
                  border: '3px solid #00ffff',
                  background: 'rgba(0, 255, 255, 0.1)',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                  transform: 'scale(1.02)',
                  borderRadius: '12px'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="security-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <span className="security-status">{feature.status}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default Tokenomics;
