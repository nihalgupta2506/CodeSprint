import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { useState } from "react";
import {
    FaGlobeAfrica, FaCloudSunRain, FaLeaf, FaSolarPanel,
    FaRecycle, FaShieldAlt, FaDollarSign, FaPlane,
    FaRunning, FaCubes, FaGraduationCap, FaHeartbeat,
    FaBitcoin, FaRocket, FaBus
} from "react-icons/fa";

const themes = [
    {
        icon: <FaGlobeAfrica />,
        title: "Sustainable Development Goals",
        description: "Innovative solutions aligned with the United Nations SDG framework — addressing global challenges through tech-driven, purpose-led development.",
        color: "from-blue-500 to-blue-700",
        bg: "bg-blue-50",
        border: "border-blue-200",
    },
    {
        icon: <FaCloudSunRain />,
        title: "Climate Change & Climate Action",
        description: "Mitigation, adaptation, carbon reduction, and resilience strategies to combat climate change and protect future generations.",
        color: "from-sky-500 to-sky-700",
        bg: "bg-sky-50",
        border: "border-sky-200",
    },
    {
        icon: <FaLeaf />,
        title: "Environment & Sustainable Ecosystems",
        description: "Biodiversity conservation, waste management, and environmental monitoring to preserve and restore our planet's ecosystems.",
        color: "from-green-500 to-green-700",
        bg: "bg-green-50",
        border: "border-green-200",
    },
    {
        icon: <FaSolarPanel />,
        title: "Clean & Green Technologies",
        description: "Renewable energy, green infrastructure, and low-carbon innovations powering a cleaner, sustainable future.",
        color: "from-yellow-500 to-yellow-600",
        bg: "bg-yellow-50",
        border: "border-yellow-200",
    },
    {
        icon: <FaRecycle />,
        title: "Sustainability & Inclusive Development",
        description: "Circular economy models and long-term sustainable growth solutions ensuring no one is left behind.",
        color: "from-teal-500 to-teal-700",
        bg: "bg-teal-50",
        border: "border-teal-200",
    },
    {
        icon: <FaShieldAlt />,
        title: "Cyber Security & Secure Digital Infrastructure",
        description: "Protection of sustainable digital ecosystems and critical systems from evolving cyber threats.",
        color: "from-red-500 to-red-700",
        bg: "bg-red-50",
        border: "border-red-200",
    },
    {
        icon: <FaDollarSign />,
        title: "FinTech & Green Finance",
        description: "Financial technologies promoting sustainable and responsible economic development and green investment.",
        color: "from-emerald-500 to-emerald-700",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
    },
    {
        icon: <FaPlane />,
        title: "Sustainable Tourism & Smart Mobility",
        description: "Eco-tourism, responsible travel, and sustainable transportation systems for a greener travel experience.",
        color: "from-indigo-500 to-indigo-700",
        bg: "bg-indigo-50",
        border: "border-indigo-200",
    },
    {
        icon: <FaRunning />,
        title: "Sports Technology & Energy-Efficient Infrastructure",
        description: "Sustainable innovations in sports and fitness ecosystems, from smart stadiums to energy-aware wearables.",
        color: "from-orange-500 to-orange-700",
        bg: "bg-orange-50",
        border: "border-orange-200",
    },
    {
        icon: <FaCubes />,
        title: "Web 3.0 & Emerging Digital Technologies",
        description: "Decentralized platforms and next-generation internet solutions reshaping the digital landscape.",
        color: "from-violet-500 to-violet-700",
        bg: "bg-violet-50",
        border: "border-violet-200",
    },
    {
        icon: <FaGraduationCap />,
        title: "EdTech & Digital Learning Systems",
        description: "Technology-enabled inclusive and sustainable education models bridging the global knowledge gap.",
        color: "from-cyan-500 to-cyan-700",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
    },
    {
        icon: <FaHeartbeat />,
        title: "Healthcare & Digital Health Innovation",
        description: "Sustainable healthcare delivery and health-tech advancements making quality care accessible for all.",
        color: "from-rose-500 to-rose-700",
        bg: "bg-rose-50",
        border: "border-rose-200",
    },
    {
        icon: <FaBitcoin />,
        title: "Blockchain & Cryptocurrency Applications",
        description: "Secure, transparent, and sustainable decentralized systems unlocking new models of trust and value.",
        color: "from-amber-500 to-amber-700",
        bg: "bg-amber-50",
        border: "border-amber-200",
    },
    {
        icon: <FaRocket />,
        title: "Space Technology & Sustainable Energy Systems",
        description: "Space-tech innovations and next-generation energy solutions inspiring humanity's sustainable future.",
        color: "from-slate-500 to-slate-700",
        bg: "bg-slate-50",
        border: "border-slate-200",
    },
    {
        icon: <FaBus />,
        title: "Transportation & Smart Mobility Systems",
        description: "Efficient, low-emission, and intelligent transport solutions for connected, sustainable communities.",
        color: "from-lime-500 to-lime-700",
        bg: "bg-lime-50",
        border: "border-lime-200",
    },
];

const FlipCard = ({ theme, index, isInView }: { theme: typeof themes[0]; index: number; isInView: boolean }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="h-52"
            style={{ perspective: "1000px" }}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                    transformStyle: "preserve-3d",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Front Face */}
                <div
                    className={`absolute inset-0 ${theme.bg} ${theme.border} border-2 rounded-2xl flex flex-col items-center justify-center p-5 text-center shadow-sm hover:shadow-md transition-shadow`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${theme.color} flex items-center justify-center text-white text-2xl mb-3 shadow-md`}>
                        {theme.icon}
                    </div>
                    <h3 className="text-[12px] md:text-[13px] font-exo font-bold text-gray-800 leading-tight">
                        {theme.title}
                    </h3>
                    <p className="mt-2 text-[10px] text-gray-400 font-montserrat italic">Hover to learn more</p>
                </div>

                {/* Back Face */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${theme.color} rounded-2xl flex flex-col items-center justify-center p-5 text-center shadow-lg`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-3xl text-white/80 mb-3">
                        {theme.icon}
                    </div>
                    <h3 className="text-sm font-exo font-bold text-white mb-2 leading-tight">
                        {theme.title}
                    </h3>
                    <p className="text-[11px] text-white/85 font-montserrat leading-relaxed">
                        {theme.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Themes = () => {
    const { ref, isInView } = useSectionInView();

    return (
        <section id="themes" className="py-12 md:py-20 bg-off-white/70 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-neon-blue mb-3">
                        Hackathon Themes
                    </h2>
                    <p className="text-base md:text-xl text-accent-blue font-montserrat font-medium tracking-wide">
                        15 Thematic Innovation Areas — Hover a card to explore
                    </p>
                    <p className="mt-2 text-sm text-gray-500 font-montserrat max-w-2xl mx-auto">
                        While multiple innovation domains are included to encourage broader participation,{" "}
                        <span className="text-neon-blue font-semibold">environmental sustainability</span>{" "}
                        will remain the central guiding principle of this edition.
                    </p>
                </motion.div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5"
                >
                    {themes.map((theme, index) => (
                        <FlipCard key={index} theme={theme} index={index} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Themes;
