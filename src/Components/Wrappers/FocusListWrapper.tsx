import { ReactNode } from "react";

const FocusListWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="w-full grid grid-cols-automatic3 place-content-center justify-items-center items-center gap-[2rem]">
            {children}
        </div>
    )
}
export default FocusListWrapper;