import { ReactNode } from "react";

const StoryInfoComponentWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="hidenav w-full flex flex-col justify-items-center items-center place-content-center">
            {children}
        </div>
    )
}
export default StoryInfoComponentWrapper;