import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-white/50"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-heading text-gray-800">{project.title}</h3>
                <div className="flex gap-2">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener" className="text-gray-500 hover:text-gray-800">
                            <Github size={18} />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener" className="text-gray-500 hover:text-gray-800">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 font-body leading-relaxed">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
