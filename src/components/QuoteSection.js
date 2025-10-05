import React, { memo } from 'react';
import { motion } from 'framer-motion';
import './QuoteSection.css';

const QuoteSection = memo(() => {
  return (
    <motion.section 
      className="quote-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <blockquote>
        <p>Dive deep into the crypto ocean with the mighty WhaleShark! 🦈⚡️🌊</p>
      </blockquote>
    </motion.section>
  );
});

export default QuoteSection;
