import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaUserTie, FaChalkboardTeacher, FaBalanceScale, FaMicrophoneAlt } from "react-icons/fa";

const About = () => {
    const { ref, isInView } = useSectionInView();

    const features = [
        { icon: <FaMicrophoneAlt />, text: "Renowned technical speakers" },
        { icon: <FaUserTie />, text: "Industry experts" },
        { icon: <FaChalkboardTeacher />, text: "Experienced mentors" },
        { icon: <FaBalanceScale />, text: "Jury members" },
    ];

    return (
        <section id="about" className="relative py-20 bg-beige overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full filter blur-3xl -z-10 animate-float" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4 text-neon-blue">
                        About CodeSprint
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-6 text-lg text-gray-700 font-montserrat leading-relaxed text-justify"
                    >
                        <p>
                            <span className="font-bold text-secondary-blue">CodeSprint</span> builds upon the remarkable legacy of its previous editions and is envisioned to be an even more impactful <span className="font-semibold text-neon-blue">National Level Hackathon</span> in the technology ecosystem.
                        </p>
                        <p>
                            With participation expected from students across the country, the event aims to attract registrations from <span className="font-bold text-accent-blue">50+ colleges nationwide</span>, fostering a diverse and competitive environment. Leveraging strong digital outreach, CodeSprint is projected to achieve extensive online engagement through professional platforms such as LinkedIn and other social media channels.
                        </p>
                        <p>
                            CodeSprint is designed as a dynamic innovation platform where participants work intensively to develop creative and practical solutions.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-neon-blue" />
                            <h4 className="text-xl font-bold text-neon-blue mb-6 font-exo">The event will be enriched by:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                                        <div className="text-accent-blue text-xl">{feature.icon}</div>
                                        <span className="font-medium text-gray-800">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="glass p-6 rounded-xl border-l-4 border-accent-blue shadow-lg"
                        >
                            <h4 className="text-lg font-bold text-gray-800 mb-4 font-exo uppercase tracking-wide">We Anticipate</h4>
                            <div className="flex justify-between items-center text-center">
                                <div>
                                    <span className="block text-3xl md:text-4xl font-bold text-secondary-blue">100+</span>
                                    <span className="text-sm text-gray-600 font-medium">Innovative Projects</span>
                                </div>
                                <div className="w-px h-12 bg-gray-300" />
                                <div>
                                    <span className="block text-3xl md:text-4xl font-bold text-secondary-blue">125+</span>
                                    <span className="text-sm text-gray-600 font-medium">Teams</span>
                                </div>
                                <div className="w-px h-12 bg-gray-300" />
                                <div>
                                    <span className="block text-3xl md:text-4xl font-bold text-secondary-blue">550</span>
                                    <span className="text-sm text-gray-600 font-medium">Students</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-16 text-center max-w-4xl mx-auto"
                >
                    <p className="text-gray-700 mb-8 italic">
                        Attractive prize opportunities and recognition will motivate teams to push their limits and deliver impactful outcomes. Through this edition, CodeSprint aims to strengthen collaboration, technical proficiency, and entrepreneurial thinking while creating a vibrant national community of innovators.
                    </p>

                    <div className="inline-block bg-blue-50 px-8 py-4 rounded-full border border-blue-100">
                        <p className="font-exo font-bold text-neon-blue text-sm uppercase tracking-wide mb-2">Jointly Organized By</p>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-8 font-semibold text-gray-800">
                            <span>Department of Computer Engineering</span>
                            <span className="hidden md:block text-accent-blue">•</span>
                            <span>Department of Information Technology</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
