import { ReactNode } from "react";

const StatsWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="grid grid-cols-automatic2 gap-[2rem] bg-[#FFFFFF] pb-[2rem] pt-[6rem] border-b border-b-[#E4E4E4] border-b-[.1rem]">
            {children}
        </div>
    )
}
export default StatsWrapper;