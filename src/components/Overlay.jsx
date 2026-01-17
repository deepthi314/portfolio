import React from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Palette } from 'lucide-react';
import RoleDetails from './RoleDetails';

const Overlay = ({ currentRole, onRoleSelect }) => {
    const [location] = useLocation();

    const getAccentColor = () => {
        switch (currentRole) {
            case 'web-dev': return 'text-web-dev';
            case 'data-sci': return 'text-data-sci';
            case 'ui-ux': return 'text-ui-ux';
            default: return 'text-gray-900';
        }
    };

    const getBgColor = () => {
        switch (currentRole) {
            case 'web-dev': return 'bg-web-dev';
            case 'data-sci': return 'bg-data-sci';
            case 'ui-ux': return 'bg-ui-ux';
            default: return 'bg-gray-900';
        }
    };

    const roles = [
        { id: 'web-dev', label: 'Web Developer', icon: Code2, color: 'hover:text-web-dev' },
        { id: 'data-sci', label: 'Data Scientist', icon: Database, color: 'hover:text-data-sci' },
        { id: 'ui-ux', label: 'UI/UX Designer', icon: Palette, color: 'hover:text-ui-ux' },
    ];

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12">
            {/* Header / Logo */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-between items-start pointer-events-auto"
            >
                <div>
                    <h1 className={`text-4xl font-heading font-bold transition-colors duration-500 ${getAccentColor()}`}>
                        Deepthi P Kumar
                    </h1>
                    <p className="text-gray-500 font-body mt-1">
                        Information Technology Engineering Student
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                    <a href="https://github.com/deepthi314" target="_blank" rel="noopener" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/deepthi-kumar-2474ab321" target="_blank" rel="noopener" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.figma.com/@deepthik6" target="_blank" rel="noopener" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ExternalLink size={20} />
                    </a>
                    <a href="mailto:deepthikumar604@gmail.com" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </motion.header>

            {/* Main Content Area (Dynamic based on role) */}
            <div className="flex-1 flex items-center justify-start pointer-events-none w-full relative">
                {!currentRole ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-xl pointer-events-auto"
                    >
                        <h2 className="text-6xl font-heading font-bold text-gray-800 mb-6 leading-tight">
                            Designing <br />
                            <span className="text-gray-400">Digital Experiences</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed font-body">
                            I blend <strong>creative design</strong>, <strong>data analytics</strong>, and <strong>engineering</strong> to build meaningful products.
                            Explore my universe by interacting with the prism.
                        </p>
                    </motion.div>
                ) : (
                    <RoleDetails role={currentRole} />
                )}
            </div>

            {/* Bottom Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pointer-events-auto z-20"
            >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                    <span className="text-sm text-gray-400 tracking-widest uppercase hidden md:block">Select Mode</span>
                    <div className="flex gap-4 bg-white/50 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-sm">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => onRoleSelect(role.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                  ${currentRole === role.id ? `${getBgColor()} text-white shadow-lg scale-105` : `text-gray-600 hover:bg-gray-100 ${role.color}`}
                `}
                            >
                                <role.icon size={16} />
                                {role.label}
                            </button>
                        ))}
                        <button
                            onClick={() => onRoleSelect(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${!currentRole ? 'bg-gray-800 text-white' : 'text-gray-500 hover:bg-gray-100'}
                `}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

export default Overlay;
