import { ReactNode } from "react";

const StoryInfoComponentWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div className="hidenav w-full flex flex-col justify-items-start items-start">
            {children}
        </div>
        <div className="smallnav w-full flex flex-col justify-items-center items-center place-content-center px-[1.5rem] py-[2.5rem]">
            {children}
        </div>
        </>

    )
}
export default StoryInfoComponentWrapper;