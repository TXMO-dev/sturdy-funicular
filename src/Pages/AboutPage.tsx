import FooterComponent from "../Components/FooterComponent";
import AboutPageHeroSection from "../Sections/AboutPageHeroSection";
import FocusSection from "../Sections/FocusSection";
import StatsSection from "../Sections/StatsSection";
import StorySection from "../Sections/StorySection";
import TestimonialsSection from "../Sections/TestimonialsSection";
import AboutUsHeroImage from './../assets/aboutusheroimage.png'
import AboutSideImage from './../assets/aboutheroimage.png';


const AboutPage = () => {
    return (
        <div className="overflow-x-hidden">
            <AboutPageHeroSection image={AboutUsHeroImage} title="About Us" subImage={AboutSideImage} height="100%" />
            <StorySection />
            <StatsSection />
            <FocusSection />
            <TestimonialsSection />
            <FooterComponent />
        </div>
    )
}
export default AboutPage;