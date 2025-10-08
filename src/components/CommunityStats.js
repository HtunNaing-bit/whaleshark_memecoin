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
      label: 'Shark Pod',
      value: formatNumber(stats.holders),
      description: '🦈 Hungry sharks ready to DEVOUR!',
      color: '#3b82f6',
      icon: '🦈'
    },
    {
      label: 'Blood in Water',
      value: formatCurrency(stats.volume),
      description: '💀 Weak hands we\'ve EATEN today!',
      color: '#10b981',
      icon: '🩸'
    },
    {
      label: 'Shark Tank',
      value: formatCurrency(stats.marketCap),
      description: '💰 Our hunting grounds value!',
      color: '#f59e0b',
      icon: '🏦'
    },
    {
      label: 'Ocean Depth',
      value: formatCurrency(stats.liquidity),
      description: '🌊 How deep our waters run!',
      color: '#8b5cf6',
      icon: '🌊'
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
            textAlign: 'center'
          }}>
            🦈 SHARK POD STATS 🦈
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
          }}>🦈 Our SHARK POD is HUNGRY and growing! Join before we EAT all the gains! 🦈</p>
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
              style={{
                border: '3px solid #00ffff',
                background: 'rgba(0, 255, 255, 0.1)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                transform: 'scale(1.02)',
                borderRadius: '12px'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -5, 0],
                boxShadow: [
                  '0 0 20px rgba(0, 255, 255, 0.3)',
                  '0 0 25px rgba(0, 255, 255, 0.4)',
                  '0 0 20px rgba(0, 255, 255, 0.3)'
                ]
              }}
              transition={{
                y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                initial: { duration: 0.6, delay: 0.6 + index * 0.1 }
              }}
            >
              <motion.div 
                className="stat-icon"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  y: [0, -8, 0]
                }}
                transition={{ 
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >{stat.icon}</motion.div>
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
