import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const Sponsors = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="sponsors" className="pt-6 pb-12 md:pt-10 md:pb-20 bg-beige/70 relative">
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
                    {[...Array(4)].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="h-32 md:h-40 bg-white border border-neon-blue/20 rounded-xl flex flex-col items-center justify-center p-3 md:p-6 hover:border-neon-blue hover:shadow-lg transition-all duration-300 group cursor-pointer"
                        >
                            <span className="text-gray-300 font-bold mb-2 text-xs md:text-sm">Sponsor Logo</span>
                            <span className="font-montserrat text-neon-blue font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">
                                Coming Soon
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-10 md:mt-14 text-center"
                >
                    <p className="text-gray-500 font-montserrat text-sm mb-5">
                        Interested in being part of TechnoTarang? Reach out to us!
                    </p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=technotarang.pce@poornima.org&su=Sponsorship%20Inquiry%20-%20TechnoTarang%202026&body=Hi%20TechnoTarang%20Team%2C%0A%0AI%20am%20interested%20in%20sponsoring%20TechnoTarang%202026.%20Please%20share%20the%20sponsorship%20details.%0A%0ARegards%2C"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-neon-blue text-white rounded-full font-exo font-bold text-sm md:text-base shadow-lg hover:shadow-neon-blue/30 hover:bg-secondary-blue transition-all duration-300 hover:-translate-y-1"
                    >
                        <span>✉️</span>
                        Join Us as a Sponsor
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
