import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'work', 'skills', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsOpen(false);
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const sidebarVariants = {
        closed: { x: "100%", opacity: 0 },
        open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
    };

    return (
        <>
            <motion.nav
                className={`navbar ${isScrolled ? 'scrolled' : ''}`}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
                <div className="navbar-container">
                    <div className="logo" onClick={() => scrollToSection('home')}>
                        <img src={logo} alt="AK Logo" style={{ height: '32px', width: 'auto' }} />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="nav-links desktop-menu">
                        {['about', 'work', 'skills', 'contact'].map((item) => (
                            <li
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={activeSection === item ? 'active' : ''}
                            >
                                {activeSection === item && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="active-pill"
                                        transition={{ type: "spring", duration: 0.6 }}
                                    />
                                )}
                                <span className="nav-text">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Icon */}
                    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="sidebar"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                    >
                        <ul className="sidebar-links">
                            {['about', 'work', 'skills', 'contact'].map((item) => (
                                <li
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={activeSection === item ? 'active' : ''}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
