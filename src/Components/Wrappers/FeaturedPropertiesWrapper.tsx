import { ReactNode } from "react";

const FeaturedPropertiesWrapper = ({children}:{children: ReactNode}) => {
    return (
        <>
            <div className="hidenav bg-[#E4E4E4] py-[3rem] px-[1.5rem] flex flex-col justify-items-center items-center">
                {children}
            </div>
            <div className="smallnav bg-[#E4E4E4] py-[2rem] flex flex-col justify-items-center items-center">
                {children}
            </div>
        </> 
    )
}
export default FeaturedPropertiesWrapper;