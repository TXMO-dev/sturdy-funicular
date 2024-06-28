import { ReactNode } from "react";

const FeatureDetailInfoPriceWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
            <div className="hidenav grid grid-cols-automatic3 px-[6rem] justify-between items-center place-content-center mb-[3.5rem]  pb-[4rem] w-[90%] mx-[5%]">
                {children}
            </div>
            <div className="smallnav w-full flex flex-col justify-between px-[3.5rem] gap-[1rem] items-center text-center mb-[4rem] border-b-[#DAC5BB] border-b-[.1rem] pb-[4rem] w-full">
                {children}
            </div>
        </>
    )
}
export default FeatureDetailInfoPriceWrapper;