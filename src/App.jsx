import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-space-black min-h-screen text-white font-sans selection:bg-neon-lime selection:text-space-black">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
