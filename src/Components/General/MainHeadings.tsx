const MainHeadings = ({mainText, subText}:{mainText: string, subText: string}) => {
    return (
        <div className="flex flex-col text-center justify-items-center items-center place-content-center mb-[3.5rem]">
            <h3 className="hidenav font-[900] text-[#DFA857] text-[1.3rem] uppercase leading-[1.5rem] mb-[2rem] text-center">{mainText}</h3>
            <h3 className="smallnav font-[900] text-[#DFA857] text-[1.1rem] leading-[1.3rem] uppercase leading-[1.5rem] mb-[1.5rem] text-center">{mainText}</h3>
            <h6 className="hidenav font-[700] text-[#373737] text-[4rem] leading-[4.5rem] text-center w-[85%]">{subText}</h6>
            <h6 className="smallnav font-[700] text-[#373737] text-[2rem] leading-[2.5rem] text-center w-[85%]">{subText}</h6>
        </div>
    )
}

export default MainHeadings;