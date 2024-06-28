import FeatureDetailComponent from "../Components/FeaturedProperties/FeatureDetailComponent";
import { FeaturedProperties, FeaturedPropertiesSettingsType } from "../Misc/FeaturedPropertuesSettings";

const FeaturedDetailsSection = ({id}:{id:number}) => {
    const feature = FeaturedProperties.find(x => x.id === id) as FeaturedPropertiesSettingsType;
    console.log('feature: ', feature);
    return (
        <>
        <FeatureDetailComponent response={feature} />
        </>
    )
}
export default FeaturedDetailsSection;