import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container container">
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logo} alt="AK Logo" style={{ height: '40px', width: 'auto' }} />
                </div>
                <ul className="nav-links">
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('work')}>Work</li>
                    <li onClick={() => scrollToSection('skills')}>Skills</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
