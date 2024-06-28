import { FaChevronRight } from "react-icons/fa";
import { FeaturedProperties, FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";
import Button from "../Buttons/Button";
import MainHeadings from "../General/MainHeadings";
import NavigationComponent from "../Navigation/NavigationComponent";
import FeatureDetailWrapper from "../Wrappers/FeatueDetailWrapper";
import FeaturedPropertiesWrapper from "../Wrappers/FeaturedPropertiesWrapper";
import FeatureDetailAboutComponent from "./FeatureDetailAboutComponent";
import FeatureDetailInfoPriceComponent from "./FeatureDetailInfoPriceComponent";
import FeatureDetailPhotoGalleryComponent from "./FeatureDetailPhotoGalleryComponent";
import FeaturedPropertiesList from "./FeaturedPropertiesList";
import FooterComponent from "../FooterComponent";

const FeatureDetailComponent = ({response}:{response:FeaturedPropertiesSettingsType}) => {
    const bestDeals = FeaturedProperties.filter(property => {
        // Parse the price string to extract the numerical value
        const price = parseFloat(property.price.replace(/[^0-9.]/g, ''));
    
        // Check if price is not NaN and greater than 0
        if (!isNaN(price) && price > 0) {
            // Calculate the threshold range (value plus 50% of the value)
            const minValue = price;
            const maxValue = price * 1.5;
    
            // Check if the property's price falls within the range
            return minValue <= price && price <= maxValue;
        }
    
        return false; // Exclude properties with invalid or missing prices
    });
    return (
        <>
        <FeatureDetailWrapper response={response}>
            <NavigationComponent />
        </FeatureDetailWrapper>
        <FeatureDetailInfoPriceComponent response={response} />
        <div className="hidenav bg-[#DAC5BB] h-[.1rem] mt-[2rem] w-[78%] mx-[11%] mb-[2rem]">&nbsp;</div>
        <FeatureDetailAboutComponent response={response} />
        <FeatureDetailPhotoGalleryComponent response={response} />
        <FeaturedPropertiesWrapper>
            <MainHeadings mainText="" subText="Best Deals For You." />
            <FeaturedPropertiesList featuredProperties={bestDeals} />
            <Button route="/contact" text="Get in touch with us" width={17} icon={<FaChevronRight className="w-[1rem] h-[1rem]" />} />
        </FeaturedPropertiesWrapper>
        <FooterComponent />
        </>
    )
}
export default FeatureDetailComponent;