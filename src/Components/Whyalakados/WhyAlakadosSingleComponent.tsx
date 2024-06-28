import { AlakadosSettings } from "../../Misc/WhyAlakadosSettings";

const WhyAlakadosSingleComponent = ({settings}:{settings:AlakadosSettings,index?:number}) => {
    return (
        <>
        <div key={settings.id} className='hidenav w-full bg-[#E4E4E4EE] rounded-[.4rem] px-[1.8rem] pt-[3rem] cols-span-4'>
            <div className="flex flex-col">
                <span className="mb-[2rem] self-start">{settings.icon}</span>
                <span className="mb-[1rem] self-start text-left text-[#3B3A5D] font-[600] text-[1.3rem] leading-[2rem]">{settings.title}</span>
                <span className="mb-[3rem] self-start text-left text-[#9A7C50] font-[400] text-[1rem] leading-[1.2rem]">{settings.subText}</span>
            </div>
        </div>
        <div key={settings.id} className='smallnav w-[90%] mx-[5%] mb-[1.5rem] bg-[#E4E4E4EE] rounded-[.4rem] px-[1.2rem] pt-[2.2rem] cols-span-4'>
            <div className="flex flex-col justify-items-center items-center place-content-center w-full">
                <span className="mb-[2rem] self-center text-center">{settings.icon}</span>
                <span className="mb-[1rem] self-center text-center text-[#3B3A5D] font-[600] text-[1.3rem] leading-[2rem]">{settings.title}</span>
                <span className="mb-[3rem] self-center text-center text-[#9A7C50] font-[400] text-[1rem] leading-[1.2rem]">{settings.subText}</span>
            </div>
        </div>
        </>
    )
}
export default WhyAlakadosSingleComponent;