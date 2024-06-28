import { useState } from "react";
import LogoComponent from "../../assets/LogoComponent";
import LogoNavigationWrapper from "../Wrappers/LogoNavigationWrapper";
import NavigationWrapper from "../Wrappers/NavigationWrapper";
import NavigationLinkComponent from "./NavigationLinkComponent";
import SmallNavigationDock from "./SmallNavigationDock";

const NavigationComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <NavigationWrapper>
            <LogoNavigationWrapper>
                <LogoComponent />
                <NavigationLinkComponent setIsOpen={setIsOpen} isOpen={isOpen} />
                <SmallNavigationDock isOpen={isOpen} setIsOpen={setIsOpen} />
            </LogoNavigationWrapper>     
        </NavigationWrapper>   
        </>
    )
}
export default NavigationComponent;