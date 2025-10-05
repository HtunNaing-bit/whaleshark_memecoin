import React, { memo } from 'react';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import FinalSection from './components/FinalSection';
import './App.css';

const App = memo(() => {
  return (
    <div className="App">
      <Hero />
      <QuoteSection />
      <About />
      <Tokenomics />
      <FinalSection />
    </div>
  );
});

export default App;
