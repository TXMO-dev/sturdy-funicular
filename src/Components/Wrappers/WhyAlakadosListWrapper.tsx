import { ReactNode } from "react";

const WhyAlakadosListWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
            <div className="hidenav p-[4rem] h-full grid grid-cols-automatic gap-[2rem] justify-items-center items-start place-content-center">
                {children}
            </div>
            <div className="smallnav w-[90%] mx-[5%] h-full flex flex-col justify-items-center items-center place-content-center">
                {children}
            </div>
        </>
    )
}
export default WhyAlakadosListWrapper;