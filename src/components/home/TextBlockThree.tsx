import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function TextBlockThree() {
    const container = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const pointsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;
        const words = container.current.querySelectorAll('.word');

        gsap.fromTo(
            words,
            { opacity: 0.2 },
            {
                opacity: 1,
                stagger: 0.03,
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

        if (pointsRef.current) {
            const points = pointsRef.current.querySelectorAll('.business-point');
            gsap.fromTo(
                points,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: pointsRef.current,
                        start: 'top 85%',
                    }
                }
            );
        }
    }, { scope: container });

    const text = "Without clear positioning, businesses struggle to grow. Marketing becomes inconsistent. Competition becomes stronger. Opportunities are missed. We bring structure and clarity to your brand so every part of your business moves in the same direction. With the right strategy, growth becomes intentional — not accidental.";
    const words = text.split(" ");

    return (
        <section ref={container} className="section--padding flex justify-center w-full px-[var(--home-padding)] text-black flex-col gap-16 bg-white pt-20 pb-32">
            <div className="w-full flex flex-col md:flex-row gap-12 items-center">
                {/* Pushed text container slightly to the right using padding */}
                <div className="w-full md:w-[60%] text-left pl-4 md:pl-12 lg:pl-20">
                    <h3 className="ui text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] opacity-80 mb-8 uppercase text-[#FF5500] font-bold">Why Businesses Choose ORIONAC</h3>
                    <h2 className="heading h2 uppercase tracking-wide leading-[1]">
                        {words.map((word, i) => {
                            if (word.includes("intentional")) {
                                return (
                                    <span key={i} className="underline-container relative inline-block mx-[0.5vw]">
                                        <span className="word opacity-20">{word}</span>
                                        <svg className="underline-svg absolute bottom-[-5px] left-[-5px] w-[calc(100%+10px)] h-4 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 122 20">
                                            <path ref={pathRef} d="M -4 7 L 99 12 L 14 15 L 102 5" fill="none" stroke="#FF5500" strokeWidth="2" />
                                        </svg>
                                    </span>
                                )
                            }
                            return (
                                <span key={i} className="word opacity-20 mx-[0.4vw] inline-block">
                                    {word}
                                </span>
                            );
                        })}
                    </h2>
                </div>

                <div className="w-full md:w-[40%] relative aspect-[4/5] rounded-xl overflow-hidden group cursor-none">
                    <div className="absolute inset-0 bg-[#FF5500]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                    <img
                        src="https://cdn.sanity.io/images/leima53t/production/0ef8b5d40f22caf2162fab2a6a4d4c0490f5a3d8-1000x1000.png"
                        alt="ORIONAC Strategy"
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 border border-black/20 rounded-xl z-20 pointer-events-none" />
                </div>
            </div>

            {/* The 4 Points Section */}
            <div ref={pointsRef} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 md:mt-24 pl-4 md:pl-12 lg:pl-20">
                {[
                    { id: '01', title: 'Business Growth', desc: 'Sustainable, calculated expansion without the guesswork.' },
                    { id: '02', title: 'Website Building', desc: 'Platforms engineered specifically for market conversion.' },
                    { id: '03', title: 'Revenue Generation', desc: 'Directly driving measurable results to your bottom line.' },
                    { id: '04', title: 'Brand Authority', desc: 'Creating an unmatched, dominant position in your industry.' }
                ].map((item, index) => (
                    <div key={index} className="business-point flex flex-col border-t-2 border-black pt-6 pr-4">
                        <span className="font-ui text-[#FF5500] text-sm md:text-base font-bold mb-4 tracking-widest">{item.id} //</span>
                        <h4 className="heading text-2xl md:text-3xl uppercase tracking-widest mb-4 leading-tight">{item.title}</h4>
                        <p className="font-ui text-black/70 text-lg md:text-xl font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
