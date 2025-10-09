import React, { memo } from 'react';
import Hero from './components/Hero';
import CommunityStats from './components/CommunityStats';
import Tokenomics from './components/Tokenomics';
import FinalSection from './components/FinalSection';
import PerformanceMonitor from './components/PerformanceMonitor';
import './typography.css';
import './performance.css';
import './App.css';

const App = memo(() => {
  return (
    <div className="App">
      <PerformanceMonitor />
      <Hero />
      <CommunityStats />
      <Tokenomics />
      <FinalSection />
    </div>
  );
});

export default App;
