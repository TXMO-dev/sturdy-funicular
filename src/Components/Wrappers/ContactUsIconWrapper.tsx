import { ReactNode } from "react";

const ContactUsIconWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div style={{
            background: 'linear-gradient(270deg, #F3D1C1 -3.75%, rgba(255, 178, 141, 0) 108.58%)'

        }} className="flex flex-row justify-items-center items-center place-content-center px-[1rem] py-[1.5rem]">
            {children}
        </div>
    )
}
export default ContactUsIconWrapper;