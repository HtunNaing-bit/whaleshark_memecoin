import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    { 
      id: 1, 
      title: "Cyber Shark", 
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwMDAwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTAiIGZpbGw9IiMwMDgwRkYiIHN0cm9rZT0iIzAwRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNzAiIGZpbGw9IiMwMDAwODAiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjEwMCIgcng9IjQwIiByeT0iMzAiIGZpbGw9IiNGRkZGRkYiLz4KPGNpcmNsZSBjeD0iOTAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIxMTAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8bGluZSB4MT0iODAiIHkxPSIxMTAiIHgyPSIxMjAiIHkyPSIxMTAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik02MCAxMDBMMTAwIDgwTDE0MCAxMDBMMTAwIDEyMFoiIGZpbGw9IiMwMDgwRkYiLz4KPHBhdGggZD0iTTEwMCA4MEw4MCAxMDBMMTIwIDEwMFoiIGZpbGw9IiMwMDgwRkYiLz4KPC9zdmc+", 
      alt: "Cyber shark" 
    },
    { 
      id: 2, 
      title: "Neon Predator", 
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwMDAwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTAiIGZpbGw9IiNGRjAwODAiIHN0cm9rZT0iI0ZGMDBGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNzAiIGZpbGw9IiM4MDAwNDAiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjEwMCIgcng9IjQwIiByeT0iMzAiIGZpbGw9IiNGRkZGRkYiLz4KPGNpcmNsZSBjeD0iOTAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIxMTAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8bGluZSB4MT0iODAiIHkxPSIxMTAiIHgyPSIxMjAiIHkyPSIxMTAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik02MCAxMDBMMTAwIDgwTDE0MCAxMDBMMTAwIDEyMFoiIGZpbGw9IiNGRjAwODAiLz4KPHBhdGggZD0iTTEwMCA4MEw4MCAxMDBMMTIwIDEwMFoiIGZpbGw9IiNGRjAwODAiLz4KPC9zdmc+", 
      alt: "Neon predator" 
    },
    { 
      id: 3, 
      title: "Holographic Hunter", 
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwMDAwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTAiIGZpbGw9IiMwMEZGMDAiIHN0cm9rZT0iIzgwRkYwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNzAiIGZpbGw9IiMwMDgwMDAiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjEwMCIgcng9IjQwIiByeT0iMzAiIGZpbGw9IiNGRkZGRkYiLz4KPGNpcmNsZSBjeD0iOTAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIxMTAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8bGluZSB4MT0iODAiIHkxPSIxMTAiIHgyPSIxMjAiIHkyPSIxMTAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik02MCAxMDBMMTAwIDgwTDE0MCAxMDBMMTAwIDEyMFoiIGZpbGw9IiMwMEZGMDAiLz4KPHBhdGggZD0iTTEwMCA4MEw4MCAxMDBMMTIwIDEwMFoiIGZpbGw9IiMwMEZGMDAiLz4KPC9zdmc+", 
      alt: "Holographic hunter" 
    },
    { 
      id: 4, 
      title: "Quantum Giant", 
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwMDAwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTAiIGZpbGw9IiNGRkZGMDAiIHN0cm9rZT0iI0ZGRkY4MCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNzAiIGZpbGw9IiM4MDgwMDAiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjEwMCIgcng9IjQwIiByeT0iMzAiIGZpbGw9IiNGRkZGRkYiLz4KPGNpcmNsZSBjeD0iOTAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIxMTAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8bGluZSB4MT0iODAiIHkxPSIxMTAiIHgyPSIxMjAiIHkyPSIxMTAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik02MCAxMDBMMTAwIDgwTDE0MCAxMDBMMTAwIDEyMFoiIGZpbGw9IiNGRkZGMDAiLz4KPHBhdGggZD0iTTEwMCA4MEw4MCAxMDBMMTIwIDEwMFoiIGZpbGw9IiNGRkZGMDAiLz4KPC9zdmc+", 
      alt: "Quantum giant" 
    }
  ];

  return (
    <motion.section 
      className="gallery"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <motion.div 
            key={item.id}
            className="gallery-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5, 
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
          >
            <img src={item.image} alt={item.alt} />
            <h4>{item.title}</h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;
