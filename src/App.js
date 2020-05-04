import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Event from './pages/Event';
import Footer from './pages/Footer';
import './App.css';
import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]');

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Event />
      <Playlist />
      <Footer />
    </div>
  );
}

export default App;
