import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import resume from '../../assets/resume.pdf';

const Hero = () => {
    return (
        <section className="hero section" id="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <div className="name-wrapper">
                        <motion.h1
                            className="name"
                            variants={{
                                hidden: { y: 100 },
                                visible: { y: 0, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } }
                            }}
                        >
                            Aaryan Krishna
                        </motion.h1>
                    </div>

                    <motion.h2
                        className="subtitle"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        B.Tech CS & AI @ Newton School of Technology
                    </motion.h2>

                    <motion.div
                        className="cta-buttons"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View Resume
                        </a>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
