import React, { useState } from 'react';
import { Mail, Instagram, Camera, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            value: 'contact@example.com',
            link: 'mailto:contact@example.com',
            gradient: 'from-blue-500 to-purple-500'
        },
        {
            icon: <Instagram className="w-6 h-6" />,
            title: 'Instagram',
            value: '@photographyart',
            link: '#',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Camera className="w-6 h-6" />,
            title: 'Studio',
            value: '123 Photo Street',
            link: '#',
            gradient: 'from-pink-500 to-red-500'
        }
    ];

    return (
        <section id="contact" className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
            <div className="absolute inset-0">
                <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-40 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block p-2 bg-purple-500/10 rounded-xl mb-4">
                        <Mail className="w-8 h-8 text-purple-400" />
                    </div>
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Let's create something amazing together. Feel free to reach out through any of these channels.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Methods */}
                    <div className="space-y-6">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                className="group flex items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm
                                    hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]"
                            >
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${method.gradient}`}>
                                    {method.icon}
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-semibold mb-1">{method.title}</h3>
                                    <p className="text-gray-400">{method.value}</p>
                                </div>
                                <div className="ml-auto">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center
                                        bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <Send className="w-5 h-5 transform -rotate-45" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-6 py-4 bg-white/5 rounded-xl backdrop-blur-sm
                                    placeholder:text-gray-500 focus:outline-none focus:ring-2 
                                    focus:ring-purple-500 transition-all"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-6 py-4 bg-white/5 rounded-xl backdrop-blur-sm
                                    placeholder:text-gray-500 focus:outline-none focus:ring-2 
                                    focus:ring-purple-500 transition-all"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-6 py-4 bg-white/5 rounded-xl backdrop-blur-sm
                                    placeholder:text-gray-500 focus:outline-none focus:ring-2 
                                    focus:ring-purple-500 transition-all min-h-[150px]"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 
                                to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all 
                                duration-300 transform hover:scale-[1.02] disabled:opacity-70 
                                disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 ml-2 transform -rotate-45" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;