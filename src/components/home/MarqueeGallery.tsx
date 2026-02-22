export default function MarqueeGallery() {
    const imagesRow1 = [
        "https://cdn.sanity.io/images/leima53t/production/cc8f43b367992ee6c2cbe56217ae7056cc37c2bd-2059x2560.jpg?w=800",
        "https://cdn.sanity.io/images/leima53t/production/42d0cbfd2424ee45f0cd49a7618e0d681f838480-2048x2560.jpg?w=800",
        "https://cdn.sanity.io/images/leima53t/production/7b543707a43c0a1c61edf22deb0b423bffa45a93-2053x2560.jpg?w=800",
        "https://cdn.sanity.io/images/leima53t/production/2b2668556104bea3ea626161f0843c9128face02-2043x2560.jpg?w=800",
        "https://cdn.sanity.io/images/leima53t/production/62dbab5ebdcc1144f7910ea454f5fa8cea60efba-2043x2560.jpg?w=800",
    ];

    const imagesRow2 = [
        "https://cdn.sanity.io/images/leima53t/production/6f3774d5dc1f8c1224e634ca74d248f72cf4d81a-2560x2560.jpg?w=800",
        "https://cdn.sanity.io/images/leima53t/production/c125c0b788caab0b88573ec586dad6278f85de88-1918x2560.jpg?w=800",
        "https://cdn.sanity.io/images/leima53t/production/694b02e540c6b35f3bbb481abdf23f5d0edc3d17-2043x2560.jpg?w=800",
        "https://cdn.sanity.io/images/leima53t/production/32d9d289ae445854d21e7fc0e43201e7f7d561e0-2049x2560.jpg?w=800",
        "https://cdn.sanity.io/images/leima53t/production/48e032ba9b91365bbabf2fc6f2e7a8fef5dc282b-2560x2425.jpg?w=800",
    ];

    return (
        <section className="section--padding w-full overflow-hidden flex flex-col gap-4 pb-32 bg-transparent">
            {/* First Marquee Row (Left) */}
            <div className="w-[120%] -ml-[10%] flex whitespace-nowrap overflow-hidden">
                <div className="animate-scroll-left flex shrink-0 min-w-full">
                    {[...imagesRow1, ...imagesRow1].map((src, i) => (
                        <img key={i} className="w-[30vh] md:w-[25vw] max-w-[400px] h-auto object-cover mx-2" src={src} alt="Gallery" />
                    ))}
                </div>
                <div className="animate-scroll-left flex shrink-0 min-w-full">
                    {[...imagesRow1, ...imagesRow1].map((src, i) => (
                        <img key={i} className="w-[30vh] md:w-[25vw] max-w-[400px] h-auto object-cover mx-2" src={src} alt="Gallery" />
                    ))}
                </div>
            </div>

            {/* Second Marquee Row (Right) */}
            <div className="w-[120%] -ml-[10%] flex whitespace-nowrap overflow-hidden">
                <div className="animate-scroll-right flex shrink-0 min-w-full">
                    {[...imagesRow2, ...imagesRow2].map((src, i) => (
                        <img key={i} className="w-[30vh] md:w-[25vw] max-w-[400px] h-auto object-cover mx-2" src={src} alt="Gallery" />
                    ))}
                </div>
                <div className="animate-scroll-right flex shrink-0 min-w-full">
                    {[...imagesRow2, ...imagesRow2].map((src, i) => (
                        <img key={i} className="w-[30vh] md:w-[25vw] max-w-[400px] h-auto object-cover mx-2" src={src} alt="Gallery" />
                    ))}
                </div>
            </div>
        </section>
    );
}
