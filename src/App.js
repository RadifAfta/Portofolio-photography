import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Gallery from './components/sections/Gallery';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
    return (
        <div className="min-h-screen bg-photo-black text-white">
            <Navbar />
            <Hero />
            <Gallery />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;