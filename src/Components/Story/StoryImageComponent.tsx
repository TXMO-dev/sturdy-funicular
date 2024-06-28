import StoryImageComponentWrapper from "../Wrappers/StoryImageComponentWrapper";
import StoryMain from './../../assets/storymain.png';
import StorySub1 from './../../assets/storysub1.png';
import StorySub2 from './../../assets/storysub2.png';
const StoryImageComponent = () => {
    return (
        <StoryImageComponentWrapper>
            <img src={StoryMain} className="mb-[1rem]"/>
            <div className="w-full flex flex-row justify-items-center items-center place-content-center">
            <img src={StorySub1} className="mr-[1rem]"/>
            <img src={StorySub2}/>
            </div>
        </StoryImageComponentWrapper>
    )
}
export default StoryImageComponent;