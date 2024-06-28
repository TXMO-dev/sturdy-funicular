const HeroContentInfoSubText = ({text}:{text:string}) => {
    return (
        <>
        <p className="hidenav text-[1.25rem] leading-[1.5125rem] text-[#FFFFFF] font-[500] text-left text-left mb-[3rem]">
            {text}
            </p>
        <p className="smallnav text-[1rem] text-center leading-[1.5rem] text-[#FFFFFF] font-[500] text-left text-left mb-[3rem]">
        {text}
        </p>
        </>
    )
}
export default HeroContentInfoSubText;