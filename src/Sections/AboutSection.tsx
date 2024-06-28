import AboutContentSectionInfoComponent from "../Components/About/AboutContentSectionInfoComponent";
import AboutContentSectionWrapper from "../Components/Wrappers/AboutContentSectionWrapper";
import AboutWrapper from "../Components/Wrappers/AboutWrapper";

const AboutSection = () => {
    return (
        <AboutWrapper>
            <AboutContentSectionWrapper>
                <AboutContentSectionInfoComponent />
            </AboutContentSectionWrapper>
        </AboutWrapper>
    )
}
export default AboutSection;