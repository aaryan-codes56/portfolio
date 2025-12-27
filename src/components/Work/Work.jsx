import React, { useState } from 'react';
import './Work.css';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'AI Chatbot',
        description: 'A conversational AI assistant built with LLMs and Python.',
        tags: ['Python', 'OpenAI', 'React']
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        description: 'Full-stack shopping application with secure payments.',
        tags: ['React', 'Node.js', 'MongoDB']
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'Productivity tool for teams with real-time updates.',
        tags: ['Vue.js', 'Firebase', 'Tailwind']
    }
];

const Work = () => {
    return (
        <section className="work section" id="work">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">01</span>
                    <h2 className="section-title">Selected Work</h2>
                </div>

                <motion.div
                    className="projects-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Work;
