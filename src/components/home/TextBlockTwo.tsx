import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function TextBlockTwo() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;
        const line = container.current.querySelector('.impactful-line');
        const cards = container.current.querySelectorAll('.team-card');

        gsap.fromTo(
            line,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: line,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    toggleActions: 'play none none reverse'
                },
            }
        );

        gsap.fromTo(
            cards,
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: line,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse'
                },
            }
        );
    }, { scope: container });

    const teamMembers = [
        { name: "First Name", title: "Brand Strategist", img: "https://cdn.sanity.io/images/leima53t/production/0bffa1ef6d6d8ea96cdf53bba078cb81bb20ab48-2000x1491.png" },
        { name: "Second Name", title: "Creative Director", img: "https://cdn.sanity.io/images/leima53t/production/0bffa1ef6d6d8ea96cdf53bba078cb81bb20ab48-2000x1491.png" },
        { name: "Third Name", title: "Digital Architect", img: "https://cdn.sanity.io/images/leima53t/production/0bffa1ef6d6d8ea96cdf53bba078cb81bb20ab48-2000x1491.png" },
        { name: "Fourth Name", title: "Growth Engineer", img: "https://cdn.sanity.io/images/leima53t/production/0bffa1ef6d6d8ea96cdf53bba078cb81bb20ab48-2000x1491.png" },
        { name: "Fifth Name", title: "Content Lead", img: "https://cdn.sanity.io/images/leima53t/production/0bffa1ef6d6d8ea96cdf53bba078cb81bb20ab48-2000x1491.png" }
    ];

    return (
        <section ref={container} className="section--padding flex flex-col w-full px-0 text-black bg-white pt-20 overflow-hidden">
            <div className="w-full text-center mb-24 px-[var(--home-padding)]">
                <h3 className="ui text-2xl md:text-3xl tracking-[0.2em] opacity-80 font-bold mb-8 uppercase text-[#FF5500]">Our Team</h3>
                <h2 className="impactful-line heading text-[10vw] md:text-[8vw] lg:text-[7vw] uppercase tracking-wide leading-[1.1] mx-auto px-4">
                    <span className="block whitespace-nowrap">The Minds Behind</span>
                    <span className="block">Success</span>
                </h2>
            </div>

            <div className="w-full relative px-[var(--home-padding)]">
                <div
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style>{`
                      div::-webkit-scrollbar { display: none; }
                    `}</style>
                    {teamMembers.map((member, i) => (
                        <div key={i} className="team-card min-w-[300px] md:min-w-[350px] aspect-[4/5] snap-center bg-black/5 border border-black/10 rounded-md overflow-hidden relative group shrink-0 backdrop-blur-xl transition-colors hover:bg-black/10">
                            <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent pointer-events-none opacity-80" />

                            <div className="absolute top-6 left-6 font-ui text-[10px] tracking-widest text-black/50 uppercase">
                                DEPT. 0{i + 1}
                            </div>

                            <div className="absolute bottom-6 left-6 w-[calc(100%-3rem)] flex flex-col items-start justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                                <h4 className="heading text-2xl uppercase tracking-widest text-black mb-1 leading-tight">{member.name}</h4>
                                <p className="font-ui text-xs tracking-widest text-black/60 uppercase mb-6">{member.title}</p>

                                <div className="w-10 h-10 rounded-full border border-black/30 flex items-center justify-center bg-black/10 backdrop-blur-md transition-all group-hover:bg-black/30 group-hover:-rotate-45 duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Spacer for right edge overflow to allow last card to center perfectly */}
                    <div className="min-w-[5vw] shrink-0 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
