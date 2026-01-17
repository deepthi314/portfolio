import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { ShapesScene } from './canvas/FloatingShapes';
import { FaFileAlt, FaArrowDown } from 'react-icons/fa';


const Hero = () => {
    const [showResume, setShowResume] = useState(false);

    // Mouse follow effect for spotlight
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        setMousePosition({ x: moveX, y: moveY });
    };

    return (
        <section
            id="hero"
            className="w-full h-screen relative flex items-center justify-center overflow-hidden bg-space-black perspective-2000"
            onMouseMove={handleMouseMove}
        >
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 bg-radial-gradient from-[#1a1f3a] to-[#0a0e27]" />

            {/* 3D Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-top" />

            {/* R3F Canvas for Stars and Shapes */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <ShapesScene />
                </Canvas>
            </div>

            {/* Spotlight following cursor */}
            <div
                className="absolute w-[600px] h-[600px] bg-gradient-radial from-neon-lime/10 via-electric-blue/5 to-transparent rounded-full blur-3xl pointer-events-none z-0 transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Welcome Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 px-6 py-2 rounded-full border border-neon-lime/30 bg-neon-lime/10 backdrop-blur-md shadow-neon-lime text-neon-lime font-bold tracking-widest text-sm uppercase transform hover:scale-105 transition-transform cursor-default"
                >
                    Welcome to my Portfolio
                </motion.div>

                {/* Massive 3D Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative mb-6 transform-style-3d"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-white leading-tight tracking-tighter">
                        <span className="block text-4xl md:text-5xl lg:text-6xl font-normal mb-2 text-text-muted">Hi, I'm</span>
                        <div className="relative inline-block text-3d-massive bg-clip-text text-transparent bg-full-spectrum animate-float">
                            DEEPTHI P KUMAR
                        </div>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl md:text-2xl text-text-secondary font-light tracking-wide mb-10 flex flex-wrap justify-center items-center gap-4"
                >
                    <span className="hover:text-electric-blue transition-colors">Frontend Developer</span>
                    <span className="w-2 h-2 rounded-full bg-neon-lime shadow-neon-lime animate-pulse" />
                    <span className="hover:text-hot-magenta transition-colors">UI/UX Designer</span>
                    <span className="w-2 h-2 rounded-full bg-neon-lime shadow-neon-lime animate-pulse" />
                    <span className="hover:text-bright-orange transition-colors">Aspiring Data Scientist</span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                >
                    {/* Primary Button */}
                    <Link
                        to="projects"
                        smooth={true}
                        offset={-100}
                        className="group relative px-10 py-5 bg-gradient-to-r from-neon-lime to-electric-blue rounded-xl font-bold text-space-black text-lg uppercase tracking-wider overflow-hidden transform-style-3d transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(57,255,20,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </span>
                        {/* 3D Edge highlight inside */}
                        <div className="absolute inset-0 border-t border-white/40 rounded-xl" />
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-black/20" />
                    </Link>

                    {/* Resume Button (Center Orb) */}
                    <button
                        onClick={() => setShowResume(true)}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-hot-magenta to-hot-magenta-dark flex items-center justify-center text-white shadow-neon-magenta transform transition-all duration-500 hover:rotate-[360deg] hover:scale-110 hover:shadow-[0_0_50px_rgba(255,0,110,0.6)] z-20"
                        title="View Resume"
                    >
                        <FaFileAlt className="text-2xl" />
                    </button>

                    {/* Secondary Button */}
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-100}
                        className="group relative px-10 py-5 bg-transparent border-2 border-hot-magenta text-hot-magenta rounded-xl font-bold text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-magenta hover:text-white"
                    >
                        <div className="absolute inset-0 bg-hot-magenta translate-y-full transition-transform duration-300 group-hover:translate-y-0 -z-10" />
                        <span className="relative z-10">Contact Me</span>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 z-20"
            >
                <Link to="about" smooth={true} offset={-50} className="cursor-pointer flex flex-col items-center gap-2 group">
                    <span className="text-xs uppercase tracking-widest text-text-muted group-hover:text-neon-lime transition-colors">Scroll</span>
                    <div className="w-6 h-10 border-2 border-neon-lime/50 rounded-full flex justify-center pt-2 shadow-neon-lime group-hover:border-neon-lime transition-colors">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1.5 h-1.5 bg-neon-lime rounded-full"
                        />
                    </div>
                </Link>
            </motion.div>

            {/* Resume Modal */}
            <AnimatePresence>
                {showResume && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-space-black/90 backdrop-blur-xl" onClick={() => setShowResume(false)}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border-2 border-electric-blue/30 bg-[#1c2333] shadow-3d-xl transform-style-3d"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-gradient-to-r from-[#1c2333] to-[#0a0e27]">
                                <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
                                    <FaFileAlt className="text-electric-blue" />
                                    Resume Preview
                                </h3>
                                <button
                                    onClick={() => setShowResume(false)}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Modal Content - Scrollable */}
                            <div className="p-8 overflow-y-auto max-h-[calc(85vh-80px)] custom-scrollbar bg-space-black/50">
                                <div className="flex flex-col gap-6">
                                    <div className="w-full bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                                        <img src="/resume/resume-1.png" alt="Resume Page 1" className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity" />
                                    </div>
                                    <div className="w-full bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                                        <img src="/resume/resume-2.png" alt="Resume Page 2" className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
