import HeroSection from '../components/home/HeroSection';
import TextBlockOne from '../components/home/TextBlockOne';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import TextBlockTwo from '../components/home/TextBlockTwo';
import TextBlockThree from '../components/home/TextBlockThree';
import ServicesSection from '../components/home/ServicesSection';
import CTASection from '../components/home/CTASection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
    return (
        <div className="main-content bg-[#fdfdfd]">
            <HeroSection />
            <TextBlockOne />
            <WhatWeDoSection />
            <div className="home-items-container mt-8">
                <div className="home-items-container-inner">
                    <TextBlockThree />
                    <ServicesSection />
                    <CTASection />
                    <TextBlockTwo />
                </div>
            </div>
            <ContactSection />
        </div>
    );
}
