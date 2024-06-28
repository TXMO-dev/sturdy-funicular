import { ReactNode } from "react"

const HeroContentInfoWrapper = ({children}:{children: ReactNode}) => {
    return (
        <>
            <div className="hidenav flex flex-col items-left justify-items-left">{children}</div>
            <div className="smallnav flex flex-col items-center justify-items-center place-content-center text-center px-[1.3rem] pt-[1.3rem]">{children}</div>
        </>
    )
}
export default HeroContentInfoWrapper