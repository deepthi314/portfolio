import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-space-black min-h-screen text-white font-sans selection:bg-neon-lime selection:text-space-black">
            <Navbar isOpen={menuOpen} setIsOpen={setMenuOpen} />
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
    );
}

export default App;
