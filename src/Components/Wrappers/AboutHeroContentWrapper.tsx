import { ReactNode } from "react"

const AboutHeroContentWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="grid grid-cols-automatic3 gap-[2rem] justify-between items-center place-content-center">
            {children}
        </div>
    )
}
export default AboutHeroContentWrapper;