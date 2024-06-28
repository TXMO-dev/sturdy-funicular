import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Button = ({text,route,icon,width,mediaWidth, isMedia = false, textSize='.8rem'}:{text:string,route:string,icon?: ReactNode,width?: number,mediaWidth?:number, isMedia?:boolean, mediaText?: string, textSize?:string}) => {
    return (
        <>
            <Link to={route} style={{width:`${isMedia ? mediaWidth : width}rem`}} className="hidenav bg-[#DFA857] py-[1rem] px-[2rem] text-[#FFFFFF] flex flex-row justify-items-center items-center rounded-[5px] place-content-center">
                <span className="flex flex-row items-center justify-between">
                <span className="mr-[.5rem]">{text.toUpperCase()}</span>
                <span>{icon}</span>
                </span>
            </Link>  
            <Link to={route} style={{width:`${isMedia ? mediaWidth : width}rem`}} className="smallnav mb-[2rem] bg-[#DFA857] py-[.8rem] px-[1rem] text-[#FFFFFF] flex flex-row justify-items-center items-center rounded-[5px] place-content-center">
                <span className="flex flex-row justify-between items-center ">
                    <span style={{fontSize: textSize}} className={"mr-[.5rem] font-[500]"}>{text.toUpperCase()}</span>
                    <span>{icon}</span>
                </span>
        </Link>
        </>
    )   
}
export default Button;