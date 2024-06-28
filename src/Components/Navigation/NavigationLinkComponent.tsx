import NavigationLinkWrapper from "../Wrappers/NavigationLinkWrapper"
import NavigationLinks from "./NavigationLinks"
import { Dispatch } from "react"

 const NavigationLinkComponent = ({setIsOpen, isOpen}:{setIsOpen:Dispatch<React.SetStateAction<boolean>>, isOpen: boolean}) => {
    return (
        <>
        <NavigationLinkWrapper>
           <NavigationLinks setIsOpen={setIsOpen} isOpen={isOpen} />
        </NavigationLinkWrapper>
        </>
    )
 }
 export default NavigationLinkComponent 