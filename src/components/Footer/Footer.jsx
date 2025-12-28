import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="AK Logo" style={{ height: '30px', width: 'auto' }} />
                        </div>
                        <p className="footer-tagline">
                            Building digital experiences with clean code and creative solutions.
                        </p>
                    </div>

                    <div className="footer-nav">
                        <h4 className="footer-heading">NAVIGATE</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Expertise</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-connect">
                        <h4 className="footer-heading">CONNECT</h4>
                        <ul className="footer-links">
                            <li><a href="https://github.com/aaryan-codes56" target="_blank" rel="noopener noreferrer">Github <span className="arrow">→</span></a></li>
                            <li><a href="https://www.linkedin.com/in/aaryan-krishna-840217317/" target="_blank" rel="noopener noreferrer">Linkedin <span className="arrow">→</span></a></li>
                            <li><a href="https://leetcode.com/u/DIpiow8PMa/" target="_blank" rel="noopener noreferrer">LeetCode <span className="arrow">→</span></a></li>
                            <li><a href="mailto:aaryankrishna009@gmail.com">Email <span className="arrow">→</span></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} Aaryan Krishna. All rights reserved.</p>
                    <button onClick={scrollToTop} className="back-to-top">
                        BACK TO TOP <span className="arrow">↑</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
