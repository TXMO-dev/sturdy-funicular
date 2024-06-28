const ContactUsInfoFromComponent = () => {
    return (
        <>
        <form className="hidenav flex flex-col">
            <h4 className="text-[#3B3A5D] font-[600] text-[2.5rem] leading-[3rem] mb-[1rem]">Quick Contact</h4>
            <p className="font-[400] text-[#7D7D7D] text-left text-[1rem] leading-[1.5rem] mb-[1.5rem]">Please fill in the form below and we will get back to you shortly.</p>
            <div className="flex flex-col mb-[1rem]">
                <label className="font-[500] text-[1rem] leading-[1.5rem] text-[#3B3A5D] mb-[.8rem]">Name</label>
                <input type="text" className="outline-none px-[1.5rem] py-[2rem] bg-[#F3F3F3] placeholder:text-[#A0A0A0] placeholder:text-[1rem] rounded-[.2rem]" placeholder="Enter your name here" />
            </div>
            <div className="flex flex-col mb-[1rem]">
                <label className="font-[500] text-[1rem] leading-[1.5rem] text-[#3B3A5D] mb-[.8rem]">Email</label>
                <input type="email" className="outline-none px-[1.5rem] py-[2rem] bg-[#F3F3F3] placeholder:text-[#A0A0A0] placeholder:text-[1rem] rounded-[.2rem]" placeholder="Enter your email here" />
            </div>
            <div className="flex flex-col mb-[1rem]">
                <label className="font-[500] text-[1rem] leading-[1.5rem] text-[#3B3A5D] mb-[.8rem]">Phone Number</label>
                <input type="text" className="outline-none px-[1.5rem] py-[2rem] bg-[#F3F3F3] placeholder:text-[#A0A0A0] placeholder:text-[1rem] rounded-[.2rem]" placeholder="Enter your phone number here" />
            </div>
            <div className="flex flex-col mb-[1rem]">
                <label className="font-[500] text-[1rem] leading-[1.5rem] text-[#3B3A5D] mb-[.8rem]">Message</label>
                <textarea className="outline-none px-[1.5rem] py-[2rem] bg-[#F3F3F3] placeholder:text-[#A0A0A0] placeholder:text-[1rem] rounded-[.2rem]" placeholder="Enter your name here"></textarea>
            </div>
            <button type="submit" className="text-[#FFFFFF] font-[500] text-[1rem] leading-[1.5rem] px-[1.5rem] py-[2rem] bg-[#3B3A5E] w-[40%]">Submit</button>
        </form>
        <form className="smallnav flex flex-col justify-items-center text-center items-center place-content-center -mt-[3rem]">
            <h4 className="text-[#3B3A5D] font-[600] text-[1.5rem] leading-[2.5rem] mb-[1rem] tet-center">Quick Contact</h4>
            <p className="font-[400] text-[#7D7D7D] text-center text-[1rem] leading-[1.5rem] mb-[1.5rem]">Please fill in the form below and we will get back to you shortly.</p>
            <div className="w-full flex flex-col mb-[1rem]">
                <label className="font-[500] text-[1rem] leading-[1.5rem] text-[#3B3A5D] mb-[.8rem] self-start">Name</label>
                <input type="text" className="w-full outline-none w-[80%] px-[1.5rem] py-[2rem] bg-[#F3F3F3] placeholder:text-[#A0A0A0] placeholder:text-[1rem] rounded-[.2rem]" placeholder="Enter your name here" />
            </div>
            <div className="flex flex-col mb-[1rem] w-full">
                <label className="font-[500] text-[1rem] leading-[1.5rem] text-[#3B3A5D] mb-[.8rem] self-start">Email</label>
                <input type="email" className="w-full outline-none px-[1.5rem] py-[2rem] bg-[#F3F3F3] placeholder:text-[#A0A0A0] placeholder:text-[1rem] rounded-[.2rem]" placeholder="Enter your email here" />
            </div>
            <div className="flex flex-col mb-[1rem] w-full">
                <label className="font-[500] text-[1rem] leading-[1.5rem] text-[#3B3A5D] mb-[.8rem] self-start">Phone Number</label>
                <input type="text" className="w-full outline-none px-[1.5rem] py-[2rem] bg-[#F3F3F3] placeholder:text-[#A0A0A0] placeholder:text-[1rem] rounded-[.2rem]" placeholder="Enter your phone number here" />
            </div>
            <div className="flex flex-col mb-[2rem] w-full">
                <label className="font-[500] text-[1rem] leading-[1.5rem] text-[#3B3A5D] mb-[.8rem] self-start">Message</label>
                <textarea className="w-full outline-none px-[1.5rem] py-[2rem] bg-[#F3F3F3] placeholder:text-[#A0A0A0] placeholder:text-[1rem] rounded-[.2rem]" placeholder="Enter your name here"></textarea>
            </div>
            <button type="submit" className="text-[#FFFFFF] font-[500] text-[1rem] leading-[1.5rem] px-[1rem] py-[1.5rem] bg-[#3B3A5E] w-full">Submit</button>
        </form>
        </>
    )
}
export default ContactUsInfoFromComponent;