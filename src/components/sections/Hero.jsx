import React, { useEffect, useState } from 'react';
import { Camera, ChevronDown } from 'lucide-react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToNext = () => {
        const nextSection = document.getElementById('gallery');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden bg-black">
            {/* Background with parallax effect */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
                <img
                    src="hero3.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover opacity-60 scale-110 transform transition-transform duration-[3000ms]"
                />
            </div>

            {/* Main content */}
            <div className={`relative z-20 text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                {/* Decorative elements */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full border-2 border-purple-400/30 flex items-center justify-center">
                        <Camera size={40} className="text-purple-400" />
                    </div>
                </div>

                {/* Text content */}
                <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                    Sueb Kirno
                </h1>
                
                <div className="space-y-4">
                    <p className="text-2xl text-gray-300 font-light">
                        Capturing moments, creating memories
                    </p>
                    <p className="text-purple-400/80 text-lg tracking-wider uppercase">
                        Professional Photographer
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full 
                        hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300">
                        View Portfolio
                    </button>
                    <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 
                        transform hover:scale-105 transition-all duration-300">
                        Contact Me
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer
                    animate-bounce hover:text-purple-400 transition-colors duration-300"
                    onClick={scrollToNext}>
                    <ChevronDown size={32} />
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl" />
            </div>
        </section>
    );
};

export default Hero;