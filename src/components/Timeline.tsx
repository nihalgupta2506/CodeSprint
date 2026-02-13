import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const Timeline = () => {
    const { ref, isInView } = useSectionInView();

    const events = [
        { date: "15 Feb 2026", title: "Registration Opens", desc: "Global registration begins" },
        { date: "13 Mar 2026", title: "Hackathon Starts", desc: "Opening Ceremony & Hacking Begins" },
        { date: "14 Mar 2026", title: "Hackathon Ends", desc: "Submission, Judging & Closing Ceremony" },
    ];

    return (
        <section id="timeline" className="py-12 md:py-20 bg-beige relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Event Timeline
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div
                    ref={ref}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: "100%" } : { height: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-neon-blue via-accent-blue to-neon-blue"
                    />

                    <div className="space-y-12 md:space-y-24">
                        {events.map((event, index) => {
                            const isLeft = index % 2 === 0;

                            const content = (
                                <div>
                                    <h3 className="text-2xl font-exo font-bold text-neon-blue mb-1">{event.title}</h3>
                                    <p className="text-accent-blue font-montserrat font-semibold mb-2">{event.date}</p>
                                    <p className="text-gray-600 font-montserrat text-sm">{event.desc}</p>
                                </div>
                            );

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }}
                                    transition={{ delay: index * 0.3, duration: 0.6 }}
                                    className="relative flex items-center w-full"
                                >
                                    {/* Left side */}
                                    <div className={`hidden md:block w-5/12 pr-8 ${isLeft ? "text-right" : ""}`}>
                                        {isLeft && content}
                                    </div>

                                    {/* Center dot */}
                                    <div className="absolute left-[4px] md:static md:flex md:justify-center md:w-2/12">
                                        <div className="w-9 h-9 bg-off-white border-4 border-neon-blue rounded-full shadow-md flex items-center justify-center z-10">
                                            <div className="w-2 h-2 bg-accent-blue rounded-full" />
                                        </div>
                                    </div>

                                    {/* Right side */}
                                    <div className={`w-full md:w-5/12 pl-12 md:pl-8 ${!isLeft ? "md:text-left" : ""}`}>
                                        {isLeft ? (
                                            /* Left-side items: show content here only on mobile */
                                            <div className="md:hidden">{content}</div>
                                        ) : (
                                            /* Right-side items: always show content here */
                                            content
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
