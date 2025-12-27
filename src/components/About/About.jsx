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
                    <div className="section-header" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                        <span className="section-number" style={{ fontSize: '4rem', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1px var(--gray)', opacity: 0.3, lineHeight: 1 }}>01</span>
                        <h2 className="section-title" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--white)', flexGrow: 1, textTransform: 'none', letterSpacing: 'normal' }}>About Me</h2>
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
