import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ColorBends from './ColorBends';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const heroContent = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Text entrance animations
            const tl = gsap.timeline();
            tl.fromTo(titleRef.current,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
            )
                .fromTo(subtitleRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 0.7, duration: 1, ease: "power3.out" },
                    "-=0.8"
                )
                .fromTo(buttonsRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.6"
                );

            // Subtle parallax for content inside the frame on scroll
            gsap.to(heroContent.current, {
                y: -100,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            });

            // Zoom out the frame when scrolling down
            gsap.to(frameRef.current, {
                scale: 0.85,
                borderRadius: "4rem",
                opacity: 0.7,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-start pt-[20px] md:pt-[30px] pb-12 px-4 md:px-8 lg:px-12"
        >
            {/* The Framed Container */}
            <div
                ref={frameRef}
                className="relative w-full h-[90vh] md:h-[95vh] max-h-[1100px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/10 shadow-[0_0_100px_rgba(255,85,0,0.05)] bg-white"
            >
                {/* Background Animation within Frame */}
                <div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply bg-white">
                    <ColorBends
                        colors={["#FF5500", "#FF8800", "#FF3300", "#111111"]}
                        rotation={0}
                        speed={0.15}
                        scale={1.2}
                        frequency={1}
                        warpStrength={1}
                        mouseInfluence={1}
                        parallax={0.5}
                        noise={0.1}
                        transparent
                        autoRotate={0}
                    />
                </div>

                {/* HUD Elements - Top (Play button) */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/5 backdrop-blur-md border border-black/10 flex items-center justify-center hover:bg-black/10 transition-colors">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>

                    <div className="px-3 py-1.5 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 flex items-center gap-2 text-black/80 text-[10px] md:text-xs font-ui uppercase tracking-wider">
                        <span className="w-3 h-3 rounded-full bg-black/10 flex items-center justify-center text-[8px]">O</span>
                        Unlock Your Assets Spark! &rarr;
                    </div>
                </div>

                {/* Left Floating Node Placeholder */}
                <div className="hidden md:flex absolute left-[15%] top-[25%] z-20 items-center justify-center">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center bg-white/50 text-black backdrop-blur-md">
                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black"></div>
                        </div>
                        <div className="absolute top-1/2 left-full w-24 h-[1px] bg-gradient-to-r from-black/20 to-transparent -translate-y-1/2 pointer-events-none"></div>
                        <div className="absolute top-full left-0 mt-2 text-black/70 font-ui text-sm uppercase tracking-widest text-left">
                            <span className="text-black block font-bold mb-1">&bull; Revenue</span>
                            <span className="text-xl font-bold">02</span>
                        </div>
                    </div>
                </div>

                {/* Right Floating Node Placeholder */}
                <div className="hidden md:flex absolute right-[15%] top-[25%] z-20 items-center justify-center">
                    <div className="relative flex flex-col items-end text-right">
                        <div className="absolute top-1/2 right-full w-24 h-[1px] bg-gradient-to-l from-black/20 to-transparent -translate-y-1/2 pointer-events-none"></div>
                        <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center bg-white/50 text-black backdrop-blur-md mb-2">
                            <span className="text-black font-bold text-xs">&rarr;</span>
                        </div>
                        <div className="text-black/70 font-ui text-sm uppercase tracking-widest text-right">
                            <span className="text-black block font-bold mb-1">&bull; Growth</span>
                            <span className="text-xl font-bold">01</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div
                    ref={heroContent}
                    className="absolute inset-0 flex flex-col justify-center items-center z-30 text-black px-4 md:px-0 mt-[8vh]"
                >
                    <h1
                        ref={titleRef as any}
                        className="typeone-font liquid-glass-orange-black text-[15vw] md:text-[13vw] lg:text-[14vw] text-center mb-2 max-w-[90vw] md:max-w-[80vw]"
                    >
                        BRANDIGO
                    </h1>

                    <div className="flex justify-center mt-2 mb-12 h-10 items-center">
                        <p
                            ref={subtitleRef}
                            className="typing-loop text-[4vw] md:text-[1.8vw] lg:text-[1.5vw] font-ui opacity-80 leading-relaxed uppercase font-bold text-black"
                            style={{ "--chars": "44ch" } as React.CSSProperties}
                        >
                            Building the brand, your rules, your revenue
                        </p>
                    </div>

                    <div
                        ref={buttonsRef}
                        className="mt-6 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
                    >
                        <a href="#contact" className="group flex justify-center gap-4 items-center mx-auto shadow-2xl hover:shadow-[0_0_40px_rgba(255,85,0,0.6)] text-2xl md:text-3xl font-extrabold bg-white/50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r before:from-[#FF5500] before:to-[#ff3300] hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-12 py-5 overflow-hidden border-2 border-black/10 hover:border-transparent rounded-full uppercase tracking-widest text-black transition-all">
                            JOIN NOW
                            <svg
                                className="w-10 h-10 md:w-12 md:h-12 justify-end group-hover:rotate-90 group-hover:bg-black text-black group-hover:text-[#FF5500] ease-linear duration-300 rounded-full border-2 border-black/20 group-hover:border-none p-2 rotate-45 transition-colors"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    className="fill-current"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* HUD Elements - Bottom Left */}
                <div className="absolute bottom-[5%] left-[5%] z-20 flex items-center gap-6">
                    <button className="w-12 h-12 md:w-16 md:h-16 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-2 border-white/10">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                    <span className="font-ui text-sm md:text-base text-black/80 tracking-widest uppercase font-bold">
                        02/03 . Scroll down
                    </span>
                </div>

            </div>
        </section>
    );
}
