import { FeaturedPropertiesSettingsType } from '../../Misc/FeaturedPropertuesSettings';
import FeatureLocation from './../../assets/featuredproperties/FeatureLocation.svg';
const FeatureLocationText = ({response}:{response: FeaturedPropertiesSettingsType}) => {
    return (
        <>
                <p className="hidenav flex flex-row items-center text-[#8E8E8E] font-[400] text-[1rem] leading-[1.1rem]"><img src={FeatureLocation} className="mr-[.2rem] fill-[#FFBB50] w-[1.5rem] h-[1.5rem]"/>{response.location}</p>
                <p className="smallnav flex flex-row items-center text-[#8E8E8E] font-[400] text-[.8rem] leading-[1.1rem]"><img src={FeatureLocation} className="mr-[.2rem] fill-[#FFBB50] w-[1rem] h-[1rem]"/>{response.location}</p>
        </>
    )
}
export default FeatureLocationText;