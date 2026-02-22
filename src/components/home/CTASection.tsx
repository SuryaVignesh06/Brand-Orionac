export default function CTASection() {
    return (
        <section className="section--padding px-[var(--home-padding)] flex justify-center items-center py-32 text-black bg-white">
            <div className="text-center w-full max-w-[1000px]">
                <h2 className="heading h2 uppercase leading-[0.9] mb-8 w-full block">
                    <span className="heading-text">Ready to Strengthen Your Brand?</span>
                </h2>
                <p className="font-ui opacity-70 tracking-wide text-lg md:text-2xl mt-4 mb-20 md:w-3/4 mx-auto">
                    If you are ready to move from uncertainty to clarity, from competition to authority, ORIONAC is here to guide the process.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4">
                    <a href="/contact" className="px-10 py-6 bg-black text-white font-ui uppercase tracking-widest hover:bg-[#FF5500] hover:text-white transition-colors text-lg font-bold border border-black hover:border-transparent">
                        Start Your Brand Growth
                    </a>
                    <span className="font-ui text-sm opacity-50 tracking-wider">Limited strategy partnerships available.</span>
                </div>
            </div>
        </section>
    );
}
