import { Dispatch } from "react";
import SmallNavigationLinkWrapper from "../Wrappers/SmallNavigationLinkWrapper";
import SmallNavigationLinks from "./SmallNavigationLinks";

const SmallNavigationDock = ({setIsOpen, isOpen}:{setIsOpen:Dispatch<React.SetStateAction<boolean>>, isOpen: boolean}) => {
  return (
    isOpen && (
      <SmallNavigationLinkWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
        <SmallNavigationLinks isOpen={isOpen}setIsOpen={setIsOpen}/>
      </SmallNavigationLinkWrapper>
    )
  );
}

export default SmallNavigationDock;
