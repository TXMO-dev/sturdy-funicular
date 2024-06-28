import { TestimonialsSettings } from "../../Misc/TestimonialsSettings"

const TestimonialInfoComponent = ({testimonialSetting}:{testimonialSetting:TestimonialsSettings}) => {
    return (
        <div className="w-full flex flex-col justify-items-center items-center">
            <div style={{
                    width: '21.47625rem',
                    height: '10.480625rem',
                    padding: '2.4275rem 2.1475rem 1.3025rem 2.1475rem',
                    gap: '0.466875rem',
                    borderRadius: '3.268125rem 3.268125rem 3.268125rem 0px',
                    background: 'linear-gradient(232.29deg, #ECC8B7 9.23%, #F4DBCE 94.02%)'

                }} className="mb-[2rem]">
                    <p className="font-[400] text-[1rem] leading-[1.2rem] text-left text-[#B16642]">
                        {testimonialSetting.statement}
                    </p>
            </div>
            <div className="w-full flex flex-row justify-items-center items-center">
                {
                    testimonialSetting.customerImage && (
                        <>
                            <img src={testimonialSetting.customerImage} className="mr-[.8rem] rounded-[100%] w-[4.5rem] h-[4.5rem]" alt={`${testimonialSetting.id} customer image`} />
                        </>
                    )
                }
                <div className="flex flex-col justify-items-center items-center">
                    <p className="text-[#3B3A5D] font-[600] text-[1.2rem] leading-[1.4rem] mb-[1rem] self-start">{testimonialSetting.customerName}</p>
                    <p className="text-[#B16642] font-[400] text-[1rem] leading-[1.1rem] self-start -mt-[.8rem]">{testimonialSetting.customerPosition}</p>
                </div>
            </div>
        </div>
    )
}
export default TestimonialInfoComponent;