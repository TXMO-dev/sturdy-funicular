import { ReactNode } from "react";

const StorySectionWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="w-full bg-[#FFFFFF] py-[3rem] px-[6rem] grid grid-cols-automatic3 justify-items-center items-center place-content-center gap-[2rem]">
            {children}
        </div>
    )
}
export default StorySectionWrapper;