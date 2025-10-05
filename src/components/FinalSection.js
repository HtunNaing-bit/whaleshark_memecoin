import React, { memo } from 'react';
import { motion } from 'framer-motion';
import './FinalSection.css';

const FinalSection = memo(() => {
  return (
    <motion.section 
      className="final-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Join the WhaleShark Pod 🦈
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Ready to dive deep into the crypto ocean? Join our community of diamond-fin holders!
      </motion.p>
        <motion.div 
          className="final-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://t.me/whaleshark_coin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Join Community
          </motion.a>
        </motion.div>
    </motion.section>
  );
});

export default FinalSection;
