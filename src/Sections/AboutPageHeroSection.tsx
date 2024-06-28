import AboutSectionHeroContent from "../Components/About/AboutSectionHeroContent";
import NavigationComponent from "../Components/Navigation/NavigationComponent";
import AboutPageHeroSectionWrapper from "../Components/Wrappers/AboutPageHeroSectionWrapper";
import HeroContentWrapper from "../Components/Wrappers/HeroContentWrapper";

const AboutPageHeroSection = ({image,title,subImage, height='40vh', width}:{image: string, title: string, subImage: string, height?: string, width?: string}) => {
    return (
        <AboutPageHeroSectionWrapper backgroundImageUrl={image}>
            <NavigationComponent />
            <HeroContentWrapper>
                <AboutSectionHeroContent image={subImage} title={title} height={height} width={width}/>
            </HeroContentWrapper>
        </AboutPageHeroSectionWrapper>
    )
}
export default AboutPageHeroSection;