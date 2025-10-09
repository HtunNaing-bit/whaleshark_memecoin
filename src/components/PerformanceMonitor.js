import React, { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measurePerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setPerformanceData(prev => ({
          ...prev,
          fps
        }));
        
        frameCount = 0;
        lastTime = currentTime;
      }

      // Memory usage (if available)
      if (performance.memory) {
        const memoryUsage = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
        setPerformanceData(prev => ({
          ...prev,
          memoryUsage
        }));
      }

      animationId = requestAnimationFrame(measurePerformance);
    };

    animationId = requestAnimationFrame(measurePerformance);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: '#00ffff',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      <div>FPS: {performanceData.fps}</div>
      <div>Memory: {performanceData.memoryUsage}MB</div>
    </div>
  );
};

export default PerformanceMonitor;
