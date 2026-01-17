import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiStreamlit, SiBootstrap, SiMysql, SiPandas, SiScikitlearn, SiPlotly, SiThreedotjs } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            items: [
                { name: "HTML5", icon: <FaHtml5 />, color: "text-[#E34F26]", glow: "shadow-[#E34F26]" },
                { name: "CSS3", icon: <FaCss3Alt />, color: "text-[#1572B6]", glow: "shadow-[#1572B6]" },
                { name: "JavaScript", icon: <FaJs />, color: "text-[#F7DF1E]", glow: "shadow-[#F7DF1E]" },
                { name: "React", icon: <FaReact />, color: "text-[#61DAFB]", glow: "shadow-[#61DAFB]" },
                { name: "Three.js", icon: <SiThreedotjs />, color: "text-white", glow: "shadow-white" },
                { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]", glow: "shadow-[#06B6D4]" },
            ]
        },
        {
            category: "Backend & Data",
            items: [
                { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]", glow: "shadow-[#339933]" },
                { name: "Python", icon: <FaPython />, color: "text-[#3776AB]", glow: "shadow-[#3776AB]" },
                { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]", glow: "shadow-[#4479A1]" },
                { name: "Pandas", icon: <SiPandas />, color: "text-[#150458]", glow: "shadow-[#150458]" },
                { name: "Scikit-Learn", icon: <SiScikitlearn />, color: "text-[#F7931E]", glow: "shadow-[#F7931E]" },
            ]
        },
        {
            category: "Tools & Design",
            items: [
                { name: "Figma", icon: <FaFigma />, color: "text-[#F24E1E]", glow: "shadow-[#F24E1E]" },
                { name: "Git", icon: <FaGitAlt />, color: "text-[#F05032]", glow: "shadow-[#F05032]" },
                { name: "GitHub", icon: <FaGithub />, color: "text-white", glow: "shadow-white" },
                { name: "Plotly", icon: <SiPlotly />, color: "text-[#3F4F75]", glow: "shadow-[#3F4F75]" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-space-black relative overflow-hidden perspective-2000">
            {/* Isometric Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(60deg,#1a1f3a_25%,transparent_25%,transparent_75%,#1a1f3a_75%,#1a1f3a),linear-gradient(120deg,#1a1f3a_25%,transparent_25%,transparent_75%,#1a1f3a_75%,#1a1f3a)] bg-[size:60px_100px] opacity-20"></div>

            {/* Gradient Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-bold font-heading text-white mb-6 text-3d-massive"
                    >
                        Skills & Expertise
                    </motion.h2>
                    <p className="text-lg md:text-xl text-text-secondary">Building the future with modern technologies</p>
                </div>

                <div className="flex flex-col gap-20">
                    {skills.map((cat, catIndex) => (
                        <div key={catIndex}>
                            <motion.h3
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl font-bold text-white mb-10 flex items-center gap-4"
                            >
                                <span className={`w-12 h-1 bg-gradient-to-r ${catIndex === 0 ? 'from-neon-lime to-transparent' : catIndex === 1 ? 'from-electric-blue to-transparent' : 'from-hot-magenta to-transparent'}`}></span>
                                {cat.category}
                            </motion.h3>

                            {/* ISOMETRIC GRID CONTAINER */}
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 perspective-1000">
                                {cat.items.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50, rotateX: 45, rotateZ: 45 }}
                                        whileInView={{ opacity: 1, y: 0, rotateX: 45, rotateZ: 45 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.8,
                                            type: "spring",
                                            bounce: 0.5
                                        }}
                                        className="relative group w-24 h-24 md:w-32 md:h-32"
                                    >
                                        {/* 3D Platform/Box */}
                                        <div
                                            className="absolute inset-0 bg-[#2a3142] rounded-2xl shadow-3d-md border border-white/5 transition-all duration-500 group-hover:bg-[#1c2333] group-hover:translate-z-30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:border-neon-lime/30 transform-style-3d"
                                        >
                                            {/* Top Highlight Bevel */}
                                            <div className="absolute inset-0 rounded-2xl border-t border-l border-white/10 pointer-events-none"></div>

                                            {/* Floor Shadow */}
                                            <div className="absolute -bottom-10 inset-x-4 h-4 bg-black/40 blur-md rounded-full transform translate-z-[-20px] transition-all duration-500 group-hover:scale-75 group-hover:opacity-50"></div>

                                            {/* Content Container (Counter Rotate to face up? No, prompt implies pure isometric) 
                                                Actually, if I stick to the prompt's rotateX(45) rotateZ(45), the content will be skewed.
                                                I will add a child that 'stands up' or I will just let it be flat on the surface like a tile.
                                                The prompt says "Icon sits on elevated platform".
                                                I'll put the icon in a container that translates Z up.
                                            */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-z-10 group-hover:translate-z-40 transition-transform duration-500">
                                                <div className={`text-4xl md:text-5xl ${skill.color} drop-shadow-md transition-all duration-500 group-hover:scale-125 group-hover:rotate-[-45deg]`}>
                                                    {skill.icon}
                                                </div>
                                                <span className="mt-1 md:mt-2 text-[10px] md:text-xs font-bold text-gray-300 md:group-hover:text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-45">
                                                    {skill.name}
                                                </span>
                                            </div>

                                            {/* Glow Effect */}
                                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_30px_rgba(255,255,255,0.1)] ${skill.glow}`}></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
