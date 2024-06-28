import ContactUs from "../../assets/contacthomeicon.svg"
const ContactUsIcon = ({title}:{title:string}) => {
    return (
        <>
            <div className="flex flex-row justify-items-center items-center place-content-center">
                    <img src={ContactUs} className="mr-[1rem]" alt="contact us icon" />
                    <p className="font-[400] text-[1rem] leading-[1.5rem] text-[#B16642]">{title.toUpperCase()}</p>
                </div>
        </>
    )
}
export default ContactUsIcon;