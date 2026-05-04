import React from 'react';
import './Work.css';
import { motion } from 'framer-motion';

import rexAiPreview from '../../assets/images/rex-ai-preview.png';
import amaraPreview from '../../assets/images/amara-preview.png';
import poppinFleaPreview from '../../assets/images/poppinflea-preview.png';
import researchscopePreview from '../../assets/images/researchscope_preview.png';
import cardioRiskPreview from '../../assets/images/cardio_risk_preview.png';
import ukRoadSafetyPreview from '../../assets/images/uk_road_safety_preview.png';

const projects = [
    {
        id: 1,
        title: 'ResearchScope AI: Agentic Research Assistant',
        description: 'An autonomous LangGraph-based architecture orchestrating a multi-stage pipeline of data retrieval, mathematical NLP analysis (TF-IDF and LDA), and generative intelligence to synthesize medical research.',
        tags: ['LangGraph', 'Groq LPU', 'Streamlit', 'NLP', 'Python'],
        demoLink: 'https://researchscope2.streamlit.app/',
        codeLink: 'https://github.com/AradhyaTiwari10/researchscope-nlp-healthcare.git',
        image: researchscopePreview
    },
    {
        id: 2,
        title: 'RexAI - AI Career Coach',
        description: 'Your AI Career Coach for Professional Success. Unlock your potential with personalized career guidance, smart course recommendations, and AI-powered resume building.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Google Gemini API', 'JWT Auth'],
        demoLink: 'https://rexxai.netlify.app/',
        codeLink: 'https://github.com/aaryan-codes56/rex-ai.git',
        image: rexAiPreview
    },
    {
        id: 3,
        title: 'Cardiovascular Risk Assessment',
        description: 'Analyzes cardiovascular risk using patient health data to evaluate whether smoking and diabetes impact disease occurrence, heart rate, and cholesterol using multivariate modeling.',
        tags: ['Python', 'Machine Learning', 'Data Analysis', 'Tableau'],
        demoLink: 'https://docs.google.com/spreadsheets/d/1GaOiBl-1Sb5tEx1u_0V1A0bZIkZrJKNOeL-GtxrP1mQ/edit?gid=670728713#gid=670728713',
        codeLink: 'https://github.com/RahulDwivedi205/G11_DVA_Capstone',
        image: cardioRiskPreview
    },
    {
        id: 4,
        title: 'UK-Road-Safety-Analysis',
        description: 'End-to-end data pipeline cleaning and analyzing UK road accident records. Processed raw datasets into dashboard-ready formats covering severity distribution, temporal patterns, and safety factor analysis.',
        tags: ['Python', 'Pandas', 'Data Cleaning', 'Data Viz'],
        demoLink: 'https://public.tableau.com/app/profile/dev.kothari/viz/UKAccidentAnalysis2_17774736712620/Dashboard1',
        codeLink: 'https://github.com/Deepanshu-Nst/SectionE_G-4_UK-Road-Safety',
        image: ukRoadSafetyPreview
    },
    {
        id: 5,
        title: 'Amara Home Solutions',
        description: 'Web-based platform for discovering and booking trusted home service providers like electricians and cleaners. Features provider listings, reviews, and a streamlined booking system.',
        tags: ['React.js', 'Clerk', 'JavaScript', 'Tailwind CSS'],
        demoLink: 'https://amarasolutions.vercel.app/',
        codeLink: 'https://github.com/aaryan-codes56/amara-home-service.git',
        image: amaraPreview
    },
    {
        id: 6,
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
