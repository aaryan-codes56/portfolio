import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const skillsData = {
    "Languages": ["JavaScript (ES6+)", "Python", "Java", "C++", "SQL"],
    "Web Technologies": ["React.js", "Node.js", "Express", "HTML5/CSS3", "REST APIs"],
    "AI & Data": ["Machine Learning", "TensorFlow", "Pandas", "NumPy", "Data Analysis"],
    "Tools": ["Git/GitHub", "Docker", "VS Code", "Figma", "Postman"]
};

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">02</span>
                    <h2 className="section-title">Technical Expertise</h2>
                </div>

                <div className="skills-container">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            className="skill-category"
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <h3 className="category-title">{category}</h3>
                            <div className="skill-pills">
                                {skills.map(skill => (
                                    <motion.span
                                        key={skill}
                                        className="skill-pill"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
