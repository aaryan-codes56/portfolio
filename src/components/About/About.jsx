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
                            I am a Computer Science & Artificial Intelligence student at Newton School of Technology,
                            passionate about building intelligent systems and scalable web applications.
                        </p>
                        <p>
                            With a strong foundation in full-stack development and a growing expertise in AI,
                            I bridge the gap between complex algorithms and intuitive user experiences.
                            I believe in writing clean, efficient code and solving real-world problems through technology.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new research in AI or refining my design sensibilities.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
