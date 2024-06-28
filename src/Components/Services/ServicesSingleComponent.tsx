import { ServicesSettings } from "../../Misc/ServicesSettings"

const ServicesSingleComponent = ({service}:{service:ServicesSettings}) => {
    return (
        <>
        <div className="hidenav relative z-50 w-full flex flex-col text-center justify-items-center items-center place-content-center">
            <span>{service.icon}</span>
            <p className="text-center self-center text-[1rem] font-[600] text-[#3B3A5D] leading-[2rem] mb-[1rem]">{service.title}</p>
            <p className="text-center text-[#8D8D8D] text-[1rem] self-center font-[400] leading-[1.2rem]">{service.subText}</p>
        </div>
        <div  className="smallnav relative z-50 w-[90%] mx-[5%] mb-[4rem] flex flex-col text-center justify-items-center items-center place-content-center">
            <span>{service.icon}</span>
            <p className="text-center self-center text-[1rem] font-[600] text-[#3B3A5D] leading-[2rem] mb-[1rem]">{service.title}</p>
            <p className="text-center text-[#8D8D8D] text-[1rem] self-center font-[400] leading-[1.2rem]">{service.subText}</p>
        </div>
        </>
    )
}
export default ServicesSingleComponent;