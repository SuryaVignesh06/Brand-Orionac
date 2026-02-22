import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [splatActive, setSplatActive] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className={`layout min-h-[100vh] relative ${splatActive ? 'cursor-none' : ''}`}>
            <Header />
            <main className="w-full relative z-10 selection:bg-black selection:text-white">
                {children}
            </main>
            <Footer onToggleSplat={() => setSplatActive((p) => !p)} />
            <CustomCursor active={splatActive} />
        </div>
    );
}
