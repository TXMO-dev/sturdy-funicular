import HeroContent from "../Components/Hero/HeroContent";
import NavigationComponent from "../Components/Navigation/NavigationComponent";
import HeroWrapper from "../Components/Wrappers/HeroWrapper";

const HeroSection = () => {
    return (
        <>
        <HeroWrapper>
            <NavigationComponent /> 
            <HeroContent/>  
        </HeroWrapper>
        </>
    )
}
export default HeroSection;