import HeroIconComponent from "../../assets/HeroIconComponent"
import AboutUsContentHeroImage from "../Hero/AboutUsContentHeroImage"
import HeroContentInfoText from "../Hero/HeroContentInfoText"
import HeroIconTextComponent from "../Hero/HeroIconTextComponent"
import AboutHeroContentInfoWrapper from "../Wrappers/AboutHeroContentInfoWrapper"
import AboutHeroContentWrapper from "../Wrappers/AboutHeroContentWrapper"
import HeroContentInfoWrapper from "../Wrappers/HeroContentInfoWrapper"
import HeroIconWrapper from "../Wrappers/HeroIconWrapper"

const AboutSectionHeroContent = ({title,image, height, width}:{title: string,image: string, height?: string, width?: string}) => {
    return (
        <HeroContentInfoWrapper>
            <AboutHeroContentWrapper>
                <AboutHeroContentInfoWrapper>
                    <HeroIconWrapper>
                        <HeroIconComponent/>
                        <HeroIconTextComponent text="Real Estate Agency" />
                    </HeroIconWrapper>
                    <HeroContentInfoText text={title}/>
                </AboutHeroContentInfoWrapper>
                <AboutUsContentHeroImage imageUrl={image} height={height} width={width} />
            </AboutHeroContentWrapper>
        </HeroContentInfoWrapper>
    )
}
export default AboutSectionHeroContent;