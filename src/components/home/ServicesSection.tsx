export default function ServicesSection() {
    const packages = [
        {
            title: "Brand Foundation",
            price: "Custom Quote",
            description: "Perfect for startups needing a strong, cohesive identity from day one.",
            features: ["Logo Design", "Typography & Color Palette", "Brand Guidelines", "Social Media Kit"],
            popular: false
        },
        {
            title: "Market Dominance",
            price: "Custom Quote",
            description: "A comprehensive brand overhaul engineered to capture market share and drive revenue.",
            features: ["Complete Identity System", "Website Design & Dev", "Go-To-Market Strategy", "Conversion Optimization"],
            popular: true
        },
        {
            title: "Enterprise Authority",
            price: "Custom Quote",
            description: "Ongoing strategic partnership for established brands requiring continuous high-level execution.",
            features: ["Fractional CMO Integration", "Full-Stack Marketing Team", "Continuous Brand Evolution", "Revenue Scale Operations"],
            popular: false
        }
    ];

    return (
        <section id="services" className="w-full bg-[#fdfdfd] text-black relative flex flex-col items-center py-24 md:py-40 px-6 md:px-12 lg:px-24">
            <div className="w-full max-w-[1600px] flex flex-col items-center">
                <h3 className="ui text-2xl md:text-3xl tracking-[0.2em] opacity-80 font-bold mb-6 uppercase text-[#FF5500]">Our Engagement Models</h3>
                <h2 className="typeone-font text-6xl md:text-8xl lg:text-[7rem] uppercase tracking-widest text-center mb-6 leading-[1.1]">Services</h2>
                <p className="font-ui text-2xl md:text-3xl opacity-70 text-center max-w-4xl mb-24 font-medium">We don't offer generic templates. We build bespoke systems engineered for authority, conversion, and scale.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`relative flex flex-col p-12 md:p-14 rounded-3xl border transition-all duration-300 hover:-translate-y-3 ${pkg.popular ? 'bg-black text-white border-black shadow-[0_30px_60px_rgba(0,0,0,0.2)] scale-100 lg:scale-105 z-10' : 'bg-white text-black border-black/10 shadow-2xl'}`}>
                            {pkg.popular && (
                                <div className="absolute top-0 right-12 -translate-y-1/2 bg-[#FF5500] text-white text-sm md:text-base font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <h3 className={`typeone-font text-3xl md:text-5xl uppercase tracking-widest mb-4 ${pkg.popular ? 'text-[#FF5500]' : 'text-black'}`}>{pkg.title}</h3>
                            <div className="font-ui text-3xl md:text-4xl font-bold mb-8">{pkg.price}</div>
                            <p className={`font-ui text-xl md:text-2xl mb-12 leading-relaxed flex-grow font-medium ${pkg.popular ? 'opacity-80' : 'opacity-70'}`}>{pkg.description}</p>

                            <ul className="flex flex-col gap-5 mb-14 flex-grow">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-4">
                                        <svg className={`shrink-0 w-6 h-6 ${pkg.popular ? 'text-[#FF5500]' : 'text-black/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        <span className={`font-ui text-lg md:text-xl uppercase tracking-wider font-bold ${pkg.popular ? 'opacity-90' : 'opacity-80'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-5 rounded-full font-ui tracking-widest text-base md:text-lg uppercase font-bold transition-all ${pkg.popular ? 'bg-[#FF5500] text-white shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:shadow-[0_0_30px_rgba(255,85,0,0.6)] hover:bg-[#ff6600]' : 'bg-black text-white hover:opacity-80'}`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
