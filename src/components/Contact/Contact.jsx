import React, { useState, useRef } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [focusedInput, setFocusedInput] = useState(null);
    const [copied, setCopied] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleFocus = (id) => setFocusedInput(id);
    const handleBlur = () => setFocusedInput(null);

    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('aaryankrishna009@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        // 1. Create a Service (e.g., Gmail) -> Get Service ID
        // 2. Create an Email Template -> Get Template ID
        // 3. Go to Account -> API Keys -> Get Public Key

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                console.log(result.text);
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Failed to send. Please try again or email directly.' });
            })
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            });
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get in Touch</h2>
                </div>

                <motion.div
                    className="contact-layout"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="contact-info">
                        <p className="contact-cta">Open to internships &<br />new opportunities.</p>
                        <p className="contact-subtext">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/aaryan-krishna-840217317/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                            <a href="https://github.com/aaryan-codes56" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                            <a href="https://leetcode.com/u/DIpiow8PMa/" target="_blank" rel="noopener noreferrer" className="social-link">LeetCode</a>
                            <a href="#" onClick={handleCopyEmail} className="social-link">
                                {copied ? 'Email Copied!' : 'Email'}
                            </a>
                        </div>
                    </div>

                    <form ref={form} className="contact-form" onSubmit={sendEmail}>
                        <div className={`form-group ${focusedInput === 'user_name' ? 'focused' : ''}`}>
                            <label htmlFor="user_name">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                required
                                onFocus={() => handleFocus('user_name')}
                                onBlur={handleBlur}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className={`form-group ${focusedInput === 'user_email' ? 'focused' : ''}`}>
                            <label htmlFor="user_email">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                required
                                onFocus={() => handleFocus('user_email')}
                                onBlur={handleBlur}
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className={`form-group ${focusedInput === 'message' ? 'focused' : ''}`}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                                onFocus={() => handleFocus('message')}
                                onBlur={handleBlur}
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        {status.message && (
                            <div className={`status-message ${status.type}`} style={{
                                color: status.type === 'success' ? '#4ade80' : '#f87171',
                                fontSize: '0.9rem',
                                marginBottom: '0.5rem'
                            }}>
                                {status.message}
                            </div>
                        )}

                        <button type="submit" className="submit-btn" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
