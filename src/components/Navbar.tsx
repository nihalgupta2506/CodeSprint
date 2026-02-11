import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Tracks", href: "#tracks" },
        { name: "Timeline", href: "#timeline" },
        { name: "Prizes", href: "#prizes" },
        { name: "Contact", href: "#footer" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark-bg/80 backdrop-blur-md shadow-neon border-b border-neon-green/20" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-orbitron font-bold text-white tracking-wider flex items-center gap-2 group">
                    <span className="text-neon-green group-hover:animate-pulse">&lt;</span>
                    CODESPRINT
                    <span className="text-neon-green group-hover:animate-pulse">/&gt;</span>
                    <span className="text-sm ml-2 text-gray-400">2050</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-exo text-gray-300 hover:text-neon-green transition-colors text-sm uppercase tracking-wide relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-green transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#register"
                        className="px-6 py-2 bg-neon-green/10 border border-neon-green text-neon-green font-orbitron font-bold rounded hover:bg-neon-green hover:text-dark-bg transition-all duration-300 shadow-[0_0_10px_theme('colors.neon-green')] hover:shadow-[0_0_20px_theme('colors.neon-green')]"
                    >
                        REGISTER
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-neon-green/20 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-orbitron text-xl text-white hover:text-neon-green transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#register"
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 bg-neon-green/20 border border-neon-green text-neon-green font-bold rounded hover:bg-neon-green hover:text-dark-bg transition-all shadow-neon"
                            >
                                DEPLOY
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
