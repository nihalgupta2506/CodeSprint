// React import removed

import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaTrophy, FaMedal } from "react-icons/fa";

const Prizes = () => {
    const { ref, isInView } = useSectionInView();

    const prizes = [
        {
            icon: <FaMedal className="text-4xl text-gray-300" />,
            rank: "2nd Prize",
            amount: "₹30,000",
            color: "border-gray-300",
            shadow: "shadow-gray-300/50",
            delay: 0.2
        },
        {
            icon: <FaTrophy className="text-6xl text-yellow-400" />,
            rank: "1st Prize",
            amount: "₹50,000",
            color: "border-yellow-400",
            shadow: "shadow-yellow-400/50",
            scale: 1.1,
            delay: 0
        },
        {
            icon: <FaMedal className="text-4xl text-orange-400" />,
            rank: "3rd Prize",
            amount: "₹20,000",
            color: "border-orange-400",
            shadow: "shadow-orange-400/50",
            delay: 0.4
        },
    ];

    return (
        <section id="prizes" className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold mb-20 text-white"
                >
                    <span className="text-neon-green">REWARDS</span> PROTOCOL
                </motion.h2>

                <div
                    ref={ref}
                    className="flex flex-col md:flex-row justify-center items-end gap-10 md:gap-6"
                >
                    {prizes.map((prize, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ delay: prize.delay, duration: 0.6 }}
                            className={`relative bg-glass-white backdrop-blur-md rounded-full p-8 flex flex-col items-center justify-center border-2 ${prize.color} ${prize.scale ? "md:-translate-y-10 z-10 w-full md:w-1/3 py-16" : "w-full md:w-1/4 py-10"}`}
                            style={{
                                boxShadow: `0 0 20px -5px ${prize.shadow.replace('shadow-', '').replace('/50', '')}`
                            }}
                        >
                            {/* Glowing Pulse Background */}
                            <div className={`absolute inset-0 rounded-full bg-${prize.rank === "1st Prize" ? "yellow-400" : prize.rank === "2nd Prize" ? "gray-300" : "orange-400"} opacity-5 blur-xl animate-pulse`}></div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="mb-4"
                            >
                                {prize.icon}
                            </motion.div>

                            <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{prize.rank}</h3>
                            <p className="text-xl font-exo text-neon-green font-bold">{prize.amount}</p>

                            {/* Capsule Shine */}
                            <div className="absolute top-4 right-8 w-4 h-4 rounded-full bg-white opacity-20 blur-[2px]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prizes;
