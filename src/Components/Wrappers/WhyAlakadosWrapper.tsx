import { ReactNode } from "react";

const WhyAlakadosWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div className="hidenav bg-[#FFFFFF] py-[3rem] px-[1.5rem] flex flex-col justify-items-center items-center">
                {children}
            </div>
            <div className="smallnav bg-[#FFFFFF] py-[2.5rem] flex flex-col justify-items-center items-center">
                {children}
            </div>
        </>
    )
}
export default WhyAlakadosWrapper;