import { ReactNode } from "react";
import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";

const FeatureDetailWrapper = ({ children, response }: { children: ReactNode, response: FeaturedPropertiesSettingsType }) => {
    const backgroundImageUrl = `url(${response.photoGallery[0].urlPath})`;

    return (
        <>
            <div style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover' }} className="hidenav relative w-full h-[46rem] mb-[7rem] pt-[8rem] px-[6rem] flex flex-col overflow-hidden">
                {children}
            </div>
            <div style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover' }} className="smallnav relative w-full h-[32.5rem] mb-[4rem] pt-[3rem] px-[1.5rem] flex flex-col overflow-x-hidden">
                {children}
            </div>
        </>
    );
};

export default FeatureDetailWrapper;
