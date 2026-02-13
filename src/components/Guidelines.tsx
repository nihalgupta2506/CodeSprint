import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { FaCheckCircle, FaExclamationCircle, FaUserFriends, FaLaptop, FaChalkboardTeacher, FaSignOutAlt, FaWifi, FaBan } from "react-icons/fa";

const Guidelines = () => {
    const { ref, isInView } = useSectionInView();

    const rules = [
        { icon: <FaUserFriends />, text: "Team Size: 2–4 members" },
        { icon: <FaLaptop />, text: "Teams must bring their own laptops and essentials" },
        { icon: <FaChalkboardTeacher />, text: "On-ground mentoring & industry support provided" },
        { icon: <FaBan />, text: "Participants cannot leave venue before completion" },
        { icon: <FaSignOutAlt />, text: "Exit consent letter required for withdrawal" },
        { icon: <FaExclamationCircle />, text: "Organizers not responsible for belongings" },
        { icon: <FaCheckCircle />, text: "Participants responsible for inaccurate information" },
        { icon: <FaWifi />, text: "WiFi/LAN & power supply provided" },
        { icon: <FaExclamationCircle />, text: "Organizers not responsible for technical failures" },
        { icon: <FaBan />, text: "Unauthorized intervention = disqualification" },
        { icon: <FaBan />, text: "Damage caused via platform may lead to action/disqualification" },
    ];

    return (
        <section id="guidelines" className="py-12 md:py-20 bg-beige relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-4">
                        Guidelines of CodeSprint
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div
                    ref={ref}
                    className="max-w-5xl mx-auto bg-white border border-blue-100 rounded-2xl p-5 md:p-12 shadow-lg"
                >
                    <div className="mb-8 p-4 bg-blue-50 border-l-4 border-neon-blue rounded-r-lg">
                        <p className="text-lg text-gray-800 font-bold font-montserrat">Entry Fee: ₹800 per team</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        {rules.map((rule, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                className="flex items-start gap-4 text-gray-700 font-montserrat group"
                            >
                                <span className="mt-1 text-accent-blue text-xl group-hover:text-neon-blue transition-colors">
                                    {rule.icon}
                                </span>
                                <span className="text-base font-medium">{rule.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guidelines;
