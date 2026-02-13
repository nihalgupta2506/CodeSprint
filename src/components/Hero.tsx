import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Countdown to March 13, 2026 09:00 AM IST
    const targetDate = new Date("2026-03-13T09:00:00+05:30").getTime();

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
        <section ref={targetRef} id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-off-white tech-bg px-4 py-20">

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-off-white via-transparent to-blue-50/50 z-0"></div>

            {/* Decorative floating elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/5 rounded-full blur-2xl animate-float" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

            <div className="relative z-10 text-center w-full max-w-4xl mx-auto">

                {/* Hackathon 3.0 Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-neon-blue/10 border border-neon-blue/25 rounded-full text-neon-blue font-exo font-bold text-sm md:text-base uppercase tracking-widest shadow-sm">
                        <span className="text-lg">🏆</span>
                        Hackathon 3.0
                    </span>
                </motion.div>

                {/* Main Typing Text */}
                <div className="flex justify-center mb-4">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-6xl sm:text-8xl md:text-9xl font-exo font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-accent-blue tracking-tight animate-typing overflow-hidden whitespace-nowrap border-r-4 border-accent-blue pr-2"
                    >
                        CodeSprint
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                >
                    <p className="text-lg sm:text-xl md:text-3xl font-montserrat font-semibold text-gray-700 mt-2 mb-4 tracking-wide px-2">
                        "Where Code Builds the <span className="text-accent-blue">Future of Earth</span>"
                    </p>

                    {/* Highlighted Date Bar - Google Calendar Link */}
                    <div className="flex justify-center mb-6">
                        <a
                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=CodeSprint+2026&dates=20260313T033000Z/20260314T033000Z&details=CodeSprint+Hackathon+-+24+Hour+Coding+Marathon+at+Poornima+College+of+Engineering&location=Poornima+College+of+Engineering,+Jaipur,+Rajasthan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 md:gap-3 px-5 py-2.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full hover:bg-accent-blue/20 transition-colors group cursor-pointer"
                        >
                            <span className="text-lg group-hover:scale-110 transition-transform">📅</span>
                            <span className="font-exo font-bold text-accent-blue text-sm md:text-base uppercase tracking-wide">
                                13–14 March 2026
                            </span>
                            <span className="hidden sm:inline text-gray-400">|</span>
                            <span className="hidden sm:inline font-montserrat text-gray-600 text-sm font-medium">
                                Poornima College of Engineering
                            </span>
                        </a>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-8">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hours" },
                            { value: timeLeft.minutes, label: "Min" },
                            { value: timeLeft.seconds, label: "Sec" },
                        ].map((unit, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-neon-blue/10 border border-neon-blue/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-xl sm:text-2xl md:text-4xl font-exo font-black text-neon-blue tabular-nums">
                                        {pad(unit.value)}
                                    </span>
                                </div>
                                <span className="text-[10px] sm:text-xs md:text-sm font-montserrat font-semibold text-gray-500 mt-1.5 uppercase tracking-wider">
                                    {unit.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                            className="px-8 py-3 sm:px-10 sm:py-4 bg-neon-blue text-white rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl hover:bg-secondary-blue transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Explore Event
                        </a>
                        <a
                            href="https://hack2skill.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-neon-blue text-neon-blue rounded-full font-bold text-base sm:text-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
                        >
                            Register Now
                        </a>
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
