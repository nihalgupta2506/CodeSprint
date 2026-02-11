// React import removed

import { motion, type Variants } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaMicrochip, FaRocket, FaUserSecret } from "react-icons/fa";

const About = () => {
    const { ref, isInView } = useSectionInView();

    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="about" className="relative py-20 bg-dark-bg text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-neon-green/5 radial-gradient(circle at 50% 50%, rgba(0,255,136,0.1) 0%, transparent 50%) pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={variants}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-cyber-blue drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]">
                        MISSION: FUTURE PROTOCOL ACTIVATED
                    </h2>
                    <p className="text-lg md:text-xl font-exo text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        In 2026, we build ideas. By 2050, innovation powers civilization.
                        <span className="text-neon-green font-bold"> CodeSprint 2050</span> invites developers, innovators, and creators to engineer the future using advanced technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <FaMicrochip />, title: "Advanced Tech", desc: "Push the boundaries of AI and Quantum Computing." },
                        { icon: <FaUserSecret />, title: "Cyber Security", desc: "Protect the digital infrastructure of tomorrow." },
                        { icon: <FaRocket />, title: "Space Exploration", desc: "Code for the final frontier and beyond." },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                            className="bg-glass-white backdrop-blur-lg border border-neon-green/20 p-8 rounded-xl hover:border-neon-green hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all duration-300 group"
                        >
                            <div className="text-5xl text-neon-green mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,255,136,0.8)]">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold mb-4 group-hover:text-neon-green transition-colors">
                                {item.title}
                            </h3>
                            <p className="font-exo text-gray-400 group-hover:text-gray-200 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
