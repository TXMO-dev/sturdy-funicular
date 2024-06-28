import { ReactNode } from "react"

const AboutHeroContentInfoWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
            <div className="hidenav flex flex-col justify-items-start items-start">
                {children}
            </div>
            <div className="smallnav flex flex-col justify-items-center items-center place-content-center">
                {children}
            </div>
        </>
    )
}
export default AboutHeroContentInfoWrapper;