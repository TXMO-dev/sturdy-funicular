import AboutPageHeroSection from "./AboutPageHeroSection";
import ContactUsBgImage from "./../assets/ContactUsBgImage.png";
import FooterComponent from "../Components/FooterComponent";
import AboutUsImg from './../assets/aboutheroimage.png'
import ContactUsInfoSection from "./ContactUsInfoSection";

const ContactUsSection = () => {
    return (
        <div className="overflow-x-hidden">
            <AboutPageHeroSection image={ContactUsBgImage} title="Contact Us" subImage={AboutUsImg} height="80%"  />
            <ContactUsInfoSection />
            <FooterComponent />
        </div>
    )
}
export default ContactUsSection;