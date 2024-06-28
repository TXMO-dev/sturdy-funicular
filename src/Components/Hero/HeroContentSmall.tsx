import HeroContentImage from "./HeroContentImage"
import HeroContentInfo from "./HeroContentInfo"

const HeroContentSmall = () => {
    return (
        <>
        <div className="smallnav flex flex-col">
                <HeroContentImage />
                <HeroContentInfo />
            </div>
        </>
    )
}

export default HeroContentSmall;