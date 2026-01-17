import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFigma, FaLaptopCode, FaDatabase, FaPalette } from 'react-icons/fa';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('web');

    const projects = [
        {
            id: 1,
            title: "BloodBank Management System",
            category: "web",
            description: "Built a full-stack Blood Bank Management System to manage donors, recipients, blood stock, donations, and requests.",
            tech: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
            link: "https://blood-bank-management-system-psi-ten.vercel.app/",
            github: "#",
            image: "/projects/bloodbank.png"
        },
        {
            id: 2,
            title: "Clausewise NDA Simplifier",
            category: "web",
            description: "AI-powered legal document analysis platform that simplifies NDAs by extracting clauses, assessing risks, calculating fairness scores, and ensuring compliance.",
            tech: ["FastAPI", "React.js", "MongoDB", "Tailwind CSS", "JWT"],
            link: "#",
            github: "https://github.com/deepthi314/Clausewise-2",
            image: "/projects/clausewise.png"
        },
        {
            id: 3,
            title: "GoodWill",
            category: "ui-ux",
            description: "Designed a user-friendly healthcare app interface enabling blood donation, blood requests, and pharmacy access with intuitive flows.",
            tech: ["Figma"],
            link: "https://www.figma.com/community/file/1510351278550448394/goodwill",
            type: "case-study",
            image: "/projects/goodwill.png"
        },
        {
            id: 4,
            title: "Breast Cancer Dashboard",
            category: "ui-ux",
            description: "Machine learning dashboard concept combining thoughtful UI design with data-driven concepts for responsible prediction communication.",
            tech: ["Figma"],
            link: "https://www.figma.com/community/file/1583788301503852842/dashboard",
            type: "case-study",
            image: "/projects/breastcancer_dashboard.png"
        },
        {
            id: 5,
            title: "Customer Churn Prediction",
            category: "data",
            description: "Built an end-to-end machine learning system to predict customer churn and identify key risk factors for retention. Delivered actionable insights through an interactive Streamlit dashboard.",
            tech: ["Python", "Scikit", "XGBoost", "Streamlit"],
            link: "#",
            github: "https://github.com/deepthi314/customer_churn_prediction",
            image: "/projects/churn_prediction.png"
        },
    ];

    const filteredProjects = projects.filter(project => project.category === activeTab);

    return (
        <section id="projects" className="py-24 bg-[#0a0e27] relative overflow-hidden perspective-2000">
            {/* Background Particles/Spotlights */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05)_0%,transparent_70%)] pointer-events-none"></div>
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-electric-blue/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-hot-magenta/10 rounded-full blur-[80px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Heading */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-white mb-4 text-3d-massive"
                    >
                        Featured Work
                    </motion.h2>
                    <p className="text-lg md:text-xl text-text-muted">Explore my digital creations</p>
                </div>

                {/* 3D Floating Tabs */}
                <div className="flex justify-center gap-6 mb-20 flex-wrap perspective-1000">
                    {[
                        { id: 'web', label: 'Web Dev', icon: <FaLaptopCode /> },
                        { id: 'ui-ux', label: 'UI/UX', icon: <FaPalette /> },
                        { id: 'data', label: 'Data Sci', icon: <FaDatabase /> }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-8 py-4 rounded-xl flex items-center gap-2 font-bold text-lg transition-all duration-300 transform-style-3d group ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-[#2a3142] to-[#1c2333] text-white shadow-3d-md translate-z-20 -translate-y-2'
                                : 'bg-transparent text-text-muted hover:text-white hover:-translate-y-1'
                                }`}
                        >
                            <span className={activeTab === tab.id ? 'text-neon-lime' : 'group-hover:text-neon-lime transition-colors'}>{tab.icon}</span>
                            <span>{tab.label}</span>

                            {/* Active Indicator & Bottom Shadow */}
                            {activeTab === tab.id && (
                                <>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-lime to-electric-blue"></div>
                                    <div className="absolute inset-x-0 -bottom-4 h-4 bg-black/60 blur-md rounded-[100%] z-[-1]"></div>
                                </>
                            )}
                        </button>
                    ))}
                </div>

                {/* 3D Gallery Grid */}
                <motion.div layout className="grid md:grid-cols-2 gap-16 perspective-1000">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, rotateY: 90 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                exit={{ opacity: 0, rotateY: -90 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group w-full"
                            >
                                {/* 3D Card Container */}
                                <div
                                    className="bg-[#1c2333] rounded-[24px] p-6 border border-white/5 hover:border-electric-blue/50 transition-all duration-500 transform-style-3d hover:translate-z-30 hover:-translate-y-4 hover:rotate-x-2 shadow-3d-lg hover:shadow-[0_30px_60px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_40px_rgba(57,255,20,0.1)]"
                                >
                                    {/* Monitor/Screen Effect */}
                                    <div className="relative aspect-video rounded-xl bg-black border-[8px] border-[#0a0e27] shadow-inner mb-6 overflow-hidden transform translate-z-10 group-hover:translate-z-20 transition-transform duration-500">
                                        {/* Screen Reflection */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-[5] pointer-events-none"></div>

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Overlay with Floating Buttons */}
                                        <div className="absolute inset-0 bg-space-black/80 flex items-center justify-center gap-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                                            {project.link !== "#" && (
                                                <a
                                                    href={project.link}
                                                    className="px-6 py-2 bg-neon-lime text-space-black font-bold rounded-lg shadow-neon-lime transform translate-y-0 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100 hover:scale-110 flex items-center gap-2"
                                                >
                                                    Demo <FaExternalLinkAlt />
                                                </a>
                                            )}
                                            {project.github && project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    className="px-6 py-2 bg-electric-blue text-space-black font-bold rounded-lg shadow-neon-blue transform translate-y-0 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:scale-110 flex items-center gap-2"
                                                >
                                                    Code <FaGithub />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative transform translate-z-10 group-hover:translate-z-30 transition-transform duration-500">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-lime transition-colors font-heading">{project.title}</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-[#0a0e27] border border-white/10 rounded-full text-xs font-bold text-hot-magenta uppercase tracking-wider shadow-sm">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Floating Neon Glow Backdrop */}
                                    <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-neon-lime/0 to-electric-blue/0 group-hover:from-neon-lime/10 group-hover:to-electric-blue/10 blur-xl -z-10 transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-20 text-center">
                    <a href="https://github.com/deepthi314" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/10 rounded-full text-white font-bold hover:border-electric-blue hover:text-electric-blue transition-colors shadow-lg hover:shadow-neon-blue">
                        <FaGithub className="text-xl" /> View More on GitHub
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;
