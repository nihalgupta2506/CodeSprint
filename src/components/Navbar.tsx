import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import codeSprintLogo from "../assets/codesprint-logo.png";
import pceLogo from "../assets/pce-logo.png";

const NAVBAR_HEIGHT_MOBILE = 70;
const NAVBAR_HEIGHT_DESKTOP = 120;

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
            const offset = window.innerWidth < 768 ? NAVBAR_HEIGHT_MOBILE : NAVBAR_HEIGHT_DESKTOP;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
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
            <div className="container mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">

                {/* Left: CodeSprint Logo | PCE Logo + College Name — tapping goes Home */}
                <a
                    href="#hero"
                    onClick={(e) => scrollToSection(e, "#hero")}
                    className="flex items-center gap-2 sm:gap-3 cursor-pointer"
                >
                    <img src={codeSprintLogo} alt="CodeSprint Logo" className="h-16 sm:h-16 md:h-16 w-auto object-contain" />
                    <div className="w-px h-8 sm:h-10 md:h-14 bg-gray-300" />
                    <img src={pceLogo} alt="PCE Logo" className="h-16 sm:h-10 md:h-16 w-auto object-contain" />
                    <div className="hidden sm:flex flex-col items-start">
                        <span className="text-xs sm:text-sm md:text-base font-exo font-bold text-gray-800 leading-tight">
                            Poornima College
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-sm font-montserrat text-gray-600 font-medium leading-tight">
                            of Engineering
                        </span>
                    </div>
                </a>

                {/* Center: Nav Links (desktop) */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="font-montserrat text-gray-600 hover:text-neon-blue transition-colors text-xs lg:text-sm font-semibold uppercase tracking-wide relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
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
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 bg-black/30 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="md:hidden fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-off-white shadow-2xl z-50 overflow-y-auto"
                        >
                            {/* Close Button */}
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-neon-blue text-2xl p-2"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Mobile College Logo */}
                            <div className="flex items-center gap-2 px-6 mb-4">
                                <img src={pceLogo} alt="PCE Logo" className="h-8 w-auto object-contain" />
                                <span className="text-xs font-bold text-gray-800">Poornima College of Engineering</span>
                            </div>

                            <div className="border-t border-gray-200 mx-4" />

                            {/* Nav Links */}
                            <div className="flex flex-col py-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="font-exo text-base text-gray-800 hover:text-neon-blue hover:bg-blue-50 transition-colors font-medium px-6 py-3 active:bg-blue-100"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
