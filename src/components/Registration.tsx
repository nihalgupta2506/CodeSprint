// React import removed

import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const Registration = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="register" className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-white"
                >
                    <span className="text-neon-green">JOIN THE</span> NETWORK
                </motion.h2>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto bg-glass-white backdrop-blur-xl border border-neon-green/30 p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(0,255,136,0.1)] relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-green rounded-tl-2xl opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-green rounded-br-2xl opacity-50"></div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-exo text-cyber-blue uppercase tracking-wider">Codename / Name</label>
                                <input type="text" className="w-full bg-dark-bg/50 border border-gray-700 rounded p-3 text-white focus:border-neon-green focus:outline-none transition-colors" placeholder="Enter your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-exo text-cyber-blue uppercase tracking-wider">Email Protocol</label>
                                <input type="email" className="w-full bg-dark-bg/50 border border-gray-700 rounded p-3 text-white focus:border-neon-green focus:outline-none transition-colors" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-exo text-cyber-blue uppercase tracking-wider">Base Station / College</label>
                            <input type="text" className="w-full bg-dark-bg/50 border border-gray-700 rounded p-3 text-white focus:border-neon-green focus:outline-none transition-colors" placeholder="University Name" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-exo text-cyber-blue uppercase tracking-wider">Squad ID / Team Name</label>
                                <input type="text" className="w-full bg-dark-bg/50 border border-gray-700 rounded p-3 text-white focus:border-neon-green focus:outline-none transition-colors" placeholder="Team Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-exo text-cyber-blue uppercase tracking-wider">Mission Track</label>
                                <select className="w-full bg-dark-bg/50 border border-gray-700 rounded p-3 text-white focus:border-neon-green focus:outline-none transition-colors">
                                    <option>Select Track...</option>
                                    <option>AI & ML</option>
                                    <option>Smart Cities</option>
                                    <option>Clean Energy</option>
                                    <option>BioTech</option>
                                    <option>Cyber Defense</option>
                                    <option>Space Tech</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full py-4 mt-8 bg-neon-green/10 border border-neon-green text-neon-green font-orbitron font-bold text-xl rounded hover:bg-neon-green hover:text-dark-bg transition-all duration-300 shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)]"
                        >
                            DEPLOY INNOVATION
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Registration;
