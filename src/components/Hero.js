import { motion } from 'framer-motion';
import './Hero.css';
import './ButtonStyles.css';

const Hero = () => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="hero-container">
        {/* Hero Header */}
        <motion.div 
          className="hero-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="section-logo"
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: '1rem',
              fontSize: '2rem'
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
          >
            <img 
              src="/whale-shark-logo.svg" 
              alt="WhaleShark Logo" 
              style={{ 
                width: '200px', 
                height: '200px',
                filter: 'drop-shadow(0 0 35px rgba(0, 255, 255, 1.0))'
              }}
            />
          </motion.div>
          <h2>WHALESHARK</h2>
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
          }}>The Ocean's Most Powerful Coin</p>
        </motion.div>


        {/* Hero Description Card */}
        <motion.div 
          className="hero-description-card"
          style={{
            border: '3px solid #00ffff',
            background: 'rgba(0, 255, 255, 0.1)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
            transform: 'scale(1.01)',
            borderRadius: '3px'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="hero-description">
            <p>🦈 Our $whaleshark is HUNGRY for gains and ready to EAT the competition!</p>
            <p>🐟 Unlike other coins that swim with the current, we're the PREDATOR of the crypto ocean!</p>
            <p>🌊 Join the pod before we DEVOUR all the weak hands and swim to the moon! 🚀</p>
            <p>💎 Our teeth are diamond hands, and we never let go of our prey! 💎</p>
          </div>
        </motion.div>

        {/* Hero Philosophy Section */}
        <motion.div 
          className="hero-philosophy-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>🦈 Why $whaleshark Will DEVOUR the Market</h3>
          <div className="philosophy-grid">
            <motion.div
              className="philosophy-item"
              style={{
                border: '3px solid #00ffff',
                background: 'rgba(0, 255, 255, 0.1)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                transform: 'scale(1.02)',
                borderRadius: '12px'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="philosophy-icon" 
                style={{ 
                  color: '#00ffff',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  fontSize: '2rem'
                }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >🏊</motion.div>
              <p style={{ 
                color: '#ffffff',
                textShadow: '0 0 8px rgba(0, 255, 255, 0.4)',
                fontWeight: 'bold'
              }}>🏊‍♂️ We don't just swim - we HUNT! Our precision strikes leave other coins trembling!</p>
            </motion.div>
            <motion.div
              className="philosophy-item"
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
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                initial: { duration: 0.6, delay: 0.7 }
              }}
            >
              <motion.div 
                className="philosophy-icon" 
                style={{ 
                  color: '#00ffff',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  fontSize: '2rem'
                }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >🦈</motion.div>
              <p style={{ 
                color: '#ffffff',
                textShadow: '0 0 8px rgba(0, 255, 255, 0.4)',
                fontWeight: 'bold'
              }}>🦈 We EAT weak hands for breakfast! Our jaws never release diamond hands! 💎</p>
            </motion.div>
            <motion.div
              className="philosophy-item"
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
                y: [0, -6, 0],
                boxShadow: [
                  '0 0 20px rgba(0, 255, 255, 0.3)',
                  '0 0 25px rgba(0, 255, 255, 0.4)',
                  '0 0 20px rgba(0, 255, 255, 0.3)'
                ]
              }}
              transition={{
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                initial: { duration: 0.6, delay: 0.8 }
              }}
            >
              <motion.div 
                className="philosophy-icon" 
                style={{ 
                  color: '#00ffff',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  fontSize: '2rem'
                }}
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >🌙</motion.div>
              <p style={{ 
                color: '#ffffff',
                textShadow: '0 0 8px rgba(0, 255, 255, 0.4)',
                fontWeight: 'bold'
              }}>🌙 Our pod is STRONGER than a school of fish! We moon together or we don't moon at all!</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://x.com/whaleshark_coin?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-follow-x"
            style={{ lineHeight: '1.6' }}
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            FOLLOW ON X
          </motion.a>
          <motion.a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ lineHeight: '1.6' }}
            animate={{
              y: [0, -4, 0],
              scale: [1, 1.03, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 BUY NOW
          </motion.a>
          <motion.a 
            href="https://dexscreener.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary btn-dexscreener"
            style={{ lineHeight: '1.6' }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            📊 DEXSCREENER
          </motion.a>
          <motion.a
            href="https://t.me/whaleshark_coin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-telegram"
            style={{ lineHeight: '1.6' }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            JOIN ON TELEGRAM
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;