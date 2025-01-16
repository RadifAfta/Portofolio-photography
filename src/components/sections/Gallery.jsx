import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Filter, ZoomIn } from 'lucide-react';
import { photos, categories } from '../../data/photos';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredPhotos = selectedCategory === 'all'
        ? photos
        : photos.filter(photo => photo.category === selectedCategory);

    return (
        <section id="gallery" className="relative w-full px-4 py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
            <div className="absolute inset-0">
                <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-40 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block p-2 bg-purple-500/10 rounded-xl mb-4">
                        <Camera className="w-8 h-8 text-purple-400" />
                    </div>
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Gallery
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Explore my collection of captured moments and artistic expressions
                    </p>
                </div>

                {/* Mobile Filter Button */}
                <div className="md:hidden mb-6">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <Filter className="w-5 h-5" />
                        <span>Filter Categories</span>
                    </button>
                </div>

                {/* Category Filter */}
                <div className={`md:flex justify-center mb-12 space-x-4 flex-wrap transition-all duration-300 ${
                    isFilterOpen ? 'block' : 'hidden md:flex'
                }`}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full mb-2 transition-all duration-300 transform hover:scale-105 ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                    : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                    <AnimatePresence>
                        {filteredPhotos.map(photo => (
                            <motion.div
                                key={photo.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="group relative overflow-hidden rounded-xl shadow-xl"
                            >
                                <div className="aspect-w-4 aspect-h-3">
                                    <img
                                        src={photo.src}
                                        alt={photo.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 
                                            transition-transform duration-500">
                                            {photo.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 
                                            transition-transform duration-500 delay-100">
                                            {photo.description}
                                        </p>
                                    </div>
                                    
                                    {/* Zoom Icon */}
                                    <button 
                                        className="absolute top-4 right-4 p-2 bg-white/10 rounded-full 
                                            backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                            hover:bg-white/20"
                                        onClick={() => setSelectedImage(photo)}
                                    >
                                        <ZoomIn className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-7xl w-full"
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                                <p className="text-gray-300">{selectedImage.description}</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;