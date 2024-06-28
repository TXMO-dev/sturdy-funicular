import { ReactNode } from "react"

const FeaturedPropertiesListWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="w-full grid grid-cols-automatic3 gap-[2rem] justify-items-center items-center mb-[4rem]">
            {children}
        </div> 
    )
}
export default FeaturedPropertiesListWrapper