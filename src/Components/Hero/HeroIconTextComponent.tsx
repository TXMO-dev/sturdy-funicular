const HeroIconTextComponent = ({text}:{text:string}) => {
    return (
        <>
        <p className="hidenav text-[#FFFFFF] font-[500] text-[1.25rem] uppercase leading-[1.48125rem]">{text}</p>
        <p className="smallnav text-[#FFFFFF] font-[500] text-[1rem] uppercase leading-[1rem]">{text}</p>
        </>
    )
}
export default HeroIconTextComponent;