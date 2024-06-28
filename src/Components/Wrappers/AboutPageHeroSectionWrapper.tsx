import { ReactNode } from "react";

const AboutPageHeroSectionWrapper = ({ children, backgroundImageUrl }: { children: ReactNode; backgroundImageUrl: string }) => {
    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient(219.84deg, rgba(71,71,71,0.5) 4.14%, rgba(34,34,34,0.5) 44.22%), url(${backgroundImageUrl})`, /* Apply linear gradient first */
                backgroundSize: 'cover',
            }} className="hidenav relative w-full h-[105vh] pt-[8rem] px-[6rem] flex flex-col overflow-hidden">
                {children}
            </div>
            <div style={{
                backgroundImage: `linear-gradient(219.84deg, rgba(71,71,71,0.5) 4.14%, rgba(34,34,34,0.5) 44.22%), url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
            }} className="smallnav relative w-full h-[105vh] pt-[2rem] px-[1.5rem] flex flex-col overflow-x-hidden overflow-y-hidden justify-items-center items-center place-content-center">
                {children}
            </div>
        </>
    )
}

export default AboutPageHeroSectionWrapper;
