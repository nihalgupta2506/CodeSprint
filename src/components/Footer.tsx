import { FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const contacts = [
        { name: "Mr. Amit Kumar", phone: "+91 76150 00100", role: "Assistant Professor" },
        { name: "Mr. Sachin Jain", phone: "+91 78910 27774", role: "Assistant Professor" },
        { name: "Nayan Mathur", phone: "+91 70412 74329", role: "Student Coordinator" },
        { name: "Oman", phone: "+91 89492 80220", role: "Student Coordinator" },
        { name: "Tushar Bang", phone: "+91 95216 05560", role: "Student Coordinator" },
    ];

    const socialLinks = [
        { icon: <FaInstagram />, href: "https://www.instagram.com/codesprint.pce?igsh=MWUxaHJocDR6Y2lwYg==", label: "Instagram" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur/", label: "LinkedIn" },
    ];

    return (
        <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Top Row: Branding + Social + Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

                    {/* Branding */}
                    <div>
                        <h2 className="text-3xl font-exo font-bold text-white mb-2">
                            Code<span className="text-accent-blue">Sprint</span> <span className="text-neon-blue/80 text-xl">2026</span>
                        </h2>
                        <p className="text-gray-400 font-montserrat text-sm leading-relaxed mb-4">
                            Poornima College of Engineering<br />
                            Department of CSE & IT<br />
                            ISI-6, RIICO Institutional Area, Sitapura, Jaipur
                        </p>
                        <div className="flex items-center gap-2 text-accent-blue font-montserrat text-sm font-medium">
                            <FaEnvelope className="text-xs" />
                            <a href="https://mail.google.com/mail/?view=cm&to=codesprint.pce@poornima.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                codesprint.pce@poornima.org
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
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 font-montserrat text-xs text-center md:text-left">
                        © 2026 CodeSprint. All Rights Reserved. Innovating Today for a Smarter Future.
                    </p>
                    <p className="text-gray-600 font-montserrat text-xs">
                        Made by Nihal, Avika, Akshay, Nisha
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
