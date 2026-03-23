import { FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    const contacts = [
        { name: "Mr. Sachin Jain", phone: "+91 78910 27774", role: "Assistant Professor" },
        { name: "Mr. Amit Kumar", phone: "+91 76150 00100", role: "Assistant Professor" },
        { name: "Nayan Mathur", phone: "+91 70412 74329", role: "Student Coordinator" },
    ];

    const socialLinks = [
        { icon: <FaInstagram />, href: "https://www.instagram.com/technotarang.pce/", label: "Instagram" },
        { icon: <FaXTwitter />, href: "https://x.com/PceTarang04", label: "Twitter (X)" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/techno-tarang-pce-62a6013b7/", label: "LinkedIn" },
        { icon: <FaDiscord />, href: "https://discord.gg/93MfSEp2", label: "Discord" },
        { icon: <FaWhatsapp />, href: "https://chat.whatsapp.com/DKhHzgB7gbj8HT1wOHTBW1", label: "WhatsApp" },
    ];

    return (
        <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-10 md:pt-16 pb-4 md:pb-6 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-neon-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-accent-blue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* Top Row: Branding + Social + Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12">

                    {/* Branding */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-exo font-bold text-white mb-1">
                            Techno<span className="text-accent-blue">Tarang</span>
                        </h2>
                        <p className="text-gray-400 text-sm font-medium font-montserrat mb-2 tracking-widest uppercase">Hackathon 3.0</p>
                        <a
                            href="https://maps.app.goo.gl/nY7LxG3mhznkENVv6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-gray-400 font-montserrat text-sm leading-relaxed mb-4 hover:text-white transition-colors"
                        >
                            Poornima College of Engineering, Jaipur (Rajasthan)<br />
                            <span className="font-semibold text-white/90">Dept. of Computer Engineering <br />Dept. of Information Technology <br />Dept. of Advance Computing</span><br />
                            ISI-6, RIICO Institutional Area, Sitapura, Jaipur
                        </a>
                        <div className="flex items-center gap-2 text-accent-blue font-montserrat text-sm font-medium">
                            <FaEnvelope className="text-xs" />
                            <a href="https://mail.google.com/mail/?view=cm&to=technotarang.pce@poornima.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                technotarang.pce@poornima.org
                            </a>
                        </div>
                    </div>

                    {/* Contact Persons */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-exo font-bold text-white mb-4 normal-case tracking-normal">
                            📞 Contact Us
                        </h3>
                        <div className="space-y-3">
                            {contacts.map((contact, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-neon-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue/20 transition-colors">
                                        <FaPhoneAlt className="text-accent-blue text-xs" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold font-montserrat">
                                            {contact.name}
                                            <span className="text-gray-500 font-normal text-xs ml-2">({contact.role})</span>
                                        </p>
                                        <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-gray-400 text-xs font-montserrat hover:text-accent-blue transition-colors">
                                            {contact.phone}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-exo font-bold text-white mb-4 normal-case tracking-normal">
                            🌐 Follow Us
                        </h3>
                        <p className="text-gray-400 font-montserrat text-sm mb-5">
                            Stay connected for updates, announcements, and hackathon news!
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-neon-blue hover:text-white hover:border-neon-blue hover:scale-110 transition-all duration-300 text-lg"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-6 flex items-center justify-center">
                    <p className="text-gray-500 font-montserrat text-xs text-center">
                        © 2026 TechnoTarang. All Rights Reserved. Innovating Today for a Smarter Future.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
