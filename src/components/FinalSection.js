import { memo } from 'react';
import { motion } from 'framer-motion';
import './FinalSection.css';

const FinalSection = memo(() => {
  const finalData = {
    title: "🦈 JOIN THE SHARK REVOLUTION! 🦈",
    subtitle: "🦈 Ready to BITE into the crypto ocean? Our SHARK POD is HUNGRY for gains and ready to DEVOUR the competition! 🦈",
    features: [
      {
        title: "🦈 Shark Pod First",
        description: "🦈 We HUNT together, we EAT together! Our pod is STRONGER than any school of fish! 🦈",
        icon: "🦈"
      },
      {
        title: "🛡️ Shark Armor Security",
        description: "🦈 Our jaws are LOCKED on liquidity! Even other sharks can't bite us! We're BULLETPROOF! 🦈",
        icon: "🛡️"
      },
      {
        title: "🌙 Moon Hunting Mission",
        description: "🦈 Our goal is SIMPLE: HUNT the moon and EAT all the gains! We're the PREDATORS of space! 🦈",
        icon: "🌙"
      }
    ],
    cta: {
      title: "🦈 Ready to JOIN THE POD? 🦈",
      description: "🦈 Don't be the fish that got away! Join our HUNGRY shark pod before we EAT all the gains! 🦈",
      buttons: [
        {
          text: "🦈 HUNT on Pump.fun 🦈",
          href: "https://pump.fun",
          primary: true
        },
        {
          text: "🦈 Join Shark Pod 🦈",
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
                duration: 0.6,
                delay: 0.6 + index * 0.1,
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
            border: '4px solid #00ffff',
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(0, 150, 255, 0.15) 50%, rgba(255, 107, 157, 0.15) 100%)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1)',
            transform: 'scale(1.02)',
            borderRadius: '20px',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Animated Background Elements */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 107, 157, 0.1) 0%, transparent 50%)',
              animation: 'rotate 20s linear infinite',
              zIndex: 1
            }} />
            
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{
                background: 'linear-gradient(45deg, #00d4ff, #ff6b9d, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '2.2rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>{finalData.cta.title}</h3>
              <p style={{
                color: '#ffffff',
                fontSize: '1.2rem',
                textAlign: 'center',
                marginBottom: '2rem',
                fontWeight: '500',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
              }}>{finalData.cta.description}</p>
              <div className="cta-buttons" style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {finalData.cta.buttons.map((button, index) => (
                  <motion.a
                    key={button.text}
                    href={button.href}
                    className={`cta-button ${button.primary ? 'primary' : 'secondary'}`}
                    style={{
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      border: button.primary ? '2px solid #00ffff' : '2px solid rgba(255, 255, 255, 0.3)',
                      background: button.primary 
                        ? 'linear-gradient(45deg, #00d4ff, #0099cc)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      backdropFilter: 'blur(10px)',
                      boxShadow: button.primary 
                        ? '0 0 20px rgba(0, 255, 255, 0.4)' 
                        : '0 0 15px rgba(255, 255, 255, 0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: button.primary 
                        ? '0 0 30px rgba(0, 255, 255, 0.6)' 
                        : '0 0 25px rgba(255, 255, 255, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {button.text}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default FinalSection;