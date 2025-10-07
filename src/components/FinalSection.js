import { memo } from 'react';
import { motion } from 'framer-motion';
import './FinalSection.css';

const FinalSection = memo(() => {
  const finalData = {
    title: "Join the WHALESHARK Revolution",
    subtitle: "Ready to dive deep into the crypto ocean? Join our community and be part of the most powerful meme coin movement!",
    features: [
      {
        title: "Community First",
        description: "Built by the community, for the community. Every decision is made with our holders in mind.",
        icon: "👥"
      },
      {
        title: "Transparent & Secure",
        description: "Fully audited smart contracts with transparent tokenomics and locked liquidity.",
        icon: "🔒"
      },
      {
        title: "Moon Mission",
        description: "Our goal is simple: take $whaleshark to the moon and beyond with strategic partnerships.",
        icon: "🌙"
      }
    ],
    cta: {
      title: "Ready to Join the Pod?",
      description: "Don't miss out on the biggest meme coin opportunity. Join our community today!",
      buttons: [
        {
          text: "Buy on Pump.fun",
          href: "https://pump.fun",
          primary: true
        },
        {
          text: "Join Telegram",
          href: "https://t.me/whaleshark_coin",
          primary: false
        }
      ]
    }
  };

  return (
    <motion.section 
      className="final-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="final-container">
        {/* Header */}
        <motion.div 
          className="final-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: '2.7rem',
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
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
                filter: 'hue-rotate(300deg) drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
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
            {finalData.title}
          </h2>
          <p style={{
            background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #8b5cf6)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientShift 3s ease-in-out infinite'
          }}>{finalData.subtitle}</p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="final-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {finalData.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="final-feature-card"
              style={{
                border: '3px solid #00ffff',
                background: 'rgba(0, 255, 255, 0.1)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                transform: 'scale(1.02)',
                borderRadius: '12px'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  '0 0 20px rgba(0, 255, 255, 0.3)',
                  '0 0 30px rgba(0, 255, 255, 0.5)',
                  '0 0 20px rgba(0, 255, 255, 0.3)'
                ]
              }}
              transition={{
                y: { duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="final-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="cta-content" style={{
            border: '3px solid #00ffff',
            background: 'rgba(0, 255, 255, 0.1)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
            transform: 'scale(1.02)',
            borderRadius: '12px',
            padding: '2rem'
          }}>
            <h3 style={{
              background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>{finalData.cta.title}</h3>
            <p style={{
              color: '#94a3b8'
            }}>{finalData.cta.description}</p>
            <div className="cta-buttons">
              {finalData.cta.buttons.map((button, index) => (
                <motion.a
                  key={button.text}
                  href={button.href}
                  className={`cta-button ${button.primary ? 'primary' : 'secondary'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.text}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default FinalSection;