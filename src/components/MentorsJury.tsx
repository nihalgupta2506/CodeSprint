import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaUserTie, FaGavel, FaQuestionCircle } from "react-icons/fa";

const MentorsJury = () => {
    const { ref, isInView } = useSectionInView();

    const mentorCount = 10;
    const juryCount = 10;

    const RevealCard = ({ index, icon }: { index: number; icon: React.ReactNode }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-white border border-blue-100 rounded-xl p-4 md:p-5 hover:border-neon-blue/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center"
        >
            {/* Avatar Placeholder */}
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400 font-exo font-bold text-lg md:text-xl shadow-md group-hover:from-neon-blue group-hover:to-accent-blue group-hover:text-white transition-all">
                <FaQuestionCircle className="text-xl md:text-2xl" />
            </div>
            <h4 className="font-exo font-bold text-sm md:text-base text-neon-blue mb-1 normal-case tracking-normal animate-pulse">
                Revealing Soon
            </h4>
            <div className="flex items-center justify-center gap-1 text-gray-400">
                <span className="text-accent-blue text-xs">{icon}</span>
                <span className="font-montserrat text-xs">Stay Tuned!</span>
            </div>
        </motion.div>
    );

    return (
        <section id="mentors-jury" className="py-12 md:py-20 bg-off-white/70 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Mentors & Jury
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full mb-4" />
                    <p className="text-gray-600 font-montserrat max-w-2xl mx-auto">
                        Industry experts guiding and evaluating innovative solutions
                    </p>
                </motion.div>

                <div ref={ref} className="max-w-6xl mx-auto space-y-12">
                    {/* Mentors */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-exo font-bold text-accent-blue mb-6 text-center normal-case tracking-normal">
                            🎓 Mentors
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                            {Array.from({ length: mentorCount }).map((_, index) => (
                                <RevealCard key={index} index={index} icon={<FaUserTie />} />
                            ))}
                        </div>
                    </div>

                    {/* Jury Members */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-exo font-bold text-accent-blue mb-6 text-center normal-case tracking-normal">
                            ⚖️ Jury Members
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                            {Array.from({ length: juryCount }).map((_, index) => (
                                <RevealCard key={index} index={index + 10} icon={<FaGavel />} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorsJury;
