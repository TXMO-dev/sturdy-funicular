import { Dispatch, ReactNode } from "react";
import { FaTimesCircle } from "react-icons/fa";

const SmallNavigationLinkWrapper = ({children, setIsOpen, isOpen}:{children:ReactNode,setIsOpen:Dispatch<React.SetStateAction<boolean>>, isOpen: boolean}) => {
    return (
        <div className="fixed bottom-0 top-0 w-full h-full smallnav flex flex-col justify-items-center items-center place-content-center w-full fixed left-0 w-full p-[1rem] bg-[#1B1B1B]">
            <FaTimesCircle onClick={() => setIsOpen(!isOpen)} className="absolute w-[1.5rem] h-[1.5rem] top-[2rem] right-[2rem] fill-[#FFFFFF]" />
            {children}
        </div>
    )
}
export default SmallNavigationLinkWrapper;