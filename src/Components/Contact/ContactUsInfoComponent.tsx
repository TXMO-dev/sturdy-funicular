import ContactUsIconWrapper from "../Wrappers/ContactUsIconWrapper";
import ContactUsIcon from "./ContactUsIcon";
import ContactMessageIcon from './../../assets/contactmessageicon.svg';
import ContactPhoneIcon from './../../assets/ContactPhoneIcon.svg';


const ContactUsInfoComponent = () => {
    return (
        <>
        <div className="hidenav flex flex-col justify-items-start items-start">
            <ContactUsIconWrapper>
                <ContactUsIcon title="Contact Us" />
            </ContactUsIconWrapper>
            <h2 className="font-[700] text-left text-[#3B3A5D] text-[3.3rem] text-left leading-[4rem] mb-[1rem] mb-[1rem] mt-[1rem]">Contact us For More Information</h2>
            <p className="text-left text-[#B16642] font-[400] leading-[1.5rem] mb-[1rem]">
            For more information, please don't hesitate to contact us. We're here to answer any questions and provide additional details about our services.
            </p>
            <div className="flex flex-col">
                <div className="w-full relative">
                    <div  className="absolute rounded-tr-[.4rem] rounded-br-[.4rem] z-[5] top-0 left-0 w-[5rem] h-[5rem] bg-[#FCDBCE]">
                        &nbsp;
                    </div>
                    <div className="p-[1rem] flex flex-row items-center justify-items-center absolute z-[10] top-[1rem] left-[1rem] bg-[#FFFFFF] rounded-[.4rem]">
                        <img className="mr-[1rem]" src={ContactMessageIcon} alt="contact message icon" />
                        <p className="w-full text-[#B16642] text-[1.2rem] font-[400] leading-[1.5rem]">dennis.bimpong@alakadosproperties.com</p>
                    </div>
                </div>
                <div className="w-[100vw] relative mt-[6rem]">
                    <div className="absolute rounded-tr-[.4rem] rounded-br-[.4rem] z-[5] top-0 left-0 w-[5rem] h-[5rem] bg-[#FCDBCE]">
                        &nbsp;
                    </div>
                    <div className="p-[1rem] flex flex-row items-center justify-items-center absolute z-[10] top-[.9rem] left-[1rem] bg-[#FFFFFF] rounded-[.4rem]">
                        <img className="mr-[1rem]" src={ContactPhoneIcon} alt="contact message icon" />
                        <p className="w-full text-[#B16642] text-[1.2rem] font-[400] leading-[1.5rem]">+233 26 936 9806 / +233 59 905 3150</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-[8rem]">
                <h3 className="text-[#3B3A5D] text-[2rem] leading-[2rem] text-left font-[700] mb-[1rem]">Location</h3>
                <p className="text-left text-[#B16642] font-[400] leading-[1.5rem]s mb-[1rem]">
                Tema & Accra
            </p>
            </div>
            <div className="w-full mb-[8rem] mt-[2rem] flex flex-row justify-items-start items-center">
                <div className="bg-[#FCDBCE] mr-[1rem] justify-items-center items-center place-content-center p-[1rem] flex flex-row justify-items-center items-center place-content-center">
                    <div className="bg-[#FFFFFF] p-[1rem] flex flex-col justify-items-center items-center text-center">
                        <h4 className="text-[#3B3A5D] font-[600] text-[1rem] leading-[1.5rem] mb-[1rem] text-center mb-[1rem]">Tema</h4>
                        <p className="text-center text-[#8D8D8D] text-[1rem] leading-[1.5rem] font-[400]">&nbsp;</p>
                    </div>
                </div>
                <div className="bg-[#FCDBCE] justify-items-center items-center place-content-center p-[1rem] flex flex-row justify-items-center items-center place-content-center">
                    <div className="bg-[#FFFFFF] p-[1rem] flex flex-col justify-items-center items-center text-center">
                        <h4 className="text-[#3B3A5D] font-[600] text-[1rem] leading-[1.5rem] mb-[1rem] text-center mb-[1rem]">Accra</h4>
                        <p className="text-center text-[#8D8D8D] text-[1rem] leading-[1.5rem] font-[400]">&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="smallnav flex flex-col px-[3rem] py-[2rem] justify-items-center items-center overflow-x-hidden">
            <ContactUsIconWrapper>
                <ContactUsIcon title="Contact Us" />
            </ContactUsIconWrapper>
            <h2 className="font-[700] text-center self-center text-[#3B3A5D] text-[2.3rem] leading-[3rem] mb-[1rem] mb-[1rem] mt-[1rem]">Contact us For More Information</h2>
            <p className="text-center self-center px-[3rem] mt-[1rem] mb-[1rem] text-[1rem] text-[#B16642] font-[400] leading-[1.3rem] mb-[1rem]">
            For more information, please don't hesitate to contact us. We're here to answer any questions and provide additional details about our services.
            </p>
            <div className="flex flex-col w-[80%] mx-[10%]">
                <div className="w-full relative mt-[2rem]">
                    <div  className="absolute rounded-tr-[.4rem] rounded-br-[.4rem] z-[5] top-0 left-0 w-[5rem] h-[5rem] bg-[#FCDBCE]">
                        &nbsp;
                    </div>
                    <div className="p-[1rem] flex flex-row items-center justify-items-center absolute z-[10] top-[1rem] left-[1rem] bg-[#FFFFFF] rounded-[.4rem]">
                        <img className="mr-[1rem]" src={ContactMessageIcon} alt="contact message icon" />
                        <p className="w-full text-[#B16642] text-[.85rem] font-[400] leading-[1.5rem]">dennis.bimpong@alakadosproperties.com</p>
                    </div>
                </div>
                <div className="w-[100vw] relative mt-[6rem]">
                    <div className="absolute rounded-tr-[.4rem] rounded-br-[.4rem] z-[5] top-0 left-0 w-[5rem] h-[5rem] bg-[#FCDBCE]">
                        &nbsp;
                    </div>
                    <div className="p-[1rem] flex flex-row items-center justify-items-center absolute z-[10] top-[.9rem] left-[1rem] bg-[#FFFFFF] rounded-[.4rem]">
                        <img className="mr-[1rem]" src={ContactPhoneIcon} alt="contact message icon" />
                        <p className="w-full text-[#B16642] text-[.9rem] font-[400] leading-[1.5rem]">+233 26 936 9806 / +233 59 905 3150</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-[8rem] px-[3rem]">
                <h3 className="text-[#3B3A5D] text-[1.5rem] leading-[2rem] text-left font-[700] mb-[1rem] text-center self-center">Location</h3>
                <p className="text-center w-[90%] mx-[5%] self-center text-[#B16642] font-[400] text-[1rem] leading-[1.5rem]s mb-[1rem]">
                Tema & Accra
            </p>
            </div>
            <div className="w-full mb-[8rem] mt-[2rem] flex flex-col justify-items-center items-center">
                <div className="bg-[#FCDBCE] mb-[1rem] justify-items-center items-center place-content-center p-[1rem] flex flex-row justify-items-center items-center place-content-center">
                    <div className="bg-[#FFFFFF] p-[1rem] flex flex-col justify-items-center items-center text-center">
                        <h4 className="text-[#3B3A5D] font-[600] text-[1rem] leading-[1.5rem] mb-[1rem] text-center mb-[1rem]">Tema</h4>
                        <p className="text-center text-[#8D8D8D] text-[1rem] leading-[1.5rem] font-[400]">&nbsp;</p>
                    </div>
                </div>
                <div className="bg-[#FCDBCE] justify-items-center items-center place-content-center p-[1rem] flex flex-row justify-items-center items-center place-content-center">
                    <div className="bg-[#FFFFFF] p-[1rem] flex flex-col justify-items-center items-center text-center">
                        <h4 className="text-[#3B3A5D] font-[600] text-[1rem] leading-[1.5rem] mb-[1rem] text-center mb-[1rem]">Accra</h4>
                        <p className="text-center text-[#8D8D8D] text-[1rem] leading-[1.5rem] font-[400]">&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default ContactUsInfoComponent;