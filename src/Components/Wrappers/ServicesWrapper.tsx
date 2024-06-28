import { ReactNode } from "react";
import SericesBgImage from './../../assets/ServicesBgImage.svg';

const ServicesWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
            <div className="relative hidenav w-full bg-[#FFFFFF] py-[3rem] px-[1.5rem] flex flex-col justify-items-center items-center">
                <img src={SericesBgImage} className="absolute top-[6%] right-0 z-1" alt="services background"/>
                {children}
            </div>
            <div className="relative smallnav w-full bg-[#FFFFFF] py-[2.5rem] flex flex-col justify-items-center items-center">
                <img src={SericesBgImage} className="absolute top-[6%] right-0 z-1 w-[20em] h-[20rem]" alt="services background"/>
                {children}
            </div>
        </>
    )
}
export default ServicesWrapper;