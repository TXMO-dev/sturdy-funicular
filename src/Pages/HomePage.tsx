import AboutSection from "../Sections/AboutSection";
import FeaturedPropertiesSection from "../Sections/FeaturedPropertiesSection";
import FooterSection from "../Sections/FooterSection";
import HeroSection from "../Sections/HeroSection";
import ServicesSection from "../Sections/ServicesSection";
import StatsSection from "../Sections/StatsSection";
import TestimonialsSection from "../Sections/TestimonialsSection";
import WhyAlakadosSection from "../Sections/WhyAlakadosSection";

const HomePage = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <FeaturedPropertiesSection />
            <WhyAlakadosSection />
            <ServicesSection />
            <TestimonialsSection /> 
            <FooterSection />
        </div>
    )
}
export default HomePage;