import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

// Renders "17th Mar 2026" => 17<sup>th</sup> Mar 2026
const FormatDate = ({ date }: { date: string }) => {
    const match = date.match(/^(\d+)(st|nd|rd|th)(.*)$/);
    if (!match) return <>{date}</>;
    return <>{match[1]}<sup className="text-[0.6em] leading-none" style={{ marginLeft: 0 }}>{match[2]}</sup>{match[3]}</>;
};

type ScheduleItem = { time: string; activity: string };

type TimelineEvent = {
    date: string;
    title: string;
    desc: string;
    schedule?: ScheduleItem[];
};

const Timeline = () => {
    const { ref, isInView } = useSectionInView();

    const events: TimelineEvent[] = [
        { date: "17th Mar 2026", title: "Registration Opens", desc: "Global registration begins on the official platform" },
        { date: "10th Apr 2026", title: "Registration Closes", desc: "Last date to register your team" },
        {
            date: "18th Apr 2026",
            title: "Day 1 – Hackathon Begins",
            desc: "Opening Ceremony, Inauguration & Hacking Starts",
            schedule: [
                { time: "07:30AM – 09:00AM", activity: "Registration" },
                { time: "07:30AM – 09:00AM", activity: "Breakfast (Complimentary – Provided By Organizers)" },
                { time: "09:00AM – 10:00AM", activity: "Inaugural Ceremony (Unveiling of Problem Statements)" },
                { time: "10:00AM – 11:00AM", activity: "Hackathon Begin: Problem Statement (Selected By Participants)" },
                { time: "11:00AM – 01:00PM", activity: "Session 1: Coding Begins" },
                { time: "01:00PM – 02:00PM", activity: "Lunch Break (Self ; Food Available At Campus Canteen/Mess Coupon)" },
                { time: "02:00PM – 04:00PM", activity: "Session 2: Coding Resumes (Mentoring Session)" },
                { time: "04:00PM – 06:00PM", activity: "Assessment Round 1" },
                { time: "06:00PM – 08:00PM", activity: "Session 3: Coding Resumes" },
                { time: "08:00PM – 10:00PM", activity: "Dinner Break (Complimentary – Provided By Organizers)" },
                { time: "10:00PM – 12:00AM", activity: "Coding Resume || Silent DJ" },
            ],
        },
        {
            date: "19th Apr 2026",
            title: "Day 2 – Finale & Closing",
            desc: "Final Pitches, Judging & Award Ceremony",
            schedule: [
                { time: "12:00AM – 02:00AM", activity: "Coding Resumes || Recreational activities" },
                { time: "02:00AM – 05:00AM", activity: "Coding Resumes || Quiz and Open Mic" },
                { time: "05:00AM – 06:00AM", activity: "Zumba and Yoga" },
                { time: "06:00AM – 07:00AM", activity: "Session 4: Coding Resumes" },
                { time: "07:00AM – 08:30AM", activity: "Breakfast (Complimentary – Provided By Organizers)" },
                { time: "08:30AM – 10:30AM", activity: "Assessment Round 2" },
                { time: "10:30AM – 12:30PM", activity: "Power Judging Round (Top 10 Teams): 6 min (4 Mins Pitch + 2 Mins Q&A)" },
                { time: "12:30PM – 01:30PM", activity: "Valedictory & Prize Distribution" },
            ],
        },
    ];

    return (
        <section id="timeline" className="pt-6 pb-12 md:pt-10 md:pb-20 bg-beige/70 relative overflow-hidden">
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
                                <div className="w-full">
                                    <h3 className="text-3xl font-exo font-bold text-neon-blue mb-2">{event.title}</h3>
                                    <p className="text-accent-blue font-montserrat font-semibold text-base md:text-lg mb-3"><FormatDate date={event.date} /></p>
                                    <p className="text-gray-600 font-montserrat text-base md:text-lg text-justify mb-4">{event.desc}</p>
                                    {event.schedule && (
                                        <div className="mt-4 w-full text-left">
                                            {event.schedule.map((item, i) => (
                                                <div key={i} className="flex justify-between items-center gap-4 py-2 border-b border-neon-blue/10 last:border-0 font-montserrat">
                                                    <span className="shrink-0 bg-neon-blue/10 text-neon-blue font-bold px-2 py-1 rounded text-[11px] md:text-sm whitespace-nowrap">
                                                        {item.time}
                                                    </span>
                                                    <span className="text-gray-700 text-sm md:text-base font-medium text-right leading-tight break-words">{item.activity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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
