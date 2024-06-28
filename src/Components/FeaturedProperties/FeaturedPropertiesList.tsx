import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";
import FeaturedPropertiesListWrapper from "../Wrappers/FeaturedPropertiesListWrapper";
import FeaturedPropertyComponent from "./FeaturedPropertyComponent";


const FeaturedPropertiesList = ({featuredProperties}: {featuredProperties:FeaturedPropertiesSettingsType[]}) => {
    return (
        <FeaturedPropertiesListWrapper>
            {
                featuredProperties.map((response) => {
                    return (
                            <FeaturedPropertyComponent response={response} />
                    )
                })
            }
        </FeaturedPropertiesListWrapper>
    )
}
export default FeaturedPropertiesList;