import StoryImageComponent from "../Components/Story/StoryImageComponent";
import StoryInfoComponent from "../Components/Story/StoryInfoComponent";
import StorySectionWrapper from "../Components/Wrappers/StorySectionWrapper";

const StorySection = () => {
    return (
        <>
            <StorySectionWrapper>
                <StoryInfoComponent />
                <StoryImageComponent />
            </StorySectionWrapper>
            
        </>
    )
}
export default StorySection;