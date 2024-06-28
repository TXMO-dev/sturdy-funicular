import { ReactNode } from "react";
import HeroBg2Icon from "../../assets/HeroBg2Icon";
import HeroBgIcon from "../../assets/HeroBgIcon";
import HeroBgSmallIcon from "../../assets/smallcurlybg.svg";
const HeroWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div style={{background: "linear-gradient(219.84deg, #474747 4.14%, #222222 44.22%)"}} className="hidenav relative w-full h-[60rem] pt-[8rem] px-[6rem] flex flex-col overflow-hidden">
            <HeroBg2Icon style={{
                top: '15%',
                left: '0',
                position: 'absolute',
                zIndex: '0'
                
            }} />
            {children}
            <HeroBgIcon className="absolute z-1" style={{
                top: '0',
                right: '0',
                
                
            }} />
        </div>
        <div style={{background: "linear-gradient(219.84deg, #474747 4.14%, #222222 44.22%)"}} className="smallnav relative w-full pt-[3rem] px-[1.5rem] flex flex-col overflow-x-hidden">
            <img src={HeroBgSmallIcon} className="absolute top-0 right-0 z-1" />
            {children}
        </div>
        </>
    )
}

export default HeroWrapper;