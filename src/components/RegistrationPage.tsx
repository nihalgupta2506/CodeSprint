import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaCopy, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import technoTarangLogo from '../assets/technotarang-logo.png';
import pceLogo from '../assets/PCE Logo Only.png';
import hack2SkillLogo from '../assets/hack2skills logo.png';
import ParticleNetwork from './ParticleNetwork';

const RegistrationPage: React.FC = () => {
    const [showBankDetails, setShowBankDetails] = useState(false);
    const [copiedContent, setCopiedContent] = useState<string | null>(null);

    const bankDetails = [
        { label: "A/C Name", value: "POORNIMA COLLEGE OF ENGINEERING" },
        { label: "Bank Name", value: "HDFC BANK LTD" },
        { label: "Bank A/C No.", value: "50200024936188" },
        { label: "IFSC Code", value: "HDFC0003873" },
        { label: "Bank MICR Code", value: "302240028" },
        { label: "Bank Code", value: "3873" },
        { label: "Branch Name", value: "SITAPURA, JAIPUR" },
    ];

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedContent(text);
        setTimeout(() => setCopiedContent(null), 2000);
    };

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
                    className="glass-card mb-10 w-full max-w-xl mx-auto border-neon-blue/20"
                >
                    <div className="p-6 md:p-8 flex flex-col items-center">
                        <div className="mb-4 flex justify-center">
                             <img src={hack2SkillLogo} alt="Hack2Skill Logo" className="h-12 md:h-16 w-auto drop-shadow-md" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-exo font-bold text-gray-800 mb-2">
                             Team Registration Fee
                        </h2>
                        <div className="flex items-baseline justify-center gap-1 mb-6">
                             <span className="text-3xl md:text-4xl font-black text-neon-blue">₹800</span>
                             <span className="text-gray-500 font-montserrat font-medium text-sm">/ team</span>
                        </div>

                        <div className="flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50/50 border border-blue-100 rounded-full">
                            <span className="text-accent-blue font-bold">👥</span>
                            <span className="text-sm md:text-base font-montserrat font-bold text-gray-700">Team Size: 2-4 Members</span>
                        </div>
                        
                        <p className="text-gray-600 font-montserrat text-base md:text-lg mb-6 leading-relaxed max-w-lg mx-auto">
                            Join us for 24 hours of intensive coding, innovation, and networking.
                        </p>

                        {/* Bank Details Section */}
                        <div className="w-full max-w-md mx-auto mb-8 sm:mb-10 text-left">
                            <button
                                onClick={() => setShowBankDetails(!showBankDetails)}
                                className="w-full flex items-center justify-between px-6 py-4 bg-white border border-neon-blue/20 rounded-xl font-montserrat font-bold text-gray-800 hover:bg-blue-50/50 hover:border-neon-blue/40 transition-all shadow-sm"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="text-accent-blue text-xl">🏦</span>
                                    Click to view NEFT Account Details
                                </span>
                                {showBankDetails ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                            </button>

                            <AnimatePresence>
                                {showBankDetails && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-3 p-5 md:p-6 bg-white border border-gray-200 rounded-xl shadow-inner divide-y divide-gray-100">
                                            {bankDetails.map((detail, idx) => (
                                                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between group gap-2 sm:gap-4">
                                                    <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider min-w-[120px] shrink-0">
                                                        {detail.label}
                                                    </span>
                                                    <div className="flex items-center justify-between w-full sm:w-auto flex-1 gap-2 min-w-0">
                                                        <span className="text-xs sm:text-sm md:text-base font-exo font-bold text-gray-800 break-words sm:text-right w-full">
                                                            {detail.value}
                                                        </span>
                                                        <button 
                                                            onClick={e => { e.stopPropagation(); handleCopy(detail.value); }}
                                                            className="p-2 text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 rounded-lg transition-colors focus:outline-none flex-shrink-0"
                                                            title={`Copy ${detail.label}`}
                                                        >
                                                            {copiedContent === detail.value ? <FaCheck className="text-green-500 text-xs md:text-sm" /> : <FaCopy className="text-xs md:text-sm" />}
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="pt-4 mt-2">
                                                <p className="text-xs md:text-sm text-center font-montserrat text-gray-500 italic">
                                                    Please save the transaction ID/screenshot after successful payment for the registration.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

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
