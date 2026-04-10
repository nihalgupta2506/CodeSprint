import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaInstagram, FaLinkedin, FaDiscord, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import technoTarangLogo from '../assets/technotarang-logo.png';
import pceLogo from '../assets/PCE Logo Only.png';
import ParticleNetwork from './ParticleNetwork';

const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/technotarang.pce/", label: "Instagram" },
    { icon: <FaXTwitter />, href: "https://x.com/PceTarang04", label: "Twitter (X)" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/techno-tarang-pce-62a6013b7/", label: "LinkedIn" },
    { icon: <FaDiscord />, href: "https://discord.gg/93MfSEp2", label: "Discord" },
    { icon: <FaWhatsapp />, href: "https://chat.whatsapp.com/DKhHzgB7gbj8HT1wOHTBW1", label: "WhatsApp" },
];

const RegistrationPage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                    className="mb-6 md:mb-8 flex items-center justify-center gap-3 sm:gap-6 w-full"
                >
                    <img src={technoTarangLogo} alt="TechnoTarang Logo" className="h-10 sm:h-16 md:h-24 w-auto drop-shadow-lg object-contain max-w-[45%]" />
                    <div className="w-px h-8 sm:h-12 md:h-16 bg-gray-300/60 flex-shrink-0" />
                    <img src={pceLogo} alt="Poornima College of Engineering" className="h-10 sm:h-16 md:h-24 w-auto drop-shadow-lg object-contain max-w-[45%]" />
                </motion.div>

                {/* Main Text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-accent-blue tracking-tight mb-8"
                >
                    REGISTER NOW
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass-card mb-10 w-full max-w-xl mx-auto border-neon-blue/20"
                >
                    <div className="p-8 md:p-12 flex flex-col items-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-500/10 flex items-center justify-center mb-6 shadow-lg shadow-red-500/20 border border-red-500/30">
                            <span className="text-4xl md:text-5xl">🔒</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-exo font-bold text-gray-800 mb-4 text-center">
                            REGISTRATION <span className="text-red-500">CLOSED</span>
                        </h2>
                        
                        <p className="text-gray-600 font-montserrat text-sm md:text-base mb-8 text-center leading-relaxed">
                            Thank you for the overwhelming response! Registrations for TechnoTarang are now officially closed.
                            <br/><br/>
                            We look forward to seeing all registered participants at the event. Stay tuned for updates!
                        </p>

                        <div className="flex flex-col items-center gap-4 w-full border-t border-gray-200/60 pt-6 mt-2">
                            <p className="text-gray-500 font-montserrat text-sm font-bold uppercase tracking-wide">Stay Connected</p>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-neon-blue hover:text-white hover:border-neon-blue hover:scale-110 hover:shadow-md transition-all duration-300 text-lg sm:text-xl"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
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
