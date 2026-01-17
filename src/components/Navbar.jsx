import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Education', to: 'education' },
    ];

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-500 transform-style-3d ${scrolled
                ? 'bg-[#1c2333]/85 backdrop-blur-[20px] shadow-3d-lg border-b border-neon-lime/30 translate-z-50 py-3'
                : 'bg-transparent py-5'
                }`}
            style={{ transform: scrolled ? 'translateZ(100px)' : 'translateZ(0)' }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer group perspective-1000">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-lime to-electric-blue flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.4),_0_8px_16px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:rotate-y-180 group-hover:shadow-neon-lime">
                        <span className="text-space-black font-bold font-heading text-xl backface-hidden">D</span>
                    </div>
                    <span className="text-2xl font-bold font-heading text-white tracking-wider group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-neon-gradient transition-all">
                        PORTFOLIO
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name} className="perspective-1000">
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="relative block text-text-secondary text-sm font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 hover:text-neon-lime group"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-z-10 text-shadow-neon">
                                        {link.name}
                                    </span>
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-electric-blue to-neon-lime transition-all duration-300 group-hover:w-full box-shadow-neon-blue"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* GitHub Button */}
                    <a
                        href="https://github.com/deepthi314"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-6 py-2.5 bg-transparent border-2 border-electric-blue rounded-lg text-electric-blue font-bold uppercase tracking-wider overflow-hidden group perspective-1000 transition-all duration-300 hover:text-space-black hover:border-transparent"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-blue-dark translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                        <div className="relative flex items-center gap-2 transform transition-transform duration-300 group-hover:translate-z-10">
                            <FaGithub className="text-xl" />
                            <span className="text-sm">GitHub</span>
                        </div>
                        {/* 3D Bevel/Highlight effects */}
                        <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none" />
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden z-50">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl hover:text-neon-lime transition-colors drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Portal */}
            <AnimatePresence>
                {isOpen && createPortal(
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 bg-[#050812] z-[9999] flex flex-col items-center justify-center border-l border-white/10"
                    >
                        <ul className="flex flex-col items-center gap-10">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        smooth={true}
                                        duration={500}
                                        className="text-3xl font-heading font-bold text-white hover:text-neon-lime transition-colors cursor-pointer uppercase tracking-widest text-shadow-neon"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <a
                                    href="https://github.com/deepthi314"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-lime to-electric-blue rounded-full text-space-black font-bold text-xl shadow-neon-lime"
                                >
                                    <FaGithub />
                                    <span>GitHub Profile</span>
                                </a>
                            </motion.li>

                            {/* Close Button Inside Menu */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute top-6 right-6 md:hidden"
                            >
                                <button onClick={() => setIsOpen(false)} className="text-white text-4xl hover:text-neon-lime transition-colors">
                                    <HiX />
                                </button>
                            </motion.div>
                        </ul>
                    </motion.div>,
                    document.body
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
