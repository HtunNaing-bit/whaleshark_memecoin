import React, { memo } from 'react';
import { motion } from 'framer-motion';
import './Tokenomics.css';

const Tokenomics = memo(() => {
  
  const tokenInfo = {
    name: "WHALESHARK",
    symbol: "$WHALESHARK",
    totalSupply: "1,000,000,000",
    decimals: 9,
    network: "Solana",
    contract: "7a8b9c2d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6"
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
          <h2>Tokenomics</h2>
          <p>Transparent token distribution designed for sustainable growth and community success</p>
        </motion.div>

        {/* Token Information */}
        <motion.div 
          className="token-info-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Token Information</h3>
          <div className="token-info-grid">
            <div className="info-item">
              <span className="info-label">Token Name</span>
              <span className="info-value">{tokenInfo.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Symbol</span>
              <span className="info-value">{tokenInfo.symbol}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Total Supply</span>
              <span className="info-value">{tokenInfo.totalSupply}</span>
            </div>
            <div className="info-item info-item-shift-right decimals-card">
              <span className="info-label">Decimals</span>
              <span className="info-value">{tokenInfo.decimals}</span>
            </div>
            <div className="info-item info-item-shift-right">
              <span className="info-label">Network</span>
              <span className="info-value">{tokenInfo.network}</span>
            </div>
            <div className="info-item contract-address-item">
              <span className="info-label">Contract Address</span>
              <div className="contract-address-container">
                <span className="info-value contract-address">Coming Soon</span>
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
          <h3>Token Distribution</h3>
          <div className="distribution-chart">
            {distribution.map((item, index) => (
              <motion.div
                key={item.category}
                className="distribution-item"
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
          <h3>Security & Transparency</h3>
          <div className="security-grid">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="security-card"
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
