import { ReactNode } from "react"
import MainFocusBg from './../../assets/mainfocusbgicon.svg'

const FocusSingleComponentWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div style={{
            background: 'linear-gradient(180deg, #EAB196 0%, rgba(255, 240, 233, 0) 100%)'
        }} className="hidenav relative w-full flex flex-col justify-items-start items-start px-[2rem] py-[3.3rem]">
            <img src={MainFocusBg} className="absolute top-0 right-0 z-1" alt="main focus icon" />
            {children}
        </div>
        <div style={{
            background: 'linear-gradient(180deg, #EAB196 0%, rgba(255, 240, 233, 0) 100%)'
        }} className="smallnav w-[80%] mx-[10%] relative w-full flex flex-col justify-items-center items-center mb-[1rem] px-[2rem] py-[3.3rem]">
            <img src={MainFocusBg} className="absolute top-0 right-0 z-1" alt="main focus icon" />
            {children}
        </div>
        </>
    )
}
export default FocusSingleComponentWrapper