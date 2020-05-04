import React from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Playlist from './components/Playlist';
import Event from './components/Event';
import Footer from './components/Footer';
import './App.css';
import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]');

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Event />
      <Playlist />
      <Footer />
    </div>
  );
}

export default App;
