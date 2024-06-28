import { FaChevronRight } from "react-icons/fa";
import { FeaturedProperties } from "../../Misc/FeaturedPropertuesSettings";
import MainHeadings from "../General/MainHeadings";
import FeaturedPropertiesWrapper from "../Wrappers/FeaturedPropertiesWrapper";
import FeaturedPropertiesList from "./FeaturedPropertiesList";
import Button from "../Buttons/Button";

const FeaturedPropertiesComponent = () => {
    const sortedProperties = FeaturedProperties.sort((a, b) => new Date(b.datePosted).getDate() - new Date(a.datePosted).getDate()).slice(0, 6);
    return (
        <FeaturedPropertiesWrapper>
            <MainHeadings mainText="FEATURED PROPERTIES" subText="Properties For Sale In Your Favorite Area." />
            <FeaturedPropertiesList featuredProperties={sortedProperties} />
            <Button route="/contact" text="Get in touch with us" width={17} icon={<FaChevronRight className="w-[1rem] h-[1rem]" />} />
        </FeaturedPropertiesWrapper>
    )
}
export default FeaturedPropertiesComponent;