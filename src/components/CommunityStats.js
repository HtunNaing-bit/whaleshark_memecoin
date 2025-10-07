import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CommunityStats.css';

const CommunityStats = memo(() => {
  const [stats, setStats] = useState({
    holders: 3847,
    volume: 1560000,
    marketCap: 7500000,
    liquidity: 727100
  });

  const [isLoading, setIsLoading] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        holders: prev.holders + Math.floor(Math.random() * 3),
        volume: prev.volume + Math.floor(Math.random() * 1000),
        marketCap: prev.marketCap + Math.floor(Math.random() * 5000),
        liquidity: prev.liquidity + Math.floor(Math.random() * 500)
      }));
    }, 8000);

    // Initial load
    setTimeout(() => setIsLoading(false), 2000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (num) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(1)}K`;
    }
    return `$${num.toLocaleString()}`;
  };

  const communityData = [
    {
      label: 'Holders',
      value: formatNumber(stats.holders),
      description: 'Active community members',
      color: '#3b82f6',
      icon: '👥'
    },
    {
      label: 'Volume',
      value: formatCurrency(stats.volume),
      description: '24h trading volume',
      color: '#10b981',
      icon: '📊'
    },
    {
      label: 'Market Cap',
      value: formatCurrency(stats.marketCap),
      description: 'Total market value',
      color: '#f59e0b',
      icon: '💰'
    },
    {
      label: 'Liquidity',
      value: formatCurrency(stats.liquidity),
      description: 'Available liquidity pool',
      color: '#8b5cf6',
      icon: '🦈'
    }
  ];

  return (
    <motion.section 
      className="community-stats"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="community-stats-container">
        {/* Header */}
        <motion.div 
          className="community-stats-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Community Statistics</h2>
          <p>Join the growing WhaleShark community and be part of the ocean's most powerful meme coin!</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {communityData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-value">
                  {isLoading ? (
                    <div className="loading-pulse"></div>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
});

export default CommunityStats;
