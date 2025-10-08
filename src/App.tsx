import { useState } from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Travel from './components/Travel';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <OurStory />
      <WeddingInfo />
      <Schedule />
      <Gallery />
      <Travel />
    </div>
  );
}

export default App;
