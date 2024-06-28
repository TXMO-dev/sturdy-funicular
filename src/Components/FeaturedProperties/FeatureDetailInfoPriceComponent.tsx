import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";
import FeatureDetailInfoPriceWrapper from "../Wrappers/FeatureDetailInfoPriceWrapper";
import FullDetailInfo from "./FullDetailInfo";
import FullDetailPrice from "./FullDetailPrice";

const FeatureDetailInfoPriceComponent = ({response}:{response:FeaturedPropertiesSettingsType}) => {
    return (
        <FeatureDetailInfoPriceWrapper>
            <FullDetailInfo response={response} />
            <FullDetailPrice response={response} />
        </FeatureDetailInfoPriceWrapper>
    )
}
export default FeatureDetailInfoPriceComponent;