import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaUserTie, FaChalkboardTeacher, FaBalanceScale, FaMicrophoneAlt } from "react-icons/fa";

const About = () => {
    const { ref, isInView } = useSectionInView();

    const features = [
        { icon: <FaMicrophoneAlt />, text: "Renowned Technical Speakers" },
        { icon: <FaUserTie />, text: "Industry Experts" },
        { icon: <FaChalkboardTeacher />, text: "Experienced Mentors" },
        { icon: <FaBalanceScale />, text: "Jury Members" },
    ];

    return (
        <section id="about" className="relative pt-6 pb-12 md:pt-10 md:pb-20 bg-beige/70 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-neon-blue/5 rounded-full filter blur-3xl -z-10 animate-float" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold mb-4 text-neon-blue">
                        About TechnoTarang
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 font-montserrat leading-relaxed text-justify"
                    >
                        <p>
                            <span className="font-bold text-secondary-blue">TechnoTarang</span> is a <span className="font-semibold text-neon-blue">National Level Hackathon</span> built on the legacy of its successful predecessor  <span className="font-semibold">HIS (Hackathon Innovation Series)</span>  organized by Poornima College of Engineering, Jaipur (Rajasthan).
                        </p>
                        <p>
                            <span className="font-semibold text-accent-blue">HIS 1.0</span> (April 2023) was a 36-hour offline hackathon covering themes like Web 3.0, AI/ML, AR/VR &amp; Cybersecurity, conducted in collaboration with Lightning &amp; HackQuest  won by Team <em>ENCRYPTORS</em> with project <em>"SURAKSHAK"</em>.
                        </p>
                        <p>
                            <span className="font-semibold text-accent-blue">HIS 2.0</span> (March 2024) offered a prize pool of <span className="font-bold">₹1.2 Lakh</span>, with Team <em>ECOHUSTLERS</em> emerging as champions, further cementing the institution's reputation for hosting high-impact innovation events.
                        </p>
                        <p>
                            The upcoming edition  <span className="font-bold text-secondary-blue">TechnoTarang</span>  aims to attract registrations from <span className="font-bold text-accent-blue">100+ colleges nationwide</span>, offering a dynamic platform for creative, technology-driven innovation across 15 thematic tracks.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="glass-card p-5 md:p-8 rounded-2xl relative overflow-hidden group"
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
                            className="glass p-4 md:p-6 rounded-xl border-l-4 border-accent-blue shadow-lg"
                        >
                            <h4 className="text-lg font-bold text-gray-800 mb-4 font-exo uppercase tracking-wide">We Anticipate</h4>
                            <div className="flex justify-between items-center text-center gap-2">
                                <div>
                                    <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-blue">150+</span>
                                    <span className="text-sm text-gray-600 font-medium">Innovative Projects</span>
                                </div>
                                <div className="w-px h-12 bg-gray-300" />
                                <div>
                                    <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-blue">150+</span>
                                    <span className="text-sm text-gray-600 font-medium">Teams</span>
                                </div>
                                <div className="w-px h-12 bg-gray-300" />
                                <div>
                                    <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-blue">600+</span>
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
                    className="mt-8 md:mt-16 text-center max-w-4xl mx-auto"
                >
                    <p className="text-gray-700 mb-4 italic text-justify">
                        Attractive prize opportunities and recognition will motivate teams to push their limits and deliver impactful outcomes. Through this edition, TechnoTarang aims to strengthen collaboration, technical proficiency, and entrepreneurial thinking while creating a vibrant national community of innovators.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
