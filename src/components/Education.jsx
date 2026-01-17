import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            institution: "BMS Institute of Technology & Management",
            degree: "BE in Information Science",
            year: "2023 - 2027",
            location: "Bangalore, India",
            grade: "8.6 CGPA",
            status: "Current",
            desc: "Focusing on Data Structures, Algorithms, and Web Technologies. Active member of the OSCODE club.",
            color: "from-neon-lime to-electric-blue",
            shadow: "shadow-neon-lime",
            accent: "text-neon-lime"
        },
        {
            institution: "SIRMV PU College",
            degree: "Pre-University (Science)",
            year: "Completed 2023",
            location: "Davanagere, India",
            grade: "95%",
            status: "Completed",
            desc: "Specialized in Physics, Chemistry, Mathematics, and Biology. consistently topped the class.",
            color: "from-electric-blue to-hot-magenta",
            shadow: "shadow-neon-magenta",
            accent: "text-hot-magenta"
        }
    ];

    return (
        <section id="education" className="py-24 bg-[#1a1f3a] relative overflow-hidden perspective-2000">
            {/* 3D Perspective Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(1000px)_rotateX(60deg)] origin-top opacity-30"></div>

            {/* Spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block relative z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-2 text-3d-massive">
                            Education Journey
                        </h2>
                        {/* Floating decorative shapes around text */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 w-16 h-16 border-4 border-neon-lime/30 rounded-full border-dashed"></motion.div>
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -bottom-5 -left-10 w-12 h-12 border-4 border-hot-magenta/30 rotate-45"></motion.div>
                    </motion.div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* 3D Cylinder Timeline Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-b from-neon-lime via-electric-blue to-hot-magenta transform md:-translate-x-1/2 rounded-full shadow-[inset_2px_0_4px_rgba(0,0,0,0.6),inset_-2px_0_4px_rgba(255,255,255,0.2)]">
                        {/* Animated Pulse */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent blur-md animate-float-slow"></div>
                    </div>

                    <div className="flex flex-col gap-24 py-10">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* 3D Sphere Node */}
                                <div className="absolute left-[28px] md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-white to-gray-400 transform -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(57,255,20,0.5),inset_-4px_-4px_8px_rgba(0,0,0,0.5)] border-2 border-white/50"></div>

                                {/* Connector Line (Horizontal) */}
                                <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? 'left-1/2 w-[calc(50%-20px)]' : 'right-1/2 w-[calc(50%-20px)]'} h-1 bg-gradient-to-r from-neon-lime/50 to-transparent z-0`}></div>

                                {/* 3D Education Card */}
                                <div
                                    className={`w-full md:w-[45%] ml-16 md:ml-0 relative group perspective-1000`}
                                >
                                    <div
                                        className={`relative bg-gradient-to-br from-[#2a3142] to-[#1c2333] p-8 rounded-2xl border-2 border-transparent hover:border-white/10 transition-all duration-500 transform-style-3d hover:shadow-3d-xl shadow-3d-lg ${index % 2 === 0 ? 'rotate-y-3' : '-rotate-y-3'} hover:rotate-y-0 hover:translate-z-30`}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Status Badge 3D Pill */}
                                        <div className={`absolute -top-4 right-6 px-4 py-1 bg-gradient-to-r ${edu.color} rounded-full shadow-lg transform translate-z-20`}>
                                            <span className="text-space-black font-bold text-sm uppercase tracking-wider">{edu.status}</span>
                                        </div>

                                        <div className="flex items-center gap-4 mb-6 transform translate-z-10">
                                            <div className={`w-16 h-16 rounded-2xl bg-[#0a0e27] flex items-center justify-center text-3xl ${edu.accent} shadow-inner border border-white/5`}>
                                                <FaUniversity />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white font-heading">{edu.degree}</h3>
                                                <div className="flex items-center gap-2 text-text-secondary text-sm mt-1">
                                                    <FaCalendarAlt className={edu.accent} />
                                                    <span>{edu.year}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6 pl-2 border-l-4 border-white/10 transform translate-z-10">
                                            <h4 className="text-xl text-white/90 font-medium mb-1">{edu.institution}</h4>
                                            <div className="flex items-center gap-2 text-text-muted text-sm">
                                                <FaMapMarkerAlt />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>

                                        {/* Grade Badge 3D */}
                                        <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#0a0e27] border ${index === 0 ? 'border-neon-lime' : 'border-hot-magenta'} shadow-inner mb-4 transform translate-z-20 hover:scale-105 transition-transform`}>
                                            <FaStar className={index === 0 ? 'text-neon-lime' : 'text-hot-magenta'} />
                                            <span className={`font-bold ${index === 0 ? 'text-neon-lime' : 'text-hot-magenta'}`}>{edu.grade}</span>
                                        </div>

                                        <p className="text-text-secondary leading-relaxed text-sm transform translate-z-10">
                                            {edu.desc}
                                        </p>

                                        {/* Left Edge 3D Extrusion Effect */}
                                        <div className={`absolute top-0 bottom-0 left-0 w-2 rounded-l-2xl bg-gradient-to-b ${edu.color} shadow-[inset_-2px_0_4px_rgba(0,0,0,0.5)]`}></div>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block w-[45%]"></div>
                            </motion.div>
                        ))}
                    </div>


                    {/* Bottom fade out */}
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a1f3a] to-transparent z-20 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default Education;
