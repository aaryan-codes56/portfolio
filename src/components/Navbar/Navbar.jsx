import React, { useState, useEffect } from 'react';
import './Navbar.css';

import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
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

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
            </nav>

            {/* Mobile Sidebar */}
            {/* Mobile Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
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
            </div>
        </>
    );
};

export default Navbar;
