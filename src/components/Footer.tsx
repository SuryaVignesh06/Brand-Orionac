export default function Footer({ onToggleSplat }: { onToggleSplat: () => void }) {
    return (
        <footer className="relative bottom-0 left-0 right-0 z-[100] px-[var(--home-padding)] py-20 text-white flex flex-col w-full bg-black rounded-t-[3rem] border-t border-white/10 mt-[-2px]">

            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="heading text-[6vw] md:text-[3vw] leading-[1] text-white uppercase mb-6">ORIONAC</h2>
                    <p className="font-ui text-lg md:text-xl leading-relaxed opacity-60 max-w-md mix-blend-difference pb-8">
                        A strategic brand growth agency helping businesses scale with clarity, confidence, and direction.
                    </p>
                    <div className="flex items-center gap-4 cursor-pointer group w-fit" onClick={onToggleSplat}>
                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#FF5500] group-hover:border-[#FF5500] transition-colors">
                            <div className="w-2 h-2 bg-white rounded-full transition-transform group-hover:scale-150"></div>
                        </div>
                        <span className="uppercase text-[10px] ui tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Toggle Interactive Paint</span>
                    </div>
                </div>

                <div className="col-span-1 flex flex-col gap-6 font-ui uppercase tracking-widest text-base md:text-xl">
                    <h4 className="opacity-40 mb-2 text-xs md:text-sm">Sitemap</h4>
                    <a href="/" className="hover:text-[#FF5500] transition-colors w-fit">Home</a>
                    <a href="/services" className="hover:text-[#FF5500] transition-colors w-fit">Services</a>
                    <a href="/about" className="hover:text-[#FF5500] transition-colors w-fit">About</a>
                    <a href="/work" className="hover:text-[#FF5500] transition-colors w-fit">Work</a>
                    <a href="/contact" className="hover:text-[#FF5500] transition-colors w-fit">Contact</a>
                </div>

                <div className="col-span-1 flex flex-col gap-6 font-ui uppercase tracking-widest text-base md:text-xl">
                    <h4 className="opacity-40 mb-2 text-xs md:text-sm">Connect</h4>
                    <a href="#" className="hover:text-[#FF5500] transition-colors w-fit">LinkedIn</a>
                    <a href="#" className="hover:text-[#FF5500] transition-colors w-fit">Twitter</a>
                    <a href="#" className="hover:text-[#FF5500] transition-colors w-fit">Instagram</a>
                    <a href="#" className="hover:text-[#FF5500] transition-colors w-fit">Dribbble</a>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center uppercase font-ui text-[10px] tracking-widest opacity-50 gap-4">
                <p>© {new Date().getFullYear()} ORIONAC. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
