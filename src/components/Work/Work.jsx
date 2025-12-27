import React from 'react';
import './Work.css';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Enterprise AI Knowledge Base',
        description: 'Engineered a RAG-based documentation assistant reducing support query time by 40%. Built with high-performance vector search.',
        tags: ['Python', 'LangChain', 'React', 'FastAPI'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 2,
        title: 'Scalable E-Commerce Engine',
        description: 'Microservices-based shopping platform handling 10k+ concurrent users. Integrated secure Stripe payments and real-time inventory.',
        tags: ['Next.js', 'Go', 'PostgreSQL', 'Docker'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 3,
        title: 'Real-time Collaboration Suite',
        description: 'Team productivity workspace with live cursor tracking and conflict-free data sync using WebSocket tech.',
        tags: ['Vue.js', 'Firebase', 'WebSockets'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 4,
        title: 'Predictive FinTech Dashboard',
        description: 'Real-time financial analytics platform with interactive data visualization and ML-powered market trend forecasting.',
        tags: ['TypeScript', 'D3.js', 'Java Spring', 'AWS'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 5,
        title: 'Autonomous Drone Navigation',
        description: 'Computer vision system for obstacle avoidance and path planning in unstructured environments using SLAM algorithms.',
        tags: ['C++', 'ROS', 'OpenCV', 'PyTorch'],
        demoLink: '#',
        codeLink: '#'
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
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.codeLink} className="project-link" target="_blank" rel="noreferrer">
                                        View Code
                                    </a>
                                    <a href={project.demoLink} className="project-link" target="_blank" rel="noreferrer">
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
