import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaLayerGroup } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-[#1a1f3a] relative overflow-hidden perspective-2000">
            {/* 3D Floor Grid */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(transparent_0%,rgba(57,255,20,0.05)_50%,transparent_100%)] opacity-30 blur-sm transform origin-bottom scale-y-150"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-hot-magenta/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 relative">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 text-3d-massive"
                    >
                        Experience
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* 3D Vertical Timeline Pipe */}
                    <div className="absolute left-8 md:left-12 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-r from-[#0a0e27] via-neon-lime to-[#0a0e27] rounded-full shadow-[0_0_15px_rgba(57,255,20,0.3)] z-0">
                        {/* Animated Liquid Pulse */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-white/50 blur-md animate-float-slow opacity-70"></div>
                    </div>

                    <div className="ml-24 md:ml-32 space-y-24">

                        {/* OSCODE Experience Card - MASSIVE BLOCK */}
                        <motion.div
                            initial={{ opacity: 0, x: 100, rotateX: 10 }}
                            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative group perspective-1000"
                        >
                            {/* 3D Connection Arm */}
                            <div className="absolute top-12 -left-20 w-20 h-2 bg-gradient-to-r from-neon-lime to-electric-blue"></div>
                            <div className="absolute top-10 -left-20 w-4 h-6 bg-neon-lime rounded-full shadow-neon-lime z-10"></div>

                            {/* Main Card */}
                            <div className="bg-[#1c2333] p-10 rounded-[30px] border-2 border-white/5 transition-all duration-500 transform-style-3d hover:shadow-[0_25px_80px_rgba(0,0,0,0.6)] hover:border-electric-blue group-hover:rotate-x-2 group-hover:translate-z-20">

                                {/* 3D Floating Logo */}
                                <div className="absolute -top-12 -right-8 w-32 h-32 bg-[#0a0e27] rounded-3xl flex items-center justify-center border-2 border-electric-blue shadow-neon-blue transform translate-z-40 group-hover:translate-z-60 group-hover:rotate-[-10deg] transition-all duration-500">
                                    <span className="text-4xl font-black font-heading text-white drop-shadow-md">OS</span>
                                </div>

                                <div className="transform translate-z-10">
                                    <div className="inline-block px-4 py-1 mb-4 rounded-full bg-hot-magenta/20 border border-hot-magenta text-hot-magenta font-bold uppercase tracking-wider shadow-neon-magenta text-sm">
                                        Design Associate
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-2 font-heading">OSCODE Club</h3>
                                    <p className="text-xl text-electric-blue font-medium mb-6">BMSIT • 2025 - Present</p>

                                    <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                                        Worked as a Design Associate, contributing to design-related tasks and collaborating with team members. Assisted in organizing club events and supporting teamwork to ensure smooth coordination.
                                    </p>
                                </div>

                                {/* 3D Depth Sides */}
                                <div className="absolute inset-x-8 -bottom-4 h-4 bg-black/50 blur-xl rounded-[50%] transform translate-z-[-20px]"></div>
                            </div>
                        </motion.div>

                        {/* Hackathon Achievements Grid */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-3xl font-bold text-white mb-8 flex items-center gap-4"
                            >
                                <FaTrophy className="text-bright-orange" /> Hackathon Glories
                            </motion.h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                                {[
                                    { title: "Cognitive X 2025", role: "Participant", desc: "AI/ML Innovation Prototype", color: "from-bright-orange to-hot-magenta", icon: <FaMedal /> },
                                    { title: "Adobe India 2025", role: "Qualified First Round", desc: "Creative Software Solution", color: "from-electric-blue to-neon-lime", icon: <FaLayerGroup /> },
                                    { title: "Epoch 2024", role: "Notable", desc: "Social Impact Project", color: "from-hot-magenta to-electric-blue", icon: <FaTrophy /> }
                                ].map((hack, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50, rotateY: 15 }}
                                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        className="relative group h-64"
                                    >
                                        <div className="absolute inset-0 bg-[#2a3142] rounded-2xl transition-all duration-500 transform-style-3d hover:translate-z-20 hover:rotate-x-5 shadow-3d-md border border-white/5 hover:border-white/20">
                                            {/* Top Trophy Shelf Effect */}
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-[#0a0e27] border border-white/20 flex items-center justify-center transform translate-z-30 group-hover:scale-110 transition-transform shadow-lg">
                                                <div className="text-2xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">{hack.icon}</div>
                                            </div>

                                            <div className="absolute inset-0 p-6 pt-12 flex flex-col items-center text-center">
                                                <h4 className="text-xl font-bold text-white mb-2 font-heading">{hack.title}</h4>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${hack.color} text-space-black shadow-sm transform translate-z-10`}>
                                                    {hack.role}
                                                </span>
                                                <p className="text-text-muted text-sm">{hack.desc}</p>
                                            </div>

                                            {/* Bottom Glow */}
                                            <div className={`absolute bottom-0 w-full h-1 bg-gradient-to-r ${hack.color}`}></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
