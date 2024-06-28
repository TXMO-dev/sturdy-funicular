import AboutPageHeroSection from "./AboutPageHeroSection"
import PropertiesBgImage from './../assets/propertiesgbimage.png';
import PropertiesSideImage from './../assets/propertiessideimage.png';
import FeaturedPropertiesWrapper from "../Components/Wrappers/FeaturedPropertiesWrapper";
import MainHeadings from "../Components/General/MainHeadings";
import FeaturedPropertiesList from "../Components/FeaturedProperties/FeaturedPropertiesList";
import Button from "../Components/Buttons/Button";
import { FaChevronRight } from "react-icons/fa";
import { FeaturedProperties } from "../Misc/FeaturedPropertuesSettings";
import FooterComponent from "../Components/FooterComponent";
const PropertiesPageSection = () => {
    const sortedProperties = FeaturedProperties.sort((a, b) => new Date(b.datePosted).getDate() - new Date(a.datePosted).getDate());
    return (
        <>
            <AboutPageHeroSection image={PropertiesBgImage} title="Browse Properties" subImage={PropertiesSideImage} height="70vh" width="100%"  />
            <FeaturedPropertiesWrapper>
                <MainHeadings mainText="FEATURED PROPERTIES" subText="Properties For Sale In Your Favorite Area." />
                <FeaturedPropertiesList featuredProperties={sortedProperties} />
                <Button route="/contact" text="Get in touch with us" width={17} icon={<FaChevronRight className="w-[1rem] h-[1rem]" />} />
            </FeaturedPropertiesWrapper>
            <FooterComponent />
        </>
    )
}
export default PropertiesPageSection