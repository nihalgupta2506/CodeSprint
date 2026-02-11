import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-dark-bg">

            {/* Background Grid & Particles */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                {/* Floating Particles - Simulated with divs for performance */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-green rounded-full opacity-50"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Portal Animation */}
            <motion.div
                style={{ y: y2, x: mousePosition.x * -2 }}
                className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 blur-[100px] animate-pulse"
            />

            <motion.div
                className="relative z-10 text-center px-4"
                style={{ y: y1, x: mousePosition.x }}
            >
                {/* Main Glitch Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-8xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-green to-cyber-blue mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                >
                    <span className="inline-block animate-glitch">CODE SPRINT</span> <br />
                    <span className="text-6xl md:text-9xl">2050</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl font-exo text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    <span className="text-neon-green">Engineering Tomorrow.</span> Today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="#about"
                        className="group relative px-8 py-4 bg-neon-green/10 overflow-hidden rounded-none border border-neon-green text-white font-orbitron font-bold tracking-wider hover:bg-neon-green/20 transition-all duration-300"
                    >
                        <span className="absolute inset-0 w-full h-full bg-neon-green/20 transform -translate-x-full skew-x-12 group-hover:animate-[shimmer_2s_infinite]"></span>
                        🚀 ENTER 2050
                    </a>

                    <a
                        href="#mission"
                        className="text-gray-300 font-exo uppercase tracking-widest hover:text-neon-green transition-colors border-b border-transparent hover:border-neon-green pb-1"
                    >
                        📜 View Mission Brief
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-neon-green/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-neon-green rounded-full"></div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
