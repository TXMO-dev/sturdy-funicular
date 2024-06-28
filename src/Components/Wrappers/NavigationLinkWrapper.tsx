import { ReactNode } from "react"

const NavigationLinkWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div className="flex flex-row items-center justify-around place-content-center">{children}</div>
        </>
    )
}
export default NavigationLinkWrapper; 