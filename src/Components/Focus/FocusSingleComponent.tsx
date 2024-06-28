import { FocusSettings } from "../../Misc/MainFocusSettings";
import FocusSingleComponentWrapper from "../Wrappers/FocusSingleComponentWrapper";

const FocusSingleComponent = ({focus}:{focus:FocusSettings}) => {
    return (
        <FocusSingleComponentWrapper>
            <div className="relative z-[100] w-[6rem] h-[6rem] rounded-[100%] p-[1.4rem] bg-[#FFBB50] flex flex-row justify-items-center items-center place-content-center mb-[1rem]">
                <p className="font-[700] text-[#FFFFFF] text-[3rem] leading-[3rem]">{focus.stage}</p>
            </div>
            <p className="hidenav font-[600] text-[#3B3A5D] text-[1.3rem] leading-[1.5rem] mb-[1rem] text-left mb-[1rem]">{focus.title}</p>
            <p className="smallnav  font-[600] text-[#3B3A5D] text-[1.3rem] leading-[1.5rem] mb-[1rem] text-center mb-[1rem]">{focus.title}</p>
            <p className="hidenav text-[#B16642] font-[400] text-[1rem] leading-[1.5rem] text-left">{focus.subText}</p>
            <p className="smallnav text-[#B16642] font-[400] text-[1rem] leading-[1.5rem] text-center">{focus.subText}</p>
        </FocusSingleComponentWrapper>
        
    )
}
export default FocusSingleComponent;