const TertiaryHeadings = ({mainText}:{mainText:string}) => {
    return (
        <>
        <div className="flex flex-col text-center justify-items-center items-center place-content-center mb-[3.5rem]">
            <h6 className="hidenav font-[700] text-[#3B3A5D] text-[2.5rem] leading-[3rem] text-center w-[85%] mb-[2rem]">{mainText}</h6>
            <h6 className="smallnav font-[700] text-[#3B3A5D] text-[1.5rem] leading-[2rem] text-center w-[85%] mb-[1rem]">{mainText}</h6>
        </div>
        </>
    )
}
export default TertiaryHeadings;