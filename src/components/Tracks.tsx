// React import removed

import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaRobot, FaLeaf, FaBolt, FaDna, FaShieldAlt, FaSpaceShuttle } from "react-icons/fa";

const Tracks = () => {
    const { ref, isInView } = useSectionInView();

    const tracks = [
        { icon: <FaRobot />, title: "AI & ML", desc: "Automating the future intelligence." },
        { icon: <FaLeaf />, title: "Smart Cities", desc: "Sustainable urban ecosystems." },
        { icon: <FaBolt />, title: "Clean Energy", desc: "Powering 2050 with renewables." },
        { icon: <FaDna />, title: "BioTech", desc: "Enhancing human potential." },
        { icon: <FaShieldAlt />, title: "Cyber Defense", desc: "Securing the quantum web." },
        { icon: <FaSpaceShuttle />, title: "Space Tech", desc: "Interplanetary systems." },
    ];

    return (
        <section id="tracks" className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-white"
                >
                    <span className="text-neon-green">SYSTEM MODULES</span> // TRACKS
                </motion.h2>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group bg-dark-bg border border-neon-green/30 p-8 rounded-lg overflow-hidden hover:border-neon-green hover:bg-neon-green/5 transition-all duration-300"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-neon-green/0 via-neon-green/0 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex items-start gap-4">
                                <span className="text-4xl text-cyber-blue group-hover:text-neon-green transition-colors duration-300 drop-shadow-[0_0_5px_rgba(0,194,255,0.8)] group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">
                                    {track.icon}
                                </span>
                                <div>
                                    <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                                        {track.title}
                                    </h3>
                                    <p className="font-exo text-sm text-gray-400 group-hover:text-gray-300">
                                        {track.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-green/50 rounded-tr-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-green/50 rounded-bl-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tracks;
