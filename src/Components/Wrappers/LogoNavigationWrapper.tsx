import { ReactNode } from "react";

const LogoNavigationWrapper = ({children}:{children:ReactNode}) => {
    return (
        <div className="relative flex flex-row w-full justify-between items-center place-content-center">
            {children}
        </div>
    )
}
export default LogoNavigationWrapper;