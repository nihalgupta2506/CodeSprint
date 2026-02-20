import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const Sponsors = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="sponsors" className="py-12 md:py-20 bg-beige/70 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Our Sponsors
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {[...Array(8)].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="aspect-square bg-white border border-neon-blue/20 rounded-xl flex flex-col items-center justify-center p-3 md:p-6 hover:border-neon-blue hover:shadow-lg transition-all duration-300 group cursor-pointer"
                        >
                            <span className="text-gray-300 font-bold mb-2 text-xs md:text-base">Sponsor Logo</span>
                            <span className="font-montserrat text-neon-blue font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">
                                Coming Soon
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
