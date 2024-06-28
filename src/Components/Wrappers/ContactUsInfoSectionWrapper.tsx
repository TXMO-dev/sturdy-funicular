import { ReactNode } from "react";

const ContactUsInfoSectionWrapper = ({children}:{children:ReactNode}) => {
    return (
        <>
        <div className="hidenav w-full h-[150vh] grid grid-cols-automatic3 items-center gap-[2rem] py-[3rem] px-[6rem]">
            {children}
        </div>
        <div className="smallnav w-full px-[3rem] py-[2rem] flex flex-col justify-items-center items-center py-[2rem] px-[3rem]">
        {children}
    </div>
        </>
    )
}
export default ContactUsInfoSectionWrapper;