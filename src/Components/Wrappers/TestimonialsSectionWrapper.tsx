import { ReactNode } from "react";

const TestimonialsSectionWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="w-full bg-[#F3E8E2] py-[2.5rem] px-[1.5rem] flex flex-col justify-items-center items-center">
        {children}
        </div>
    )
}
export default TestimonialsSectionWrapper;