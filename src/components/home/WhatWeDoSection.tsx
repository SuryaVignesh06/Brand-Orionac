import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollInnerRef = useRef<HTMLDivElement>(null);
    const focusLineRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const stages = [
        {
            title: "THE STRUGGLE",
            description: "You have a vision, but your brand is lost in the noise. You are fighting for attention, relying on outdated strategies, and growth has plateaued. You know your value, but the market doesn't perceive it yet."
        },
        {
            title: "THE DISCOVERY",
            description: "You realize that a generic visual identity isn't enough. You discover BRANDIGO. We don't just design logos; we architect brand systems engineered for authority and market dominance. A true strategy starts to form."
        },
        {
            title: "THE ALIGNMENT",
            description: "We align your business goals with a ruthless digital presence. Your website transforms from a digital brochure into a high-converting machine. Your marketing, sales, and brand positioning finally pull in the same direction."
        },
        {
            title: "THE REVENUE",
            description: "Your brand is no longer just a name; it's a feeling. Your new authority turns heads, commands premium pricing, and drives explosive revenue growth. You don't just compete—you set the rules."
        }
    ];

    useGSAP(() => {
        if (!containerRef.current || !scrollInnerRef.current) return;

        const ticks = gsap.utils.toArray('.tick-mark') as HTMLElement[];
        const stagesElements = gsap.utils.toArray('.story-stage') as HTMLElement[];

        // Fixed focus point (center of viewport)
        const focusY = window.innerHeight * 0.5;
        const proximityThresholdTicks = 150;

        // Meter update logic based on elements' distance from the FIXED center line
        const updateMeterOnScroll = () => {
            ticks.forEach((tick, i) => {
                const rect = tick.getBoundingClientRect();
                const tickCenterY = rect.top + rect.height / 2;
                const distance = Math.abs(tickCenterY - focusY);

                if (distance < proximityThresholdTicks) {
                    const intensity = Math.sin((1 - (distance / proximityThresholdTicks)) * (Math.PI / 2));
                    const baseScale = i % 10 === 0 ? 1.5 : 1;
                    const scale = baseScale + (intensity * 4);

                    gsap.set(tick, {
                        scaleX: scale,
                        backgroundColor: `rgba(255, 85, 0, ${0.15 + intensity * 0.85})`,
                        boxShadow: intensity > 0.4 ? `0 0 ${15 * intensity}px rgba(255, 85, 0, ${intensity})` : 'none'
                    });
                } else {
                    gsap.set(tick, {
                        scaleX: i % 10 === 0 ? 1.5 : 1,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        boxShadow: "none"
                    });
                }
            });

            // Handle stage activation text
            stagesElements.forEach((stage) => {
                const rect = stage.getBoundingClientRect();
                const stageCenter = rect.top + rect.height / 2;
                const distance = Math.abs(stageCenter - focusY);

                // If it's the closest one or within a tight range
                if (distance < 200) {
                    stage.classList.add('is-active');
                } else {
                    stage.classList.remove('is-active');
                }
            });
        };

        // Main Pinning and Scrubbing ScrollTrigger
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: `+=${stages.length * 100}%`, // Length of the interaction
            pin: true,
            scrub: 1.5, // Even smoother "luxury" lag
            onUpdate: (self) => {
                const progress = self.progress;

                // Calculate the max scrollable distance for the inner content

                // Move the content layer so the stages pass under the center line
                // We use a helper y position to ensure it's centered
                // We want progress 0 to be first stage center at line
                // progress 1 to be last stage center at line

                const firstStage = stagesElements[0];
                const lastStage = stagesElements[stagesElements.length - 1];

                if (firstStage && lastStage) {
                    const firstCenter = firstStage.offsetTop + firstStage.offsetHeight / 2;
                    const lastCenter = lastStage.offsetTop + lastStage.offsetHeight / 2;
                    const moveRange = lastCenter - firstCenter;

                    const targetY = -(firstCenter - focusY + progress * moveRange);

                    gsap.set(scrollInnerRef.current, {
                        y: targetY
                    });
                }

                // Trigger the meter and text updates
                updateMeterOnScroll();
            }
        });

        // Initialize state
        updateMeterOnScroll();

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="what-we-do" className="w-full h-screen bg-[#070707] text-white relative border-y border-white/10 dark-section overflow-hidden">

            {/* FIXED OVERLAY LAYER - This does NOT move. It's the "Needle" */}
            <div className="absolute inset-0 pointer-events-none z-50">
                {/* Horizontal Orange Line (Fixed at Center) */}
                <div ref={focusLineRef} className="absolute top-1/2 left-0 w-full h-[1px] bg-[#FF5500] shadow-[0_0_15px_rgba(255,85,0,0.5)] -translate-y-1/2"></div>

                {/* Arrow (Fixed at Center) */}
                <div ref={arrowRef} className="absolute top-1/2 left-0 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#FF5500] -translate-y-1/2 drop-shadow-[0_0_8px_rgba(255,85,0,0.8)]"></div>

                {/* Section Title (Fixed at Center) */}
                <div ref={titleRef} className="absolute top-1/2 left-[40px] md:left-[80px] -translate-y-[200%] pointer-events-auto">
                    <h2 className="typeone-font text-xl md:text-3xl tracking-[0.4em] text-[#FF5500] uppercase font-bold whitespace-nowrap">What We Do</h2>
                </div>

                {/* Let's Talk Button (Fixed at Center) */}
                <div className="absolute top-1/2 right-[5vw] md:right-[8vw] -translate-y-1/2 pointer-events-auto origin-right">
                    <a ref={btnRef} href="#contact" className="bg-[#FF5500] text-white font-ui font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase py-3 md:py-4 px-6 md:px-8 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,85,0,0.4)] backdrop-blur-sm border border-[#FF5500]/50 hover:border-white block">
                        Let's Talk
                    </a>
                </div>
            </div>

            {/* SCROLLING LAYER - The Meter and Stages move TOGETHER */}
            <div ref={scrollInnerRef} className="w-full relative z-10 will-change-transform">
                <div className="max-w-[1400px] mx-auto w-full flex flex-row pr-[5vw] md:pr-0">

                    {/* The Meter (Inside scrolling layer but flush left) */}
                    <div className="w-[60px] md:w-[100px] flex flex-col justify-between border-r border-[#ffffff0a] mx-2 md:mx-8 relative">
                        {/* Generate more ticks to cover the long scrolling distance */}
                        {Array.from({ length: 150 }).map((_, i) => (
                            <div
                                key={i}
                                className={`tick-mark w-[10px] h-[2px] bg-white/10 my-1 will-change-transform origin-left rounded-r-full ${i % 10 === 0 ? 'opacity-80' : ''}`}
                            ></div>
                        ))}
                    </div>

                    {/* The Stages Content */}
                    <div className="flex-1 flex flex-col pl-4 md:pl-16">
                        {stages.map((stage, idx) => (
                            <div key={idx} className="min-h-[40vh] flex flex-col justify-center py-4">
                                <div className="story-stage flex flex-col lg:flex-row lg:items-center relative group w-full pr-[20px] md:pr-[40px] gap-8 lg:gap-16">
                                    <h3 className="typeone-font w-full lg:w-1/3 text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] uppercase text-white/30 group-[.is-active]:text-[#FF5500] transition-colors duration-700 shrink-0">
                                        {stage.title}
                                    </h3>
                                    <p className="font-ui w-full lg:w-2/3 text-xl md:text-2xl lg:text-3xl text-white/30 leading-relaxed font-semibold group-[.is-active]:text-white transition-colors duration-700">
                                        {stage.description}
                                    </p>
                                </div>

                                {idx < stages.length - 1 && (
                                    <div className="w-full flex justify-center py-0 opacity-20 group-[.is-active]:opacity-100 transition-opacity duration-700 h-8 items-center">
                                        <svg className="w-6 h-6 text-[#FF5500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
