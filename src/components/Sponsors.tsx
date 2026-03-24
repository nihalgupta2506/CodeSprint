import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import h2sLogo from "../assets/hack2skills logo.png";
import acmLogo from "../assets/acm logo.png";
import xyzLogo from "../assets/xyz_logo.png";
import interviewBuddyLogo from "../assets/InterviewBuddy.png";
import startupNewsLogo from "../assets/startupnewsLogo.jpeg";

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

                <div ref={ref} className="space-y-10 md:space-y-14">

                    {/* Single Row 4-Column Grid for all Sponsors */}
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            
                            {/* Platform Partner */}
                            <motion.a
                                href="https://hack2skill.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-white border-2 border-blue-200 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-neon-blue hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-blue-500">Platform Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={h2sLogo} alt="Hack2Skill" className="max-h-14 md:max-h-27 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-gray-700 text-xs md:text-sm">Hack2Skill</span>
                            </motion.a>

                             {/* Domain Partner - .xyz */}
                            <motion.a
                                href="https://gen.xyz"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-white border-2 border-violet-200 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-violet-500 hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-violet-500">Domain Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={xyzLogo} alt=".xyz Domain" className="max-h-14 md:max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-gray-700 text-xs md:text-sm">.xyz</span>
                            </motion.a>
                            {/* Interview Buddy */}
                            <motion.a
                                href="https://interviewbuddy.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.35, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-white border-2 border-blue-200 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-neon-blue hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-blue-500 text-center px-2">Interview Prep Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={interviewBuddyLogo} alt="Interview Buddy" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-gray-700 text-xs md:text-sm">Interview Buddy</span>
                            </motion.a>
                            {/* Technical Partner */}
                            <motion.a
                                href="https://jaipur.acm.org/#/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-white border-2 border-purple-200 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-purple-500 hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-purple-500">Technical Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={acmLogo} alt="ACM Jaipur Chapter" className="max-h-20 md:max-h-27 scale-110 md:scale-125 w-auto object-contain group-hover:scale-[1.2] md:group-hover:scale-[1.35] transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-gray-700 text-xs md:text-sm">ACM Jaipur Chapter</span>
                            </motion.a>


                            {/* Media Partner */}
                            <motion.a
                                href="https://startupnews.fyi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="h-40 md:h-48 w-full bg-white border-2 border-orange-200 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
                            >
                                <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-orange-500 text-center px-2">Media Partner</span>
                                <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                    <img src={startupNewsLogo} alt="Startup News" className="max-h-12 md:max-h-16 w-auto object-contain px-2 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-exo font-bold text-gray-700 text-xs md:text-sm">Startup News</span>
                            </motion.a>

                             {/* Remaining Sponsor Slots */}
                            {[...Array(3)].map((_, index) => (
                                <motion.div
                                    key={`sponsor-slot-${index}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                    className="h-40 md:h-48 w-full bg-white border border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-between p-4 hover:border-neon-blue hover:shadow-md transition-all duration-300 relative"
                                >
                                    <span className="absolute top-3 text-[10px] md:text-xs font-montserrat font-bold uppercase tracking-widest text-gray-400">Sponsor</span>
                                    <div className="flex-1 flex items-center justify-center mt-6 mb-2 w-full">
                                        <span className="text-gray-300 font-bold text-xs md:text-sm">Sponsor Logo</span>
                                    </div>
                                    <span className="font-montserrat text-neon-blue font-semibold text-xs bg-blue-50 px-3 py-1 rounded-full">
                                        Coming Soon
                                    </span>
                                </motion.div>
                            ))}

                        </div>
                    </div>
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
