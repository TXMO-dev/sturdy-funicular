import { ReactNode } from "react";

 const NavigationWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
            <div className="hidenav relative z-10 w-full bg-[#1B1B1B] py-[1rem] rounded-[.2rem] px-[4rem] mb-[4rem]">{children}</div>
            <div className="smallnav sticky top-0 z-10 w-full bg-[#1B1B1B] py-[.7rem] px-[.7rem] rounded-[.2rem] mb-[4rem] overlfow-x-hidden">
                {children}
            </div>

        </>
    )
 }
 export default NavigationWrapper;