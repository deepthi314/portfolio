import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaDownload, FaCode, FaServer, FaPalette } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg'; // Ensure this exists or use a placeholder if issues arise

const About = () => {
    // 3D Tilt Effect State for Profile Image
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="about" className="py-24 bg-[#0d1117] relative overflow-hidden perspective-2000">
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#0d1117_25%,#1a1f3a_25%,#1a1f3a_50%,#0d1117_50%,#0d1117_75%,#1a1f3a_75%,#1a1f3a_100%)] bg-[size:40px_40px] opacity-10"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-neon-lime/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* 3D Profile Showcase */}
                    <div className="w-full lg:w-5/12 flex justify-center perspective-1000">
                        <motion.div
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative w-80 h-80 md:w-96 md:h-96 cursor-pointer"
                        >
                            {/* Floating Shadow */}
                            <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black/60 blur-xl rounded-full transform translate-z-[-50px]"></div>

                            {/* 3D Frame */}
                            <div className="absolute inset-0 rounded-[2rem] border-4 border-electric-blue bg-[#1c2333] shadow-[0_0_40px_rgba(57,255,20,0.3)] transform-style-3d">
                                <div className="absolute inset-0 rounded-[1.8rem] border-2 border-white/20 translate-z-10 overflow-hidden bg-space-black">
                                    <img src={profileImg} alt="Deepthi P Kumar" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />

                                    {/* Holographic Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-lime/20 via-transparent to-electric-blue/20 opacity-0 hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                                    <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(57,255,20,0.1)_50%,transparent_100%)] bg-[size:100%_200%] animate-scanline opacity-30"></div>
                                </div>

                                {/* 3D Decorative Corners */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-neon-lime rounded-tl-2xl translate-z-20"></div>
                                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-hot-magenta rounded-br-2xl translate-z-20"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bio Content */}
                    <div className="w-full lg:w-7/12">
                        {/* Section Heading - Extruded Text */}
                        <div className="mb-12 relative group">
                            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white relative z-10 text-shadow-neon">
                                About Me
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-bold font-heading text-electric-blue absolute top-1 left-1 -z-10 opacity-50 blur-[1px]">
                                About Me
                            </h2>
                            <div className="h-2 w-32 bg-gradient-to-r from-neon-lime via-electric-blue to-hot-magenta mt-4 rounded-full shadow-neon-blue"></div>
                        </div>

                        {/* Bio Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#1c2333]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-3d-md hover:translate-z-10 hover:-translate-y-2 transition-all duration-500 transform-style-3d group relative mb-12"
                        >
                            {/* Bevel Highlights */}
                            <div className="absolute inset-0 rounded-3xl border-t border-l border-white/10 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-3xl border-b border-r border-black/30 pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-white mb-4">
                                Crafting digital dimensions with <span className="text-neon-lime">Code</span> & <span className="text-hot-magenta">Creativity</span>
                            </h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                I'm an <span className="text-electric-blue font-bold">Information Technology Engineering student</span> transforming ideas into immersive web experiences. My passion lies in building futuristic interfaces that merge functionality with artistic expression.
                            </p>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                From <span className="text-neon-lime">Full Stack Development</span> to <span className="text-hot-magenta">Data Science</span>, I explore the frontiers of technology to build solutions that stand out.
                            </p>
                        </motion.div>

                        {/* Stats Cards - Floating Panels */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { count: "10+", label: "Technologies", icon: <FaCode />, color: "text-neon-lime", shadow: "shadow-neon-lime" },
                                { count: "5+", label: "Projects", icon: <FaServer />, color: "text-electric-blue", shadow: "shadow-neon-blue" },
                                { count: "3+", label: "Hackathons", icon: <FaPalette />, color: "text-hot-magenta", shadow: "shadow-neon-magenta" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-[#2a3142] to-[#1c2333] p-6 rounded-2xl relative transform transition-all duration-500 hover:-translate-y-3 hover:rotate-2 hover:z-20 border-b-2 border-transparent hover:border-neon-lime group"
                                    style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                                >
                                    <div className={`text-4xl mb-3 ${stat.color} drop-shadow-md group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                                    <h4 className={`text-4xl font-bold font-heading text-white mb-1 group-hover:${stat.color} transition-colors`}>{stat.count}</h4>
                                    <p className="text-text-muted font-medium uppercase tracking-wider text-xs">{stat.label}</p>

                                    {/* Neon Glow on Hover */}
                                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none box-shadow-${stat.color.replace('text-', '')}`}></div>
                                </motion.div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
