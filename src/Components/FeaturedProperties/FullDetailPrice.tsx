import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";
import Button from "../Buttons/Button";
import FeaturedFeaturesComponent from "./FeaturedFeaturesComponent";
import FeaturedPriceComponent from "./FeaturedPriceComponent";

const FullDetailPrice  = ({response}:{response:FeaturedPropertiesSettingsType}) => {
    return (
        <div className="flex flex-col">
            <span className="mb-[2rem]">
            <FeaturedPriceComponent response={response} />
            </span>
            <span className="mb-[2rem]">
            <FeaturedFeaturesComponent response={response}/>
            </span>
            <Button text="For Sale" route="#" width={9}/>
            

        </div>
    )
}
export default FullDetailPrice;