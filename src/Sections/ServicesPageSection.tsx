import AboutPageHeroSection from "./AboutPageHeroSection";
import ServicesPageImage from './../assets/ServicesPageBg.png';
import ServicesSubImage from './../assets/ServicesSubImage.png';
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import FocusSection from "./FocusSection";
import TestimonialsSection from "./TestimonialsSection";
import FooterComponent from "../Components/FooterComponent";

const ServicesPageSection = () => {
    return (
        <>
            <AboutPageHeroSection image={ServicesPageImage} title="Our Services" subImage={ServicesSubImage} height="70vh" width="100%"  />
            <AboutSection />
            <ServicesSection />
            <FocusSection />
            <TestimonialsSection />
            <FooterComponent />
        </>
    )
}
export default ServicesPageSection;