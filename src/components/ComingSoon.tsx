import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import technoTarangLogo from '../assets/technotarang-logo.png';
import ParticleNetwork from './ParticleNetwork';

const ComingSoon: React.FC = () => {
    return (
        <div className="bg-off-white min-h-screen text-gray-800 w-full overflow-hidden relative flex flex-col items-center justify-center">
            {/* Animated Background */}
            <ParticleNetwork />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">
                
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <img src={technoTarangLogo} alt="TechnoTarang Logo" className="h-16 md:h-24 w-auto drop-shadow-lg" />
                </motion.div>

                {/* Main Text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-accent-blue tracking-tight mb-6"
                >
                    COMING SOON
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-600 font-montserrat font-medium mb-12 max-w-2xl px-4"
                >
                    The registration portal for <span className="text-neon-blue font-bold">TechnoTarang 2026</span> is currently under construction. Please check back later!
                </motion.p>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-8 py-3 bg-neon-blue text-white rounded-full font-montserrat font-bold text-lg hover:bg-secondary-blue hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <FaArrowLeft />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
            
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-neon-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </div>
    );
};

export default ComingSoon;
