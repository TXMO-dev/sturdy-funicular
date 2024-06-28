import ContactUsInfoComponent from "../Components/Contact/ContactUsInfoComponent";
import ContactUsInfoFromComponent from "../Components/Contact/ContactUsInfoFormComponent";
import ContactUsInfoSectionWrapper from "../Components/Wrappers/ContactUsInfoSectionWrapper";

const ContactUsInfoSection = () => {
    return (
        <ContactUsInfoSectionWrapper>
            <ContactUsInfoComponent />
            <ContactUsInfoFromComponent />
        </ContactUsInfoSectionWrapper>
    )
}
export default ContactUsInfoSection;