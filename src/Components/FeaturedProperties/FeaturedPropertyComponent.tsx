import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings"
import Button from "../Buttons/Button";
import FeaturedPropertiesCardWrapper from "../Wrappers/FeaturedPropertiesCardWrapper";
import FeatureLocationText from "./FeatureLocationText";
import FeaturedFeaturesComponent from "./FeaturedFeaturesComponent";
import FeaturedPriceComponent from "./FeaturedPriceComponent";

const FeaturedPropertyComponent = ({response}: {response: FeaturedPropertiesSettingsType}) => {
    return (
        <FeaturedPropertiesCardWrapper id={response.id}>
            <img src={response.photoGallery[0].urlPath} className="w-[28rem] mb-[2rem]" alt="main photo" />
            <div className="w-full flex flex-row justify-between items-center mb-[1.5rem]">
                <FeaturedPriceComponent response={response} />
                <span className="hidenav">
                    <Button text="For sale" route="#" textSize={'.4rem'} />
                </span>
                <span className="smallnav">
                    <Button text="For sale" route="#" textSize={'.7rem'} />
                </span>
            </div>
            <div className="flex flex-col text-left items-left justify-items-left w-full mb-[1.5rem]">
                <p className="font-[600] text-[1rem] text-[#3B3A5D] leading-[1.4rem] mb-[.6rem]">{response.name}</p>
                <FeatureLocationText response={response} />
            </div>
            <div className="w-full flex flex-row justify-content-left">
                    <FeaturedFeaturesComponent response={response}/>
            </div>
        </FeaturedPropertiesCardWrapper>
    )
}
export default FeaturedPropertyComponent;