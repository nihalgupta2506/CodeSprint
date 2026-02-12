import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaRobot, FaLeaf, FaCity, FaCube, FaHeartbeat, FaShieldAlt, FaGraduationCap, FaLightbulb } from "react-icons/fa";

const Themes = () => {
    const { ref, isInView } = useSectionInView();

    const themes = [
        { icon: <FaRobot />, title: "Artificial Intelligence" },
        { icon: <FaLeaf />, title: "Sustainability & Green Technology" },
        { icon: <FaCity />, title: "Smart Cities" },
        { icon: <FaCube />, title: "Web3 & Blockchain" },
        { icon: <FaHeartbeat />, title: "Healthcare Innovation" },
        { icon: <FaShieldAlt />, title: "Cybersecurity" },
        { icon: <FaGraduationCap />, title: "EdTech Innovation" },
        { icon: <FaLightbulb />, title: "Open Innovation (Wild Card)" },
    ];

    return (
        <section id="themes" className="py-20 bg-off-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Hackathon Themes
                    </h2>
                    <p className="text-xl text-accent-blue font-montserrat font-medium tracking-wide">Life in 2050</p>
                </motion.div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {themes.map((theme, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white border-2 border-blue-100 p-8 rounded-xl hover:border-neon-blue hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
                        >
                            <div className="text-5xl text-accent-blue mb-6 group-hover:scale-110 group-hover:text-neon-blue transition-all duration-300">
                                {theme.icon}
                            </div>
                            <h3 className="text-lg font-exo font-bold text-gray-800 group-hover:text-neon-blue transition-colors leading-tight">
                                {theme.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Themes;
