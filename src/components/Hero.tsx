import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Countdown to April 4, 2026 09:00 AM IST
    const targetDate = new Date("2026-04-04T09:00:00+05:30").getTime();

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const pad = (n: number) => String(n).padStart(2, "0");

    return (
        <section ref={targetRef} id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 pt-48 md:pt-56 lg:pt-[200px] pb-4">

            <div className="relative z-10 text-center w-full max-w-4xl lg:max-w-5xl mx-auto mt-4 md:mt-6 lg:mt-0 flex flex-col items-center justify-center h-full">

                {/* Hackathon 3.0 Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 md:mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 bg-neon-blue/10 border border-neon-blue/25 rounded-full text-neon-blue font-exo font-bold text-xs md:text-sm lg:text-base uppercase tracking-widest shadow-sm">
                        <span className="text-base md:text-lg">🏆</span>
                        Hackathon 3.0
                    </span>
                </motion.div>

                {/* Main Title with letter-by-letter animation */}
                <div className="mb-2 md:mb-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-accent-blue tracking-tight leading-none">
                        {"TechnoTarang".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * i, duration: 0.4, ease: "easeOut" }}
                                style={{ display: "inline-block" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="w-full flex flex-col items-center"
                >
                    <p className="text-base sm:text-xl md:text-3xl lg:text-4xl font-montserrat font-semibold text-gray-700 mt-2 mb-3 md:mb-5 tracking-wide px-2">
                        "Where Code Builds the <span className="text-accent-blue">Future of Earth</span>"
                    </p>

                    <div className="flex justify-center mb-4 md:mb-6">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 2.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 bg-red-50 border border-red-200 rounded-full text-red-600 font-montserrat font-bold text-xs md:text-sm lg:text-base shadow-sm"
                        >
                            <span className="text-base md:text-lg">⏰</span>
                            Registration Deadline: 27 March 2026
                        </motion.div>
                    </div>

                    {/* Event Details Boxes */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-5 md:mb-8">
                        {/* Date Box */}
                        <a
                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=TechnoTarang+2026&dates=20260404T033000Z/20260405T180000Z&details=TechnoTarang+Hackathon+-+National+Level+Hackathon+at+Poornima+College+of+Engineering&location=Poornima+College+of+Engineering,+Jaipur,+Rajasthan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/80 border border-accent-blue/20 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all group"
                        >
                            <span className="text-xl md:text-2xl">📅</span>
                            <div className="text-left">
                                <span className="block text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Event Date</span>
                                <span className="font-exo font-bold text-accent-blue text-xs md:text-sm lg:text-base">4–5 April 2026</span>
                            </div>
                        </a>

                        {/* Venue Box */}
                        <a
                            href="https://maps.google.com/?q=Poornima+College+of+Engineering"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/80 border border-accent-blue/20 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all group"
                        >
                            <span className="text-xl md:text-2xl">📍</span>
                            <div className="text-left">
                                <span className="block text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Venue</span>
                                <span className="font-exo font-bold text-accent-blue text-xs md:text-sm lg:text-base">Poornima College of Engineering</span>
                            </div>
                        </a>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 mb-6 md:mb-8">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hours" },
                            { value: timeLeft.minutes, label: "Min" },
                            { value: timeLeft.seconds, label: "Sec" },
                        ].map((unit, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-neon-blue/10 border border-neon-blue/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-lg sm:text-2xl md:text-4xl font-exo font-black text-neon-blue tabular-nums">
                                        {pad(unit.value)}
                                    </span>
                                </div>
                                <span className="text-[9px] sm:text-xs md:text-sm font-montserrat font-semibold text-gray-500 mt-1.5 uppercase tracking-wider">
                                    {unit.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById("about");
                                if (el) {
                                    const offset = window.innerWidth < 768 ? 70 : 120;
                                    const top = el.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top, behavior: "smooth" });
                                }
                            }}
                            className="px-6 py-2.5 sm:px-10 sm:py-4 bg-neon-blue text-white rounded-full font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:bg-secondary-blue transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Explore Event
                        </a>
                        <Link
                            to="/register"
                            className="px-6 py-2.5 sm:px-10 sm:py-4 border-2 border-neon-blue text-neon-blue rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-neon-blue/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-neon-blue rounded-full"></div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
