import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaQrcode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import technoTarangLogo from '../assets/technotarang-logo.png';
import pceLogo from '../assets/PCE Logo Only.png';
import qrCodeImage from '../assets/adobe-express-qr-code.png';
import ParticleNetwork from './ParticleNetwork';

const QRCodeRegister: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-off-white min-h-screen text-gray-800 w-full overflow-hidden relative flex flex-col items-center justify-center py-20 px-4">
            {/* Animated Background */}
            <ParticleNetwork />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">

                {/* Logos */}
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

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-accent-blue tracking-tight mb-3"
                >
                    QR REGISTRATION
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-500 font-montserrat text-sm md:text-base mb-8 max-w-md mx-auto"
                >
                    Scan the QR code below to register for TechnoTarang
                </motion.p>

                {/* QR Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="glass-card mb-10 w-full max-w-md mx-auto border-neon-blue/20"
                >
                    <div className="p-6 md:p-10 flex flex-col items-center">
                        {/* Icon badge */}
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-accent-blue flex items-center justify-center mb-6 shadow-lg shadow-neon-blue/20">
                            <FaQrcode className="text-white text-2xl md:text-3xl" />
                        </div>

                        <h2 className="text-xl md:text-2xl font-exo font-bold text-gray-800 mb-2">
                            Scan to Register
                        </h2>
                        <p className="text-gray-500 font-montserrat text-sm mb-6 max-w-xs">
                            Use your phone camera or any QR scanner app to open the registration form
                        </p>

                        {/* QR Code Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 120 }}
                            className="relative p-4 bg-white rounded-2xl shadow-lg border border-gray-100 mb-6 group"
                        >
                            {/* Corner decorations */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-neon-blue rounded-tl-lg -translate-x-1 -translate-y-1" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-neon-blue rounded-tr-lg translate-x-1 -translate-y-1" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-neon-blue rounded-bl-lg -translate-x-1 translate-y-1" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-neon-blue rounded-br-lg translate-x-1 translate-y-1" />

                            <img
                                src={qrCodeImage}
                                alt="Registration QR Code"
                                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Scan line animation */}
                            <motion.div
                                className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent"
                                initial={{ top: '1rem' }}
                                animate={{ top: ['1rem', 'calc(100% - 1rem)', '1rem'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </motion.div>

                        {/* Info badges */}
                        <div className="flex flex-wrap justify-center gap-3 mb-2">
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50/50 border border-blue-100 rounded-full">
                                <span className="text-accent-blue font-bold">💰</span>
                                <span className="text-sm font-montserrat font-bold text-gray-700">₹800 / team</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50/50 border border-blue-100 rounded-full">
                                <span className="text-accent-blue font-bold">👥</span>
                                <span className="text-sm font-montserrat font-bold text-gray-700">2-4 Members</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Instruction Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="w-full max-w-md mx-auto mb-10"
                >
                    <h3 className="text-lg font-exo font-bold text-gray-700 mb-4">How to Register</h3>
                    <div className="flex flex-col gap-3">
                        {[
                            { step: '1', text: 'Open your phone camera or QR scanner' },
                            { step: '2', text: 'Point it at the QR code above' },
                            { step: '3', text: 'Fill in your team details on the form' },
                            { step: '4', text: 'Complete the payment of ₹800' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                                className="flex items-center gap-4 px-5 py-3 bg-white/70 border border-gray-100 rounded-xl shadow-sm"
                            >
                                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-accent-blue text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-md shadow-neon-blue/20">
                                    {item.step}
                                </span>
                                <span className="text-sm md:text-base font-montserrat font-medium text-gray-700">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-neon-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </div>
    );
};

export default QRCodeRegister;
