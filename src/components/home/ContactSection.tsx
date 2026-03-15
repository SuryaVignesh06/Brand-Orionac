export default function ContactSection() {
    return (
        <section id="contact" className="w-full bg-[#fdfdfd] text-black pt-32 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5500]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left Side: Info */}
                <div className="w-full xl:w-1/2 flex flex-col justify-center">
                    <h2 className="typeone-font text-6xl md:text-8xl lg:text-[7rem] uppercase tracking-widest mb-8 leading-[1.1]">Let's build <br /><span className="text-[#FF5500]">greatness.</span></h2>
                    <p className="font-ui text-2xl md:text-3xl opacity-70 mb-16 max-w-2xl font-medium leading-relaxed">Ready to transform your business into a high-converting, revenue-generating machine? Let's build a strategy that works.</p>

                    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                        <div>
                            <h4 className="font-ui text-base text-[#FF5500] uppercase tracking-widest font-bold mb-4">Email</h4>
                            <a href="mailto:hello@brandigo.com" className="font-ui text-2xl md:text-3xl font-bold hover:text-[#FF5500] transition-colors">hello@brandigo.com</a>
                        </div>
                        <div>
                            <h4 className="font-ui text-base text-[#FF5500] uppercase tracking-widest font-bold mb-4">Location</h4>
                            <p className="font-ui text-2xl md:text-3xl font-bold">Global / Remote</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full xl:w-1/2 flex items-center">
                    <div className="bg-white w-full p-12 md:p-16 lg:p-20 rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] border border-black/5">
                        <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="flex-1 flex flex-col gap-4">
                                    <label className="font-ui text-sm uppercase tracking-widest font-bold text-black/50">Name *</label>
                                    <input type="text" className="w-full border-b-[2px] border-black/20 pb-4 bg-transparent outline-none focus:border-[#FF5500] font-ui text-xl md:text-2xl transition-colors" placeholder="John Doe" required />
                                </div>
                                <div className="flex-1 flex flex-col gap-4">
                                    <label className="font-ui text-sm uppercase tracking-widest font-bold text-black/50">Company *</label>
                                    <input type="text" className="w-full border-b-[2px] border-black/20 pb-4 bg-transparent outline-none focus:border-[#FF5500] font-ui text-xl md:text-2xl transition-colors" placeholder="ACME Corp" required />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="font-ui text-sm uppercase tracking-widest font-bold text-black/50">Email *</label>
                                <input type="email" className="w-full border-b-[2px] border-black/20 pb-4 bg-transparent outline-none focus:border-[#FF5500] font-ui text-xl md:text-2xl transition-colors" placeholder="john@acme.com" required />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="font-ui text-sm uppercase tracking-widest font-bold text-black/50">Tell us about your project</label>
                                <textarea className="w-full border-b-[2px] border-black/20 pb-4 bg-transparent outline-none focus:border-[#FF5500] font-ui text-xl md:text-2xl transition-colors min-h-[120px] resize-none" placeholder="We are looking to rebrand..."></textarea>
                            </div>
                            <button type="submit" className="mt-6 bg-[#FF5500] text-white py-6 rounded-full font-ui text-base md:text-lg uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:shadow-[0_0_30px_rgba(255,85,0,0.6)] hover:bg-[#ff6600] transition-all hover:scale-[1.02]">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
