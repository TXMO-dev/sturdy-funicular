import HeroContentWrapper from "../Wrappers/HeroContentWrapper"
import HeroContentLarge from "./HeroContentLarge"
import HeroContentSmall from "./HeroContentSmall"


const HeroContent = () => {
    return (
        <HeroContentWrapper>
            <HeroContentLarge />
            <HeroContentSmall />
        </HeroContentWrapper>
       
    )
}
export default HeroContent