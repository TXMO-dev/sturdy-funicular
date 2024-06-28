import { ReactNode } from "react";

const ServicesListWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div className="hidenav p-[4rem] w-full h-full mb-[4rem] grid grid-cols-automatic3 gap-[2rem] justify-items-center items-center text-center place-content-center">
            {children}
        </div>
        <div className="smallnav w-[90%] mx-[5%] flex flex-col justify-items-center items-center text-center place-content-center">
            {children}
        </div>
        </>
    )
}
export default ServicesListWrapper;