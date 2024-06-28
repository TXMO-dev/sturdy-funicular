import { FaChevronRight } from "react-icons/fa";
import HeroIconComponent from "../../assets/HeroIconComponent";
import Button from "../Buttons/Button";
import HeroContentInfoWrapper from "../Wrappers/HeroContentInfoWrapper";
import HeroIconWrapper from "../Wrappers/HeroIconWrapper";
import HeroIconTextComponent from "./HeroIconTextComponent";
import HeroContentInfoText from "./HeroContentInfoText";
import HeroContentInfoSubText from "./HeroContentInfoSubText";

const HeroContentInfo = () => {
    return (
        <HeroContentInfoWrapper>
            <HeroIconWrapper>
                <HeroIconComponent/>
                <HeroIconTextComponent text="Real Estate Agency" />
            </HeroIconWrapper>
            <HeroContentInfoText text="Find The Perfect Place To Live With Your Family."/>
            <HeroContentInfoSubText text="Explore Beautiful Homes Designed for Comfort, Style, and Family Living." />
            <Button route="/properties" text="explore property" width={14.5} icon={<FaChevronRight className="w-[1rem] h-[1rem]" />} />
        </HeroContentInfoWrapper>
        
        
    )
}
export default HeroContentInfo;