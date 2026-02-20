import { motion } from "framer-motion";

const Overview = () => {
    return (
        <section id="overview" className="py-12 md:py-20 bg-beige/70">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-center text-neon-blue mb-8 md:mb-12">
                        Overview
                    </h2>

                    <div className="glass-card p-5 md:p-12 rounded-2xl">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-montserrat text-justify">
                            <span className="font-bold text-secondary-blue">CodeSprint</span>, a premier National Level Hackathon, is organized by the Departments of Computer Engineering, Information Technology and Advance Computing, in association with PIIC, with the support of the Students’ Council of PCE.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-montserrat text-justify">
                            This 24-hour intensive programming challenge allows participants to demonstrate problem-solving skills under pressure.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div>
                                <h3 className="text-xl font-bold text-neon-blue mb-4">The hackathon includes:</h3>
                                <ul className="space-y-2">
                                    {["Expert-led sessions", "Mentorship support", "Real-world problem statements"].map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neon-blue mb-4">Objectives:</h3>
                                <ul className="space-y-2">
                                    {["Foster innovation & creativity", "Develop entrepreneurial mindset", "Promote teamwork", "Encourage sustainable solution building"].map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed font-montserrat italic border-l-4 border-accent-blue pl-4 py-2 bg-blue-50/50">
                            Participants will select problem statements at the beginning, setting the stage for structured analysis and development.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Overview;
