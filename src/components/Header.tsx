import { useState, useEffect } from 'react';
import GlassSurface from './home/GlassSurface';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a href={href} className="nav-btn ui text-lg md:text-xl font-bold tracking-[0.02em] leading-none mx-4 py-1">
            {children}
        </a>
    );
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section, footer');
        const observer = new IntersectionObserver((entries) => {
            // Find the intersecting entry that takes up the most space or is currently active
            let activeTheme = 'light';
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Check for common dark or black theme class names we use
                    if (entry.target.classList.contains('bg-black') ||
                        entry.target.classList.contains('bg-[#070707]') ||
                        entry.target.classList.contains('dark-section') ||
                        entry.target.id === 'what-we-do') {
                        activeTheme = 'dark';
                    } else {
                        activeTheme = 'light';
                    }
                }
            });
            setTheme(activeTheme);
        }, { rootMargin: '-10% 0px -85% 0px', threshold: 0 });

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={`fixed left-1/2 -translate-x-1/2 w-full z-[1000] pointer-events-none transition-all duration-500 ease-in-out ${isScrolled
                ? 'top-4 w-[95%] md:w-[70%] max-w-[1100px] h-20 md:h-24'
                : 'top-0 px-6 md:px-[var(--home-padding)] py-[var(--padding)] bg-transparent'
                } ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
            {isScrolled ? (
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <GlassSurface
                        width="100%"
                        height="100%"
                        borderRadius={50}
                        brightness={theme === 'dark' ? 10 : 120}
                        blur={20}
                        opacity={theme === 'dark' ? 0.8 : 0.9}
                    />
                </div>
            ) : null}
            <nav className={`relative z-10 hidden md:flex justify-between items-center w-full h-full pointer-events-auto transition-all duration-500 ${isScrolled ? 'px-8' : ''}`}>
                <div className="flex flex-1 items-center justify-start -ml-4">
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#about">About</NavLink>
                </div>

                <div className="logo flex-shrink-0 cursor-pointer flex items-center justify-center p-2">
                    <a href="/" className="inline-block transition-transform hover:scale-105">
                        <img
                            src="/logo.png"
                            alt="BRANDIGO"
                            className={`object-contain transition-all duration-500 w-auto ${isScrolled ? 'h-16' : 'h-28'}`}
                        />
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-end -mr-4">
                    <NavLink href="#work">Work</NavLink>
                    <NavLink href="#contact">Let's Work</NavLink>
                </div>
            </nav>

            {/* Mobile Nav */}
            <nav className={`relative z-10 md:hidden flex justify-between items-center w-full h-full pointer-events-auto transition-all duration-500 px-6 ${!isScrolled ? 'h-[85px]' : ''}`}>
                <div className="w-6"></div>
                <div className="logo cursor-pointer flex items-center justify-center">
                    <a href="/" className="inline-block transition-transform hover:scale-105">
                        <img
                            src="/logo.png"
                            alt="BRANDIGO"
                            className={`object-contain transition-all duration-500 w-auto ${isScrolled ? 'h-12' : 'h-16'}`}
                        />
                    </a>
                </div>
                <button
                    className="w-6 h-6 flex flex-col justify-center gap-[6px] relative z-50 cursor-pointer p-0 bg-transparent border-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`block w-full h-[1px] transition-all duration-300 origin-center ${menuOpen ? 'bg-[#FF5500] rotate-45 translate-y-[3px]' : theme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
                    <span className={`block w-full h-[1px] transition-all duration-300 origin-center ${menuOpen ? 'bg-[#FF5500] -rotate-45 -translate-y-[4px]' : theme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
                </button>
            </nav>

            {/* Mobile Menu Backdrop */}
            <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-10 text-black transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto z-[1000] -translate-x-[50vw] left-[50vw] w-[100vw]' : 'opacity-0 pointer-events-none -left-full w-full'}`}>
                <a href="/" className="text-3xl uppercase tracking-widest ui hover:text-[#FF5500] transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#services" className="text-3xl uppercase tracking-widest ui hover:text-[#FF5500] transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#about" className="text-3xl uppercase tracking-widest ui hover:text-[#FF5500] transition-colors" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#work" className="text-3xl uppercase tracking-widest ui hover:text-[#FF5500] transition-colors" onClick={() => setMenuOpen(false)}>Work</a>
                <a href="#contact" className="text-3xl uppercase tracking-widest ui hover:text-[#FF5500] transition-colors border border-[#FF5500] p-4 mt-8" onClick={() => setMenuOpen(false)}>Let's Work</a>
            </div>
        </header>
    );
}
