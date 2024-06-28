import { ReactNode } from "react";

const HeroContentWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
            <div className="grid grid-cols-automatic3 gap-[2rem] place-content-center">
                {children}
            </div>
        </>
    )   
}
export default HeroContentWrapper;