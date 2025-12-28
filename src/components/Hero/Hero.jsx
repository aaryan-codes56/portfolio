import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import resumePdf from '../../assets/resume.pdf';
import heroImage from '../../assets/hero-image.jpg';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        className="name-wrapper"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="name">
                            Aaryan Krishna
                            <span className="role-text">Full-Stack Developer</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Bridging the gap between complex algorithms and intuitive user experiences.
                        I build scalable, high-performance web applications powered by modern AI.
                    </motion.p>

                    <motion.div
                        className="cta-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <a href="#work" className="btn btn-primary">
                            View Projects
                        </a>
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            Download Resume
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <img src={heroImage} alt="Aaryan Krishna" className="hero-image" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
