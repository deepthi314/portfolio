import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const MobileMenu = ({ isOpen, onClose }) => {
    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Education', to: 'education' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center md:hidden"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#050812',
                        zIndex: 99999,
                        overflowY: 'auto' // Allow scrolling if content overflows
                    }}
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
                                    onClick={onClose}
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
                            <button onClick={onClose} className="text-white text-4xl hover:text-neon-lime transition-colors">
                                <HiX />
                            </button>
                        </motion.div>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
