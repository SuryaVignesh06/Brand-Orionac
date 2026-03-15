import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function TextBlockOne() {
    const container = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        const words = container.current.querySelectorAll('.word');

        gsap.fromTo(
            words,
            { opacity: 0.2 },
            {
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                    end: 'center 40%',
                    scrub: true,
                },
            }
        );

        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            gsap.fromTo(
                pathRef.current,
                { strokeDashoffset: length, strokeDasharray: length },
                {
                    strokeDashoffset: 0,
                    scrollTrigger: {
                        trigger: pathRef.current,
                        start: 'top 80%',
                        end: 'bottom 40%',
                        scrub: true,
                    },
                }
            );
        }
    }, { scope: container });

    const text = "BRANDIGO is a brand growth agency focused on strategy before design. We help businesses define their position, clarify their message, and build brands that support long-term growth. We do not follow trends. We build structured brand systems aligned with real business goals. Our work connects strategy, identity, and digital presence into one clear direction.";
    const words = text.split(" ");

    return (
        <section ref={container} id="about" className="section--padding flex justify-center w-full px-[var(--home-padding)] text-black bg-[#fdfdfd] relative overflow-hidden min-h-[60vh] md:min-h-screen items-center">
            {/* Faded Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <img
                    src="/logo.png"
                    alt="BRANDIGO"
                    className="w-[150vw] md:w-[70vw] h-auto object-contain opacity-[0.03] scale-110"
                />
            </div>
            <div className="w-full md:w-[70%] text-center flex flex-col items-center relative z-10">
                <h3 className="ui text-2xl md:text-3xl tracking-[0.2em] opacity-80 font-bold mb-8 uppercase text-[#FF5500]">About BRANDIGO</h3>
                <h2 className="heading h2 text-5xl md:text-7xl lg:text-[6rem] uppercase tracking-wide leading-[1.2]">
                    {words.map((word, i) => {
                        if (word === "long-term") {
                            return (
                                <span key={i} className="underline-container relative inline-block mx-[0.5vw]">
                                    <span className="word opacity-20">{word}</span>
                                    <svg className="underline-svg absolute bottom-[-5px] left-[-5px] w-[calc(100%+10px)] h-4 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 155 20">
                                        <path ref={pathRef} d="M 10 11 L 126 11 L 30 13 L 140 8" fill="none" stroke="#FF5500" strokeWidth="2" />
                                    </svg>
                                </span>
                            )
                        }
                        return (
                            <span key={i} className="word opacity-20 mx-[0.5vw] inline-block">
                                {word}
                            </span>
                        );
                    })}
                </h2>
            </div>
        </section>
    );
}
