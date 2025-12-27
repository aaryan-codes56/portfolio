import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const skillsData = {
    "Frontend Development": [
        "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "HTML5/CSS3", "Vue.js"
    ],
    "Backend & Database": [
        "Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Firebase", "REST APIs", "GraphQL"
    ],
    "AI & Machine Learning": [
        "TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Pandas", "NumPy", "Scikit-learn", "Computer Vision"
    ],
    "DevOps & Tools": [
        "Git/GitHub", "Docker", "AWS", "Vercel", "Figma", "Postman", "Jest", "CI/CD"
    ]
};

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">03</span>
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
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.2)" }}
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
