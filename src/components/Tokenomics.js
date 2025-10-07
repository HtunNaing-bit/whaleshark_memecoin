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


  const distribution = [
    {
      category: "Community Rewards",
      percentage: 40,
      amount: "400,000,000",
      description: "Distributed to early supporters and community members",
      color: "#3b82f6"
    },
    {
      category: "Liquidity Pool",
      percentage: 25,
      amount: "250,000,000",
      description: "Initial liquidity provision for trading pairs",
      color: "#10b981"
    },
    {
      category: "Team & Development",
      percentage: 15,
      amount: "150,000,000",
      description: "Team allocation with 24-month vesting schedule",
      color: "#f59e0b"
    },
    {
      category: "Marketing & Partnerships",
      percentage: 12,
      amount: "120,000,000",
      description: "Marketing campaigns and strategic partnerships",
      color: "#8b5cf6"
    },
    {
      category: "Reserve Fund",
      percentage: 8,
      amount: "80,000,000",
      description: "Emergency fund and future development initiatives",
      color: "#ef4444"
    }
  ];

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
            fontSize: '4.5rem',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>Tokenomics</h2>
          <p style={{
            fontSize: '1.5rem',
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
          }}>Transparent token distribution designed for sustainable growth and community success</p>
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
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Token Information</h3>
          <div className="token-info-container">
            {/* Main Token Card */}
            <div className="main-token-card">
              <div className="token-header">
                <div className="token-logo">🦈</div>
                <div className="token-details">
                  <h4>{tokenInfo.name}</h4>
                  <p>{tokenInfo.symbol}</p>
                </div>
              </div>
              <div className="token-stats">
                <div className="stat-item">
                  <span className="stat-label">Total Supply</span>
                  <span className="stat-value">{tokenInfo.totalSupply}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Decimals</span>
                  <span className="stat-value">{tokenInfo.decimals}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Network</span>
                  <span className="stat-value">{tokenInfo.network}</span>
                </div>
              </div>
            </div>
            
            {/* Contract Address Card */}
            <div className="contract-card">
              <div className="contract-header">
                <span className="contract-label">Contract Address</span>
                {tokenInfo.contract !== "Contract address is coming soon" && (
                  <motion.button
                    className="copy-button"
                    onClick={copyContractAddress}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {copied ? '✓ Copied' : '📋 Copy'}
                  </motion.button>
                )}
              </div>
              <div className="contract-address">
                <span className="coming-soon-text">{tokenInfo.contract}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Distribution Chart */}
        <motion.div 
          className="distribution-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Token Distribution</h3>
          <div className="distribution-chart">
            {distribution.map((item, index) => (
              <motion.div
                key={item.category}
                className="distribution-item"
                style={{
                  border: '3px solid #00ffff',
                  background: 'rgba(0, 255, 255, 0.1)',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                  transform: 'scale(1.02)',
                  borderRadius: '12px'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="distribution-header">
                  <div className="distribution-info">
                    <h4>{item.category}</h4>
                    <span className="distribution-percentage">{item.percentage}%</span>
                  </div>
                  <div className="distribution-amount">{item.amount}</div>
                </div>
                <div className="distribution-bar">
                  <motion.div 
                    className="distribution-fill"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="distribution-description">{item.description}</p>
              </motion.div>
            ))}
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
