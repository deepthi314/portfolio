import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = {
    'web-dev': [
        { title: 'Portfolio Website', description: 'Interactive 3D portfolio specific to showcasing multiple professional personas using Three.js and React.', tags: ['React', 'Three.js', 'Tailwind'], github: 'https://github.com/deepthi314' },
        { title: 'E-Commerce Dashboard', description: 'A modern dashboard for managing sales data and inventory with real-time updates.', tags: ['Next.js', 'TypeScript', 'Supabase'], github: 'https://github.com/deepthi314' },
    ],
    'data-sci': [
        { title: 'Predictive Analytics Model', description: 'Machine learning model to predict customer churn based on usage patterns.', tags: ['Python', 'Scikit-Learn', 'Pandas'], github: 'https://github.com/deepthi314' },
        { title: 'Sales Visualization', description: 'Interactive data visualization of quarterly sales performance across regions.', tags: ['Tableau', 'SQL', 'D3.js'], github: 'https://github.com/deepthi314' },
    ],
    'ui-ux': [
        { title: 'Mobile Banking App', description: 'Redesign concept for a banking application focusing on accessibility and ease of use.', tags: ['Figma', 'Prototyping', 'User Research'], link: 'https://www.figma.com/@deepthik6' },
        { title: 'Travel Booking Flow', description: 'Streamlined user flow for booking complex travel itineraries.', tags: ['Figma', 'Wireframing', 'UI Design'], link: 'https://www.figma.com/@deepthik6' },
    ],
};

const RoleDetails = ({ role }) => {
    const roleProjects = projects[role] || [];

    const getThemeColor = () => {
        switch (role) {
            case 'web-dev': return 'text-web-dev';
            case 'data-sci': return 'text-data-sci';
            case 'ui-ux': return 'text-ui-ux';
            default: return 'text-gray-800';
        }
    }

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="absolute right-0 top-0 h-full w-full md:w-1/2 bg-white/40 backdrop-blur-xl p-8 md:p-12 overflow-y-auto pointer-events-auto border-l border-white/50"
        >
            <div className="pt-20 pb-20">
                <h2 className={`text-3xl font-heading font-bold mb-2 ${getThemeColor()} capitalize`}>
                    {role.replace('-', ' ')}
                </h2>
                <p className="text-gray-600 mb-8 font-body">Selected Projects</p>

                <div className="grid gap-6">
                    {roleProjects.map((p, i) => (
                        <ProjectCard key={i} project={p} index={i} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default RoleDetails;
