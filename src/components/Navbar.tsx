import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import LogoCarousel from "./LogoCarousel";
import technoTarangLogo from "../assets/technotarang-logo.png";
import ideaLabLogo from "../assets/Idea_Lab_Logo.png";
import pceLogo from "../assets/PCE Logo Only.png";
import piicLogo from "../assets/PIIC Logo.png";
import h2sLogo from "../assets/hack2skills logo.png";

const NAVBAR_HEIGHT_MOBILE = 105;
const NAVBAR_HEIGHT_DESKTOP = 120;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ["hero", "about", "overview", "themes", "timeline", "prizes", "guidelines", "sponsors", "mentors-jury", "faq"];
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero", icon: <FaHome className="text-sm" /> },
        { name: "About", href: "#about" },
        { name: "Overview", href: "#overview" },
        { name: "Themes", href: "#themes" },
        { name: "Timeline", href: "#timeline" },
        { name: "Prizes", href: "#prizes" },
        { name: "Guidelines", href: "#guidelines" },
        { name: "Sponsors", href: "#sponsors" },
        { name: "Mentors & Jury Members", href: "#mentors-jury" },
        { name: "FAQ", href: "#faq" },
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
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-off-white/95 backdrop-blur-md shadow-lg" : "bg-off-white/80 backdrop-blur-sm"
                    }`}
            >
                {/* Desktop Header */}
                <div className="hidden lg:flex flex-col">
                    {/* Top Row: 5 logos evenly spaced */}
                    <div className={`transition-all duration-300 ease-in-out flex items-center justify-between px-8 xl:px-14 border-b border-gray-200/50 ${isScrolled ? 'py-1.5' : 'py-3'}`}>
                        {/* 1: TechnoTarang Logo */}
                        <a
                            href="#hero"
                            onClick={(e) => scrollToSection(e, "#hero")}
                            className="flex items-center cursor-pointer flex-shrink-0"
                        >
                            <img src={technoTarangLogo} alt="TechnoTarang Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10 xl:h-12' : 'h-16 xl:h-20'}`} />
                        </a>

                        {/* 2: Idea Lab Logo */}
                        <div className="flex items-center flex-shrink-0">
                            <img src={ideaLabLogo} alt="Idea Lab" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-8 xl:h-10' : 'h-12 xl:h-16'}`} />
                        </div>

                        {/* 3: PCE Logo (center) */}
                        <a
                            href="#hero"
                            onClick={(e) => scrollToSection(e, "#hero")}
                            className="flex items-center cursor-pointer flex-shrink-0"
                        >
                            <img src={pceLogo} alt="PCE Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10 xl:h-12' : 'h-16 xl:h-20'}`} />
                        </a>

                        {/* 4: PIIC Logo */}
                        <div className="flex items-center flex-shrink-0">
                            <img src={piicLogo} alt="PIIC Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-8 xl:h-10' : 'h-12 xl:h-16'}`} />
                        </div>

                        {/* 5: Hack2Skill - Platform Partner */}
                        <a
                            href="https://hack2skill.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
                        >
                            <span className={`font-montserrat text-gray-500 font-bold uppercase tracking-wider transition-all duration-300 ${isScrolled ? 'text-[8px] sm:text-[10px] mb-0.5' : 'text-[10px] sm:text-xs mb-1'}`}>
                                Platform Partner
                            </span>
                            <img src={h2sLogo} alt="Hack2Skill" className={`w-auto object-contain rounded-sm transition-all duration-300 ${isScrolled ? 'h-6 sm:h-8 xl:h-10' : 'h-8 sm:h-10 xl:h-12'}`} />
                        </a>
                    </div>

                    {/* Bottom Row: Nav Links + Register Button */}
                    <div className={`flex items-center justify-center gap-0.5 xl:gap-1.5 px-4 xl:px-8 transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-2'}`}>
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`flex items-center gap-1 font-montserrat text-[11px] xl:text-sm font-semibold px-2.5 xl:px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${isActive
                                        ? "text-neon-blue bg-neon-blue/10 border-b-2 border-neon-blue"
                                        : "text-gray-600 hover:text-neon-blue hover:bg-blue-50"
                                        }`}
                                >
                                    {link.icon && link.icon}
                                    {link.name}
                                </a>
                            );
                        })}
                        <Link
                            to="/register"
                            className="ml-2 xl:ml-3 px-4 xl:px-6 py-2 bg-neon-blue text-white rounded-md font-montserrat font-bold text-[11px] xl:text-sm hover:bg-secondary-blue hover:shadow-lg transition-all duration-300 whitespace-nowrap flex-shrink-0"
                        >
                            Register
                        </Link>
                    </div>
                </div>

                {/* Mobile Header (Two Rows) */}
                <div className="lg:hidden flex flex-col">
                    {/* Top Row: Logos and Menu */}
                    <div className={`transition-all duration-300 ease-in-out flex items-center justify-between px-4 border-b border-gray-200/50 ${isScrolled ? 'py-1' : 'py-2'}`}>
                        <img src={technoTarangLogo} alt="TechnoTarang Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'}`} />

                        {/* PIIC Logo */}
                        <img src={piicLogo} alt="PIIC Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-6' : 'h-9'}`} />

                        {/* PCE Logo */}
                        <div className="flex items-center mx-2">
                            <img src={pceLogo} alt="PCE Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'}`} />
                        </div>

                        {/* Idea Lab Logo */}
                        <img src={ideaLabLogo} alt="Idea Lab" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-6' : 'h-9'}`} />

                        <button
                            className={`text-neon-blue p-1 transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Bottom Row: Scrollable Nav Links + Register */}
                    <div className={`flex items-center gap-2 px-3 overflow-x-auto no-scrollbar bg-white/40 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`} style={{WebkitOverflowScrolling: 'touch'}}>
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-montserrat font-bold transition-all ${isActive
                                        ? "bg-neon-blue text-white shadow-md shadow-neon-blue/20"
                                        : "bg-gray-200/50 text-gray-600 active:bg-gray-300/50"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <Link
                            to="/register"
                            className="whitespace-nowrap px-5 py-1.5 bg-accent-blue text-white rounded-full text-[11px] font-montserrat font-bold shadow-sm active:bg-secondary-blue flex-shrink-0"
                        >
                            Register
                        </Link>
                        {/* Trailing spacer so last item isn't hidden behind scroll edge */}
                        <span className="pl-2 flex-shrink-0" aria-hidden="true" />
                    </div>
                </div>

                {/* Logo Carousel Ticker embedded straight into the nav bar! */}
                <div className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-[120px] opacity-100'}`}>
                    <LogoCarousel />
                </div>
            </motion.nav>

            {/* Mobile Sidebar Menu (for extra accessibility) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="lg:hidden fixed top-0 right-0 h-[100dvh] w-[75%] max-w-[300px] bg-off-white shadow-2xl z-[70] overflow-y-auto"
                        >
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-neon-blue text-2xl p-2"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="flex items-center justify-center px-6 mb-4">
                                <img src={pceLogo} alt="PCE Logo" className="h-16 w-auto object-contain" />
                            </div>

                            <div className="border-t border-gray-200 mx-4" />

                            <div className="flex flex-col py-4">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.href.replace("#", "");
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className={`font-exo text-base font-medium px-6 py-3 transition-colors flex items-center gap-2 ${isActive
                                                ? "text-neon-blue bg-blue-50 border-l-4 border-neon-blue"
                                                : "text-gray-800 hover:text-neon-blue hover:bg-blue-50"
                                                }`}
                                        >
                                            {link.icon && link.icon}
                                            {link.name}
                                        </a>
                                    );
                                })}
                            </div>

                            <div className="border-t border-gray-200 mx-4" />

                            <div className="px-6 py-4">
                                <Link
                                    to="/register"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-6 py-3 bg-neon-blue text-white rounded-lg font-montserrat font-bold text-sm"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
