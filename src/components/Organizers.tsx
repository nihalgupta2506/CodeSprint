import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaUniversity, FaLayerGroup, FaLightbulb, FaUserTie } from "react-icons/fa";

const Organizers = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="organizers" className="py-20 bg-off-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Organizing Body
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        className="bg-blue-50 border border-blue-100 p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-exo font-bold text-neon-blue mb-6 flex items-center gap-3">
                            <FaUniversity /> Jointly Organized By
                        </h3>
                        <ul className="space-y-4">
                            <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-accent-blue font-montserrat font-semibold text-gray-800">
                                Department of Computer Engineering
                            </li>
                            <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-accent-blue font-montserrat font-semibold text-gray-800">
                                Department of Information Technology
                            </li>
                        </ul>
                        <p className="mt-6 text-gray-600 font-montserrat italic">
                            By Poornima College of Engineering
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white border-2 border-neon-blue/10 p-8 rounded-2xl shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-4 font-exo">This collaborative initiative provides a platform to:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-montserrat text-gray-600">
                                <span className="flex items-center gap-2"><FaLayerGroup className="text-accent-blue" /> Apply technical knowledge</span>
                                <span className="flex items-center gap-2"><FaLightbulb className="text-accent-blue" /> Enhance problem-solving</span>
                                <span className="flex items-center gap-2"><FaUserTie className="text-accent-blue" /> Foster innovation</span>
                                <span className="flex items-center gap-2"><FaLayerGroup className="text-accent-blue" /> Promote teamwork</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-neon-blue text-white p-8 rounded-2xl text-center"
                        >
                            <h4 className="font-bold font-exo text-xl mb-2">Faculty Contribution</h4>
                            <p className="text-blue-100 font-montserrat mb-4">
                                Planning • Mentoring • Evaluation
                            </p>
                            <p className="text-sm text-blue-200 border-t border-blue-400 pt-4 mt-2">
                                The objective is to promote industry-relevant skills and research-driven innovation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizers;
