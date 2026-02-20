import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import codeSprintLogo from "../assets/codesprint-logo.png";
import pceLogo from "../assets/pce-logo.png";
import h2sLogo from "../assets/Hack2skills_logo.jpeg";

const NAVBAR_HEIGHT_MOBILE = 105;
const NAVBAR_HEIGHT_DESKTOP = 120;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ["hero", "about", "overview", "themes", "timeline", "prizes", "sponsors"];
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
                    {/* Top Row: CodeSprint Logo (left) | PCE Logo + Name (center) | Platform Partner (right) */}
                    <div className="flex items-center justify-between px-6 xl:px-10 py-3 border-b border-gray-200/50">
                        {/* Left: CodeSprint Logo */}
                        <a
                            href="#hero"
                            onClick={(e) => scrollToSection(e, "#hero")}
                            className="flex items-center cursor-pointer flex-shrink-0"
                        >
                            <img src={codeSprintLogo} alt="CodeSprint Logo" className="h-12 xl:h-14 w-auto object-contain" />
                        </a>

                        {/* Center: PCE Logo + College Name */}
                        <a
                            href="#hero"
                            onClick={(e) => scrollToSection(e, "#hero")}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <img src={pceLogo} alt="PCE Logo" className="h-12 xl:h-14 w-auto object-contain" />
                            <div className="flex flex-col items-start">
                                <span className="text-xl xl:text-2xl font-exo font-black text-gray-800 uppercase tracking-wider leading-tight">
                                    Poornima College of Engineering
                                </span>
                            </div>
                        </a>

                        {/* Right: Platform Partner */}
                        <a
                            href="https://hack2skill.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-end hover:opacity-80 transition-opacity flex-shrink-0"
                        >
                            <span className="text-[10px] font-montserrat text-gray-500 font-medium uppercase tracking-wider leading-tight mb-1">
                                Platform Partner
                            </span>
                            <img src={h2sLogo} alt="hack2skill" className="h-7 xl:h-8 w-auto object-contain" />
                        </a>
                    </div>

                    {/* Bottom Row: Nav Links + Register Button */}
                    <div className="flex items-center justify-center gap-1 xl:gap-2 py-2 px-6">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`flex items-center gap-1.5 font-montserrat text-sm font-semibold px-4 py-2 rounded-md transition-all duration-200 ${isActive
                                        ? "text-neon-blue bg-neon-blue/10 border-b-2 border-neon-blue"
                                        : "text-gray-600 hover:text-neon-blue hover:bg-blue-50"
                                        }`}
                                >
                                    {link.icon && link.icon}
                                    {link.name}
                                </a>
                            );
                        })}
                        <a
                            href="https://hack2skill.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 px-6 py-2 bg-neon-blue text-white rounded-md font-montserrat font-bold text-sm hover:bg-secondary-blue hover:shadow-lg transition-all duration-300"
                        >
                            Register
                        </a>
                    </div>
                </div>

                {/* Mobile Header (Two Rows) */}
                <div className="lg:hidden flex flex-col">
                    {/* Top Row: Logos and Menu */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200/50">
                        <img src={codeSprintLogo} alt="CodeSprint Logo" className="h-9 w-auto object-contain" />

                        <div className="flex items-center gap-1.5 mx-2">
                            <img src={pceLogo} alt="PCE Logo" className="h-8 w-auto object-contain" />
                            <span className="text-[9px] sm:text-[10px] font-exo font-black text-gray-800 uppercase line-clamp-1 leading-tight text-center">
                                Poornima College of Engineering
                            </span>
                        </div>

                        <button
                            className="text-neon-blue text-2xl p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Bottom Row: Scrollable Nav Links + Register */}
                    <div className="flex items-center gap-2 px-3 py-2 overflow-x-auto no-scrollbar bg-white/40">
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
                        <a
                            href="https://hack2skill.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whitespace-nowrap px-5 py-1.5 bg-accent-blue text-white rounded-full text-[11px] font-montserrat font-bold shadow-sm active:bg-secondary-blue"
                        >
                            Register
                        </a>
                    </div>
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

                            <div className="flex items-center gap-3 px-6 mb-4">
                                <img src={pceLogo} alt="PCE Logo" className="h-10 w-auto object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-gray-800">Poornima College</span>
                                    <span className="text-xs text-gray-500 font-medium">of Engineering</span>
                                </div>
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
                                <a
                                    href="https://hack2skill.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center px-6 py-3 bg-neon-blue text-white rounded-lg font-montserrat font-bold text-sm"
                                >
                                    Register Now
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
