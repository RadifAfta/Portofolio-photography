import React from 'react';
import { Camera, Award, Clock, Users, ChevronRight } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <Clock className="w-6 h-6" />, value: "10+", label: "Years Experience" },
        { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
        { icon: <Camera className="w-6 h-6" />, value: "1000+", label: "Photo Sessions" },
        { icon: <Award className="w-6 h-6" />, value: "25+", label: "Awards Won" },
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
            <div className="absolute inset-0">
                <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-40 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img
                                    src="hero3.jpg"
                                    alt="Profile"
                                    className="w-full object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <div className="space-y-8">
                            {/* Header */}
                            <div>
                                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    About Me
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    With over 10 years of experience in photography, I specialize in capturing
                                    the perfect moments that tell your story. My passion lies in creating
                                    timeless images that evoke emotion and preserve memories.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    Whether it's a wedding, portrait session, or landscape photography,
                                    I bring creativity and technical expertise to every shoot.
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div 
                                        key={index}
                                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm
                                            hover:bg-white/10 transition-colors duration-300"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="p-2 rounded-lg bg-purple-500/10">
                                                {stat.icon}
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-white">
                                                    {stat.value}
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r 
                                from-purple-600 to-pink-600 rounded-full hover:from-purple-500 
                                hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                                <span>View My Work</span>
                                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;