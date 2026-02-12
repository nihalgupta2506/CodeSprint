import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
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
        <section ref={targetRef} id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-off-white">

            {/* Background Countdown */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex gap-2 md:gap-4 text-neon-blue/[0.07] font-exo font-black"
                    style={{ y: y1 }}
                >
                    <span className="text-[18vw] leading-none tabular-nums">{pad(timeLeft.days)}</span>
                    <span className="text-[18vw] leading-none">:</span>
                    <span className="text-[18vw] leading-none tabular-nums">{pad(timeLeft.hours)}</span>
                    <span className="text-[18vw] leading-none">:</span>
                    <span className="text-[18vw] leading-none tabular-nums">{pad(timeLeft.minutes)}</span>
                </motion.div>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-off-white via-transparent to-blue-50/50 z-0"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                {/* Main Typing Text */}
                <div className="flex justify-center mb-2">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-6xl md:text-8xl font-exo font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-accent-blue tracking-tight animate-typing overflow-hidden whitespace-nowrap border-r-4 border-accent-blue pr-2"
                    >
                        CodeSprint
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 0.8 }}
                >
                    <p className="text-xl md:text-3xl font-montserrat font-semibold text-gray-700 mt-6 mb-6 tracking-wide">
                        "Where Code Builds the <span className="text-accent-blue">Future of Earth</span>"
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex justify-center gap-4 md:gap-6 mb-10">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hours" },
                            { value: timeLeft.minutes, label: "Minutes" },
                            { value: timeLeft.seconds, label: "Seconds" },
                        ].map((unit, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-neon-blue/10 border border-neon-blue/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-2xl md:text-4xl font-exo font-black text-neon-blue tabular-nums">
                                        {pad(unit.value)}
                                    </span>
                                </div>
                                <span className="text-xs md:text-sm font-montserrat font-semibold text-gray-500 mt-2 uppercase tracking-wider">
                                    {unit.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById("about");
                                if (el) {
                                    const top = el.getBoundingClientRect().top + window.scrollY - 120;
                                    window.scrollTo({ top, behavior: "smooth" });
                                }
                            }}
                            className="px-10 py-4 bg-neon-blue text-white rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-secondary-blue transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Explore Event
                        </a>
                        <a
                            href="https://hack2skill.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 border-2 border-neon-blue text-neon-blue rounded-full font-bold text-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
                        >
                            Register Now
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
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
