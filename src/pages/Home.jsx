import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Work />
            <Skills />
            <Contact />
        </main>
    );
};

export default Home;
