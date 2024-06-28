import { ReactNode } from "react";

const FocusWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="flex flex-col justify-items-center items-center pleace-content-center px-[6rem] py-[3rem]">
            {children}
        </div>
    )
}
export default FocusWrapper;