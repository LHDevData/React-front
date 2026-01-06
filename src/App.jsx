import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white selection:bg-cyber-green selection:text-black">
      {/* Custom Cursor Glow Effect */}
      <div
        className="fixed w-96 h-96 bg-cyber-green/5 rounded-full pointer-events-none blur-3xl mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 z-0 transition-transform duration-75"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
