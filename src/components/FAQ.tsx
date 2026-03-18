import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const FAQ = () => {
    const { ref, isInView } = useSectionInView();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is TechnoTarang Hackathon?",
            answer: "TechnoTarang is a 24-hour national-level hackathon organized by Poornima College of Engineering, Jaipur (Rajasthan). Participants form teams to build innovative solutions around the theme \"Innovating Today for a Smarter & Sustainable 2050.\"",
        },
        {
            question: "Who can participate in TechnoTarang?",
            answer: "Any undergraduate or postgraduate student from any recognized college or university can participate. Teams of 2–4 members are allowed, and cross-college teams are welcome.",
        },
        {
            question: "Is there any registration fee?",
            answer: "Yes, the registration fee is ₹800 per team. Visit our official registration page for more details and to complete your registration.",
        },
        {
            question: "What are the themes for the hackathon?",
            answer: "The hackathon features 15 thematic innovation areas: Web 3.0, EdTech, FinTech, Space & Energy, Bitcoin, Heritage, Healthcare, Ecosystems, Cybersecurity, Transportation, Clean & Green, Robotics & Drones, Sports, Tourism, and Sustainability & Development. Teams can choose any track they are passionate about.",
        },
        {
            question: "What should I bring to the hackathon?",
            answer: "Bring your laptop, charger, student ID, and any hardware you plan to use. We'll provide Wi-Fi and power outlets throughout the event.",
        },
        {
            question: "Will food and accommodation be provided?",
            answer: "Yes! One-time food will be provided to all participants during the event. A dedicated space will also be available for teams to relax and recharge throughout the hackathon.",
        },
        {
            question: "How will projects be judged?",
            answer: "Projects will be evaluated on Innovation, Technical Complexity, Impact & Feasibility, UI/UX Design, and Presentation Quality by a panel of industry experts and academic professionals.",
        },
        {
            question: "Can I participate remotely?",
            answer: "TechnoTarang is primarily an in-person event held at Poornima College of Engineering, Jaipur. However, check with the organizing team for any hybrid participation options.",
        },
    ];

    return (
        <section id="faq" className="pt-6 pb-12 md:pt-10 md:pb-20 bg-beige/70 relative">
            <div className="container mx-auto px-6">
                <div ref={ref} className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full mb-4" />
                        <p className="text-gray-600 max-w-2xl mx-auto font-montserrat">
                            Got questions? We've got answers! Here are some common queries about TechnoTarang.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="bg-white/80 rounded-xl border border-neon-blue/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                                >
                                    <span className="font-exo font-bold text-gray-800 text-base md:text-lg pr-4 normal-case tracking-normal group-hover:text-neon-blue transition-colors">
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-neon-blue flex-shrink-0"
                                    >
                                        <FaChevronDown />
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-gray-600 font-montserrat text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4 text-justify">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
