import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WebGLSection() {
    const container = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!container.current) return;
        const items = container.current.querySelectorAll('.service-item');
        gsap.fromTo(
            items,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom 40%',
                    toggleActions: 'play none none reverse'
                },
            }
        );
    }, []);

    return (
        <section ref={container} className="relative w-full px-[var(--home-padding)] py-32 bg-white text-black flex flex-col items-center border-t border-black/10">
            <h3 className="ui text-sm md:text-base tracking-[0.2em] opacity-60 mb-16 uppercase text-[#FF5500]">What We Do</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[1200px]">
                <div className="service-item border-l border-black/20 pl-6 m-4 hover:border-[#FF5500] transition-colors duration-500">
                    <h4 className="heading tracking-widest text-2xl uppercase mb-4">Strategic Brand Positioning</h4>
                    <p className="font-ui opacity-70 tracking-wide text-lg">We define your market position and create a clear direction for growth.</p>
                </div>

                <div className="service-item border-l border-black/20 pl-6 m-4 hover:border-[#FF5500] transition-colors duration-500">
                    <h4 className="heading tracking-widest text-2xl uppercase mb-4">Brand Identity</h4>
                    <p className="font-ui opacity-70 tracking-wide text-lg">We build professional brand systems that reflect your value and authority.</p>
                </div>

                <div className="service-item border-l border-black/20 pl-6 m-4 hover:border-[#FF5500] transition-colors duration-500">
                    <h4 className="heading tracking-widest text-2xl uppercase mb-4">Website & Digital Presence</h4>
                    <p className="font-ui opacity-70 tracking-wide text-lg">We design digital platforms that communicate trust and convert clients.</p>
                </div>

                <div className="service-item border-l border-black/20 pl-6 m-4 hover:border-[#FF5500] transition-colors duration-500">
                    <h4 className="heading tracking-widest text-2xl uppercase mb-4">Growth Alignment</h4>
                    <p className="font-ui opacity-70 tracking-wide text-lg">We ensure your brand supports marketing, sales, and long-term expansion.</p>
                </div>
            </div>
        </section>
    );
}
