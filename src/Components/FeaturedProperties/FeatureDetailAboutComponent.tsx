import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";
import { FaInbox, FaPhone } from "react-icons/fa";

const FeatureDetailAboutComponent = ({response}:{response:FeaturedPropertiesSettingsType}) => {
    return (
        <div className="w-full text-center grid grid-cols-automatic3 gap-[1.5rem] justify-items-center items-top place-content-center px-[4rem]">
            <div className="hidenav px-[6rem] col-span-2 flex flex-col items-start justify-items-start">
                <h2 className="font-[700] text-[#3B3A5D] text-[2.5rem] leading-[3rem] mb-[1rem] text-left">{response.about.aboutHeading}</h2>
                <p className="font-[700] text-[#7D7D7D] text-[1rem] leading-[1.6rem] text-left mb-[2.5rem]">{response.about.aboutDescription}</p>
                <p className="py-[4rem] px-[5rem] bg-[#3B3A5D] font-[600] text-[2rem] text-[#FFFFFF] flex flex-row items-center justify-items-center text-center leading-[2rem] italic">{response.about.aboutQuote}</p>
            </div>
            <div className="smallnav px-[3rem] flex flex-col items-center justify-items-center">
                <h2 className="w-full font-[700] text-[#3B3A5D] text-[2rem] leading-[2.5rem] mb-[1rem] text-center">{response.about.aboutHeading}</h2>
                <p className="font-[700] text-[#7D7D7D] text-[1rem] leading-[1.3rem] text-center flex flex-row items-center justify-items-center text-center leading-[2rem]">{response.about.aboutDescription}</p>
            </div>
            <div className="flex flex-col justify-items-center items-center w-full">
                <div className="w-full bg-[#DAC5BB] px-[1.5rem] py-[3rem] flex flex-col text-left mb-[2rem]  w-[90%] mx-[10%]">
                    <h5 className="text-[#3B3A5D] font-[500] text-[1.2rem] mb-[1rem] text-left">About Agent</h5>
                    <p className="font-[400] text-[#7D7D7D] text-[1rem] leading-[1.5rem] text-left mb-[1rem]">{response.agent.agentDescription}</p>
                    <div className="flex flex-row items-center justify-between mb-[1rem]">
                            {
                                response.agent.agentPhoto !== undefined && (
                                    <>
                                    <img src={response.agent.agentPhoto} alt="agent photo" className="rounded-[100%] mr-[1rem] w-[50%] h-[50%]"/>
                                    </>
                                )
                            }
                            <div  className="flex flex-col justify-items-center items-start">
                                <p className="text-left text-[#3B3A5D] text-[1.2rem]">{response.agent.agentName}</p>
                                <p className="text-left text-[1rem] text-[#C17D5B]">Agent</p>
                            </div>
                            
                    </div>
                    <div className="bg-[#FFFFFF] p-[1.2rem]">
                          <div className="flex flex-row justify-items-center items-center mb-[1rem]">
                            <FaInbox className="fill-[#FFBB50] mr-[1rem]" />
                            <p className="font-[400] text-[#7D7D7D] text-[.8rem]">{response.agent.agentContact.email}</p>
                          </div> 
                          <div className="flex flex-row justify-items-center items-center mb-[1rem]">
                            <FaPhone className="fill-[#FFBB50] mr-[1rem]" />
                            <p className="font-[400] text-[#7D7D7D] text-[.8rem]">{response.agent.agentContact.phoneNumber
                            }</p>
                          </div>  
                    </div>
                </div>
                <form className="w-full bg-[#DAC5BB] px-[1.5rem] py-[3rem] flex flex-col text-left  w-[90%] mx-[10%]">
                   <input type="text" className="w-full outline-[#D7D7D7] bg-[#FFFFFF] py-[1rem] px-[2rem] placeholder:text-[#7D7D7D] mb-[1rem]" placeholder="Name"/>
                   <input type="email" className="w-full outline-[#D7D7D7] bg-[#FFFFFF] py-[1rem] px-[2rem] placeholder:text-[#7D7D7D] mb-[1rem]" placeholder="Email"/>
                   <input type="text" className="w-full outline-[#D7D7D7] bg-[#FFFFFF] py-[1rem] px-[2rem] placeholder:text-[#7D7D7D] mb-[1rem]" placeholder="Phone Number"/>
                   <textarea className="w-full outline-[#D7D7D7] bg-[#FFFFFF] py-[1rem] px-[2rem] placeholder:text-[#7D7D7D] mb-[1rem]" placeholder="Message"></textarea>
                   <button type="submit" className="text-[#FFFFFF] bg-[#3B3A5E] py-[1.2rem] px-[2.5rem] text-[1rem] font-[500] w-[40%]">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default FeatureDetailAboutComponent;