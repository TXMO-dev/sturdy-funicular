import { ReactNode } from "react";

const HeroIconWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div style={{background: 'linear-gradient(91.74deg, #4D4D4D 0%, rgba(105, 101, 101, 0) 100%)'}} className="hidenav flex flex-row justify-items-center items-center p-[1rem] w-[19.25rem] mb-[4rem]">
            {children}
        </div>
        <div style={{background: 'linear-gradient(91.74deg, #4D4D4D 0%, rgba(105, 101, 101, 0) 100%)'}} className="smallnav flex flex-row justify-items-center items-center place-content-center py-[.3rem] px-[.3rem] mb-[2rem]">
            {children}
        </div>
        </>
    )
}
export default HeroIconWrapper;