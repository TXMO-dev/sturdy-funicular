import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";
import FeatureLocationText from "./FeatureLocationText";

const FullDetailInfo = ({response}:{response:FeaturedPropertiesSettingsType}) => {
    return (
        <div className="flex flex-col items-left justify-items-left">
            <span className="mb-[1rem]">
                <FeatureLocationText response={response} /> 
            </span>
            <h5 className="text-[2.3rem] font-[700] mb-[1rem] text-left leading-[3rem]">{response.name}</h5>
            <p className="text-[1rem] leading-[1rem] font-[400] text-[#7D7D7D] text-left">{response.subDescription}</p>
        </div>
    )
}
export default FullDetailInfo;