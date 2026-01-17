import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFigma } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-[#050812] pt-20 pb-10 relative overflow-hidden perspective-2000">
            {/* Floor Grid */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(57,255,20,0.05)_100%)] transform rotate-x-60 origin-bottom"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 transition-transform hover:scale-[1.01] duration-500">
                {/* 3D Elevated Platform */}
                <div className="bg-[#0a0e27] border-t-4 border-electric-blue rounded-t-[50px] shadow-[0_-20px_60px_rgba(0,180,216,0.1)] p-12 md:p-20 transform-style-3d hover:translate-y-[-10px] transition-transform duration-500">

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="text-center md:text-left">
                            <h2 className="text-5xl font-black font-heading text-white mb-6 tracking-tight text-3d-massive">
                                DEEPTHI<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-electric-blue">P KUMAR</span>
                            </h2>
                            <p className="text-text-secondary text-lg max-w-md mx-auto md:mx-0">
                                Digital architect crafting immersive web experiences. Let's build the future together.
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-8">
                            {/* 3D Sphere Social Icons */}
                            <div className="flex gap-8 perspective-500">
                                {[
                                    { icon: <FaGithub />, href: "https://github.com/deepthi314", color: "from-[#333] to-black" },
                                    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/deepthi-kumar-2474ab321", color: "from-[#0077b5] to-[#004182]" },
                                    { icon: <FaFigma />, href: "https://www.figma.com/@deepthik6", color: "from-[#F24E1E] to-[#A259FF]" },
                                    { icon: <FaInstagram />, href: "https://instagram.com/4deepthi5", color: "from-[#C13584] to-[#833AB4]" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white text-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_2px_2px_5px_rgba(255,255,255,0.4),inset_-2px_-2px_5px_rgba(0,0,0,0.4)] hover:scale-110 hover:-translate-y-2 hover:rotate-12 transition-all duration-300 relative group`}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 animate-pulse-slow"></div>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>

                            <div className="flex gap-8 text-sm font-bold tracking-widest uppercase text-text-muted">
                                {['Home', 'About', 'Work', 'Contact'].map(link => (
                                    <Link
                                        key={link}
                                        to={link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase() === 'work' ? 'projects' : link.toLowerCase()}
                                        smooth={true}
                                        className="hover:text-neon-lime transition-colors cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-electric-blue"
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex justify-center items-center text-text-muted/50 text-sm font-medium">
                        <p>© 2025 Deepthi P Kumar. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
