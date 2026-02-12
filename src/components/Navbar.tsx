import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import codeSprintLogo from "../assets/codesprint-logo.png";
import pceLogo from "../assets/pce-logo.png";

const NAVBAR_HEIGHT = 120; // px offset for fixed navbar

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
        { name: "Overview", href: "#overview" },
        { name: "Themes", href: "#themes" },
        { name: "Timeline", href: "#timeline" },
        { name: "Prizes", href: "#prizes" },
        { name: "Sponsors", href: "#sponsors" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-off-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">

                {/* Left: Logo + Event Name & Date */}
                <div className="flex items-center gap-3">
                    <img src={codeSprintLogo} alt="CodeSprint Logo" className="h-24 w-auto object-contain" />
                    <div className="flex flex-col items-start">
                        <a href="#" className="text-2xl font-exo font-bold text-neon-blue tracking-wide">
                            CodeSprint
                        </a>
                        <span className="text-xs font-montserrat text-accent-blue font-medium">13–14 March 2026</span>
                    </div>
                </div>

                {/* Center: Nav Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="font-montserrat text-gray-600 hover:text-neon-blue transition-colors text-sm font-semibold uppercase tracking-wide relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Right: College Logo + Name */}
                <div className="hidden lg:flex items-center gap-3">
                    <img src={pceLogo} alt="PCE Logo" className="h-12 w-auto object-contain" />
                    <span className="text-sm font-bold text-gray-800 tracking-tight whitespace-nowrap">Poornima College of Engineering</span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-neon-blue text-2xl z-20"
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
                        className="md:hidden bg-off-white/95 backdrop-blur-xl border-b border-neon-blue/10 overflow-hidden absolute w-full top-full left-0 shadow-xl"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {/* Mobile College Logo */}
                            <div className="flex items-center gap-2 mb-2">
                                <img src={pceLogo} alt="PCE Logo" className="h-10 w-auto object-contain" />
                                <span className="text-sm font-bold text-gray-800">Poornima College of Engineering</span>
                            </div>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="font-exo text-xl text-gray-800 hover:text-neon-blue transition-colors font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
