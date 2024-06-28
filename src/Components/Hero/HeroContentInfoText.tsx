const HeroContentInfoText = ({text}:{text:string}) => {
    return (
        <>
            <h2 className="hidenav text-[#FFFFFF] font-[900] text-[4rem] leading-[4.4rem] text-left mb-[2.5rem]">
                {text}
            </h2>
            <h2 className="smallnav text-[#FFFFFF] font-[900] text-[2rem] leading-[2rem] text-center mb-[1rem] leading-[3rem]">
                {text}
            </h2>
        </>
    )
}
export default HeroContentInfoText;