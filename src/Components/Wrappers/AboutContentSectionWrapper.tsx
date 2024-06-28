import { ReactNode } from "react";

const AboutContentSectionWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div className="hidenav rounded-[.6rem] bg-[#E4E4E4] py-[4rem]  px-[4rem] grid grid-cols-automatic2 place-content-center gap-[1.5rem]">  
            {children}
        </div>
        <div className="smallnav rounded-[.4rem] bg-[#E4E4E4] py-[1.5rem] px-[1.5rem] grid grid-cols-automatic2 place-content-center gap-[2rem]">  
            {children}
        </div>
        </>
    )
}
export default AboutContentSectionWrapper;