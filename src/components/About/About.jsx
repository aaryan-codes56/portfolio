import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <h2 className="section-title">About</h2>
                    </div>

                    <div className="about-text">
                        <p>
                            I am a Computer Science & Artificial Intelligence student, Data Analytics enthusiast, and Full-Stack Developer.
                            I have a strong command of Python, Excel, Tableau, and modern web frameworks, passionate about building intelligent systems and scalable web applications.
                        </p>
                        <p>
                            With a strong foundation in full-stack development and growing expertise in Machine Learning,
                            I bridge the gap between complex algorithms, actionable insights, and intuitive user experiences.
                            I am passionate about transforming complex datasets into intuitive dashboards to solve real-world business challenges.
                        </p>
                        <p>
                            When I'm not coding or solving algorithmic challenges, I'm exploring new research in AI, building agentic systems, or refining my design sensibilities.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">140+</span>
                            <span className="stat-label">LeetCode Problems Solved</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
