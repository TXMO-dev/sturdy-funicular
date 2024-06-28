import { ReactNode } from "react";

const AboutWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="py-[4rem] px-[1.5rem]">
            {children}
        </div>
    )
}
export default AboutWrapper;