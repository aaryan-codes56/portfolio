import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
    const [focusedInput, setFocusedInput] = useState(null);

    const handleFocus = (id) => setFocusedInput(id);
    const handleBlur = () => setFocusedInput(null);

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <motion.div
                    className="contact-content fit-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <h2 className="section-title">Get in Touch</h2>
                    </div>
                    <p className="contact-cta" style={{ marginBottom: '2rem', color: 'var(--gray)' }}>Let's create something impactful.</p>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className={`form-group ${focusedInput === 'name' ? 'focused' : ''}`}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                onFocus={() => handleFocus('name')}
                                onBlur={handleBlur}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className={`form-group ${focusedInput === 'email' ? 'focused' : ''}`}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur}
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className={`form-group ${focusedInput === 'message' ? 'focused' : ''}`}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                onFocus={() => handleFocus('message')}
                                onBlur={handleBlur}
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>

                    <div className="social-links">
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">GitHub</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="mailto:hello@aaryankrishna.com" className="social-link">Email</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
