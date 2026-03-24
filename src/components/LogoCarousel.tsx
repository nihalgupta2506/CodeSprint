import { useEffect, useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import h2sLogo from "../assets/hack2skills logo.png";
import acmLogo from "../assets/acm logo.png";
import xyzLogo from "../assets/xyz_logo.png";
import interviewBuddyLogo from "../assets/InterviewBuddy2.png";

// ─── Prize items ──────────────────────────────────────────────────────────────
const PRIZE_ITEMS = [
    { label: "Prize Pool Worth", value: "₹5,00,000", icon: <FaTrophy /> },
    // { label: "1st Place",        value: "₹2,00,000", icon: <FaMedal />  },
    // { label: "2nd Place",        value: "₹1,00,000", icon: <FaMedal />  },
    // { label: "3rd Place",        value: "₹50,000",   icon: <FaMedal />  },
    // { label: "Best Rookie",      value: "₹25,000",   icon: <FaMedal />  },
];

// ─── Sponsor placeholder slots ────────────────────────────────────────────────
const SPONSOR_SLOTS = [
    { name: "Platform Partner", tier: "PARTNER", partnerName: "Hack2Skill", logo: h2sLogo, href: "https://hack2skill.com" },
    { name: "Domain Partner", tier: "DOMAIN", partnerName: ".xyz", logo: xyzLogo, href: "https://gen.xyz" },
    { name: "Interview Prep Partner", tier: "PARTNER", partnerName: "Interview Buddy", logo: interviewBuddyLogo, href: "https://interviewbuddy.net/" },
    { name: "Technical Partner", tier: "TECHPARTNER", partnerName: "ACM", logo: acmLogo, href: "https://jaipur.acm.org/#/" },
    { name: "Powered By", tier: "TITLE" },
    { name: "Co-Powered By", tier: "COPOWERED" },
    { name: "Gold Sponsor", tier: "GOLD" },
    { name: "Silver Sponsor", tier: "SILVER" },
];

const tierStyle: Record<string, string> = {
    TITLE: "border-yellow-400/70 text-yellow-600 bg-yellow-50",
    COPOWERED: "border-orange-400/70 text-orange-600 bg-orange-50",
    GOLD: "border-amber-400/70  text-amber-600  bg-amber-50",
    SILVER: "border-gray-400/70   text-gray-500   bg-gray-100",
    PARTNER: "border-blue-400/70   text-blue-600   bg-blue-50",
    TECHPARTNER: "border-purple-400/70 text-purple-600 bg-purple-50",
    DOMAIN: "border-violet-400/70 text-violet-600 bg-violet-50",
};

// ─── Small helpers ────────────────────────────────────────────────────────────
const Dot = () => (
    <span className="mx-3 md:mx-5 text-neon-blue/25 text-xs select-none">●</span>
);

const PrizePill = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <span className="text-neon-blue text-[11px]">{icon}</span>
        <span className="font-montserrat text-[10px] md:text-[11px] text-gray-400 uppercase tracking-wide">{label}:</span>
        <span className="font-exo font-black text-[12px] md:text-[13px] text-neon-blue">{value}</span>
    </span>
);

const SponsorChip = ({ name, tier, partnerName, logo }: { name: string; tier: string; partnerName?: string; logo?: string }) => (
    <span
        className={`inline-flex items-center gap-1.5 whitespace-nowrap border rounded-full px-2.5 py-0.5 text-[10px] md:text-[11px] font-montserrat font-bold uppercase tracking-wide ${tierStyle[tier] ?? ""}`}
    >
        <span className="w-3.5 h-3.5 rounded-full border border-current/40 flex items-center justify-center text-[7px] font-black opacity-70 flex-shrink-0">
            {tier[0]}
        </span>
        {name}
        {logo ? (
            <img
                src={logo}
                alt={partnerName}
                className={`w-auto object-contain ml-1 opacity-95 ${
                    partnerName === "ACM"
                        ? "h-6 md:h-8 max-w-[56px]"
                        : "h-4 md:h-5 max-w-[60px]"
                }`}
            />
        ) : (
            <span className={`ml-0.5 text-[8px] tracking-normal ${partnerName ? "font-bold text-current uppercase opacity-90" : "opacity-40 normal-case font-normal"}`}>
                {partnerName || "TBD"}
            </span>
        )}
    </span>
);

// ─── One content strip (duplicated for seamless loop) ─────────────────────────
const Strip = () => (
    <div className="flex items-center gap-0 pr-0">
        {PRIZE_ITEMS.map((p, i) => (
            <span key={`p-${i}`} className="flex items-center">
                <PrizePill {...p} />
                <Dot />
            </span>
        ))}

        {/* Sponsor label */}
        <span className="font-montserrat text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest whitespace-nowrap mr-3">
            Sponsors
        </span>
        {SPONSOR_SLOTS.map((slot, index) => (
            <div key={`sponsor-1-${index}`} className="flex items-center">
                {slot.href ? (
                    <a href={slot.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <SponsorChip {...slot} />
                    </a>
                ) : (
                    <SponsorChip {...slot} />
                )}
                <Dot />
            </div>
        ))}
    </div>
);

// ─── Main Carousel ────────────────────────────────────────────────────────────
/**
 * Rendered as a FIXED bar sitting directly below the fixed Navbar.
 * Navbar heights: mobile ≈ 105 px, desktop ≈ 120 px.
 * `top` is set to match those values via the inline style.
 */
const LogoCarousel = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);
    const posRef = useRef<number>(0);
    const paused = useRef(false);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const speed = 1.2; // px per frame

        const tick = () => {
            if (!paused.current) {
                posRef.current += speed;
                const half = el.scrollWidth / 2;
                if (posRef.current >= half) posRef.current -= half;
                el.style.transform = `translateX(-${posRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        const container = el.parentElement!;
        const pauseFn = () => { paused.current = true; };
        const resumeFn = () => { paused.current = false; };
        container.addEventListener("mouseenter", pauseFn);
        container.addEventListener("mouseleave", resumeFn);

        return () => {
            cancelAnimationFrame(rafRef.current);
            container.removeEventListener("mouseenter", pauseFn);
            container.removeEventListener("mouseleave", resumeFn);
        };
    }, []);

    return (
        <div
            className="relative left-0 w-full overflow-hidden bg-white border-b border-neon-blue/10 shadow-sm"
            style={{
                height: "42px",
            }}
            aria-label="Prize pool and sponsors ticker"
        >
            {/* left fade */}
            <div className="absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

            <div
                ref={trackRef}
                className="flex items-center will-change-transform h-full"
                style={{ whiteSpace: "nowrap" }}
            >
                <Strip />
                <Strip />
            </div>

            {/* right fade */}
            <div className="absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default LogoCarousel;
