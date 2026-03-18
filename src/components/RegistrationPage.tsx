import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import technoTarangLogo from '../assets/technotarang-logo.png';
import pceLogo from '../assets/PCE Logo Only.png';
import ParticleNetwork from './ParticleNetwork';

const RegistrationPage: React.FC = () => {
    return (
        <div className="bg-off-white min-h-screen text-gray-800 w-full overflow-hidden relative flex flex-col items-center justify-center py-20 px-4">
            {/* Animated Background */}
            <ParticleNetwork />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
                
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex items-center justify-center gap-6"
                >
                    <img src={technoTarangLogo} alt="TechnoTarang Logo" className="h-16 md:h-24 w-auto drop-shadow-lg" />
                    <div className="w-px h-12 md:h-16 bg-gray-300/60" />
                    <img src={pceLogo} alt="Poornima College of Engineering" className="h-16 md:h-24 w-auto drop-shadow-lg" />
                </motion.div>

                {/* Main Text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-accent-blue tracking-tight mb-8"
                >
                    REGISTER NOW
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass-card mb-10 w-full max-w-2xl mx-auto border-neon-blue/20"
                >
                    <div className="p-8 md:p-12 flex flex-col items-center">
                        <div className="mb-6 flex justify-center">
                             <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-4">
                                <span className="text-3xl">🎟️</span>
                             </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-exo font-bold text-gray-800 mb-2">
                             Team Registration Fee
                        </h2>
                        <div className="flex items-baseline justify-center gap-1 mb-8">
                             <span className="text-4xl md:text-5xl font-black text-neon-blue">₹800</span>
                             <span className="text-gray-500 font-montserrat font-medium">/ team</span>
                        </div>
                        
                        <p className="text-gray-600 font-montserrat text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto">
                            Join us for 24 hours of intensive coding, innovation, and networking.
                        </p>

                        <a 
                            href="https://vision.hack2skill.com/event/technotarang/?utm_source=hack2skill&utm_medium=homepage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-accent-blue text-white rounded-xl font-bold text-lg md:text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
                        >
                             Register on Hack2Skill
                             <FaExternalLinkAlt className="text-sm" />
                        </a>
                    </div>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/50 border border-gray-200 text-gray-600 rounded-full font-montserrat font-semibold hover:bg-white hover:text-neon-blue hover:shadow-md transition-all duration-300"
                    >
                        <FaArrowLeft className="text-sm" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
            
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-neon-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </div>
    );
};

export default RegistrationPage;
