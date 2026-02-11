// React import removed

import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const Timeline = () => {
    const { ref, isInView } = useSectionInView();

    const events = [
        { date: "Oct 15", title: "Registration Opens", desc: "Join the future protocol." },
        { date: "Nov 01", title: "Idea Submission", desc: "Submit your blueprint." },
        { date: "Nov 10", title: "Prototype Phase", desc: "Build the MVP." },
        { date: "Nov 20", title: "Final Presentation", desc: "Showcase to the board." },
        { date: "Nov 25", title: "Grand Finale", desc: "Awards and closing ceremony." },
    ];

    return (
        <section id="timeline" className="py-20 bg-dark-bg overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-20 text-white"
                >
                    <span className="text-neon-green">DEPLOYMENT</span> SCHEDULE
                </motion.h2>

                <div ref={ref} className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-neon-green/20">
                        <motion.div
                            className="w-full bg-neon-green shadow-[0_0_10px_#00FF88]"
                            initial={{ height: 0 }}
                            animate={isInView ? { height: "100%" } : { height: 0 }}
                            transition={{ duration: 2, ease: "linear" }}
                        />
                    </div>

                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            transition={{ delay: index * 0.3, duration: 0.6 }}
                            className={`flex items-center justify-between mb-16 w-full ${index % 2 === 0 ? "flex-row-reverse" : ""
                                }`}
                        >
                            <div className="w-5/12 hidden md:block" />

                            {/* Center Node */}
                            <div className="relative z-10 w-8 h-8 rounded-full bg-dark-bg border-2 border-neon-green flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.6)]">
                                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                            </div>

                            {/* Content Card */}
                            <div className="w-9/12 md:w-5/12 bg-glass-white/5 backdrop-blur-sm border border-neon-green/20 p-6 rounded-lg hover:border-neon-green/60 transition-colors">
                                <span className="text-cyber-blue font-orbitron text-sm tracking-wider mb-2 block font-bold">
                                    {event.date}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                                    {event.title}
                                </h3>
                                <p className="text-gray-400 font-exo text-sm">
                                    {event.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
