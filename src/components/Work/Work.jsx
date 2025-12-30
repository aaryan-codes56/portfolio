import React from 'react';
import './Work.css';
import { motion } from 'framer-motion';

import rexAiPreview from '../../assets/images/rex-ai-preview.png';
import amaraPreview from '../../assets/images/amara-preview.png';
import poppinFleaPreview from '../../assets/images/poppinflea-preview.png';

const projects = [
    {
        id: 1,
        title: 'RexAI - AI Career Coach',
        description: 'Your AI Career Coach for Professional Success. Unlock your potential with personalized career guidance, smart course recommendations, and AI-powered resume building.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Google Gemini API', 'JWT Auth'],
        demoLink: 'https://rexxai.netlify.app/',
        codeLink: 'https://github.com/aaryan-codes56/rex-ai.git',
        image: rexAiPreview
    },
    {
        id: 2,
        title: 'Amara Home Solutions',
        description: 'Web-based platform for discovering and booking trusted home service providers like electricians and cleaners. Features provider listings, reviews, and a streamlined booking system.',
        tags: ['React.js', 'Clerk', 'JavaScript', 'Tailwind CSS'],
        demoLink: 'https://amarasolutions.vercel.app/',
        codeLink: 'https://github.com/aaryan-codes56/amara-home-service.git',
        image: amaraPreview
    },
    {
        id: 3,
        title: 'PoppinFlea - Table Booking System',
        description: 'A modern, responsive table booking and reservation management system built for a real event organized by Garda Patna and Poppin Event. Features real-time availability, email confirmation, and an admin dashboard.',
        tags: ['Next.js', 'Google Sheets API', 'Nodemailer', 'CSS Modules'],
        demoLink: 'https://poppinflea.in/',
        codeLink: 'https://github.com/aaryan-codes56/poppin-flea.git',
        image: poppinFleaPreview
    }
];

const Work = () => {
    return (
        <section className="work section" id="work">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My Work</h2>
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
                    {projects.map((project) => (
                        <motion.div
                            className="project-card"
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.codeLink} className="project-link code-btn" target="_blank" rel="noreferrer">
                                        Code
                                    </a>
                                    <a href={project.demoLink} className="project-link demo-btn" target="_blank" rel="noreferrer">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="view-more-container">
                    <a href="https://github.com/aaryan-codes56" target="_blank" rel="noopener noreferrer" className="view-more-btn">
                        View More on GitHub <span className="arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Work;
