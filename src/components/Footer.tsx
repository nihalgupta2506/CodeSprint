// React import removed

import { FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer" className="bg-dark-bg border-t border-neon-green/20 py-12 relative overflow-hidden">
            {/* Background Matrix Rain (Simulated) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/17/Matrix_code_emulation_04.png')] bg-cover"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-orbitron font-bold text-white mb-2">
                            CODE SPRINT <span className="text-neon-green">2050</span>
                        </h2>
                        <p className="text-gray-400 font-exo text-sm max-w-xs">
                            Poornima College of Engineering<br />
                            Engineering Tomorrow. Today.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-neon-green transition-colors transform hover:scale-110"><FaTwitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-neon-green transition-colors transform hover:scale-110"><FaInstagram size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-neon-green transition-colors transform hover:scale-110"><FaLinkedin size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-neon-green transition-colors transform hover:scale-110"><FaDiscord size={24} /></a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500 font-exo text-xs">
                        &copy; 2026 CodeSprint 2050. All Systems Operational. <br />
                        <span className="text-neon-green">Designed by Antigravity</span>
                    </p>
                </div>
            </div>

            {/* Animated Circuit Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50"></div>
        </footer>
    );
};

export default Footer;
