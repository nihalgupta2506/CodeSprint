import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaTrophy, FaGift, FaCertificate } from "react-icons/fa";

const Prizes = () => {
    const { ref, isInView } = useSectionInView();

    const rewards = [
        { icon: <FaTrophy />, title: "Cash Prizes", desc: "Attractive cash rewards for top performing teams" },
        { icon: <FaGift />, title: "Goodies & Swag Kits", desc: "Exciting goodies and swag kits for top performers" },
        { icon: <FaCertificate />, title: "Participation Certificates", desc: "Official certificates for all participating teams" },
    ];

    return (
        <section id="prizes" className="py-12 md:py-24 bg-off-white/70 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-neon-blue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-accent-blue/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <div className="inline-block p-4 rounded-full bg-neon-blue/10 mb-6 border border-neon-blue/20">
                        <FaTrophy className="text-4xl text-neon-blue" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Prizes & Rewards
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full mb-6" />

                    {/* Prize Pool Amount */}
                    <motion.div
                        ref={ref}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        className="inline-block bg-gradient-to-r from-neon-blue to-accent-blue rounded-2xl px-6 py-4 md:px-10 md:py-6 shadow-xl"
                    >
                        <p className="text-blue-100 font-montserrat text-sm uppercase tracking-widest mb-1 font-semibold">Total Prize Pool Worth</p>
                        <span className="text-4xl sm:text-5xl md:text-7xl font-black font-exo text-white tracking-tight drop-shadow-lg">
                            ₹5,00,000
                        </span>
                    </motion.div>

                    <p className="mt-4 text-gray-600 font-montserrat text-base md:text-lg max-w-2xl mx-auto text-justify">
                        Compete for exciting prizes, goodies, and industry recognition. Every participant goes home with something special!
                    </p>
                </motion.div>

                {/* Rewards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {rewards.map((reward, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            className="bg-white border border-neon-blue/15 rounded-xl p-6 hover:border-neon-blue/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue group-hover:text-white transition-all duration-300">
                                    <span className="text-xl text-neon-blue group-hover:text-white transition-colors duration-300">
                                        {reward.icon}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-exo font-bold text-gray-800 mb-1 group-hover:text-neon-blue transition-colors">
                                        {reward.title}
                                    </h3>
                                    <p className="text-gray-500 font-montserrat text-sm leading-relaxed">
                                        {reward.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Prizes;
