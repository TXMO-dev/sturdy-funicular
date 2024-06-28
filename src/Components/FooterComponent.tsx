import AlakadosFooterLg from './../assets/featuredproperties/alakadosfootericon@2x.svg';
import FooterInstagram from './../assets/featuredproperties/footerinstagram.svg';
import FooterFacebook from './../assets/featuredproperties/footerfacebook.svg';
import FooterTwitter from './../assets/featuredproperties/footertwitter.svg';
import FooterLinkedIn from './../assets/featuredproperties/footerlinkedin.svg';
import FooterYoutube from './../assets/featuredproperties/footeryoutube.svg';
import { Navigation } from '../Misc/NavSettings';
import { FaLocationPin, FaMessage } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import FooterBgIcon from './../assets/footericon.svg';
import FooterBgIcon2 from './../assets/footericon2.svg';
const FooterComponent = () => {
    return (
        <div className="relative flex flex-col justify-items-center items-center place-content-center w-full p-[3.42rem] bg-[#232323]">
            <img src={FooterBgIcon} className='absolute right-0 top-[5%]' />
            <img src={FooterBgIcon2} className='absolute top-[5%] left-0' />
            <div className="w-full grid grid-cols-automatic3 justify-items-center items-center place-content-center mb-[4rem]">
                <div className="flex flex-col p-[2.5rem] justify-items-center items-center place-content-center col-span-1 lg:border-r-[#FFFFFF] lg:border-r-[.1rem]">
                    <img src={AlakadosFooterLg} alt="alakados footer icon" className='mb-[1rem]' />
                    <div className='flex flex-row justify-items-center items-center place-content-center'>
                        <img src={FooterInstagram} alt="alakados footer icon" className='mr-[1rem]' />
                        <img src={FooterFacebook} alt="alakados footer icon" className='mr-[1rem]' />
                        <img src={FooterTwitter} alt="alakados footer icon" className='mr-[1rem]' />
                        <img src={FooterLinkedIn} alt="alakados footer icon" className='mr-[1rem]' />
                        <img src={FooterYoutube} alt="alakados footer icon" className='mr-[1rem]' />
                    </div>
                </div>
                <div className='hidenav col-span-2 flex flex-col justify-between items-start'>
                    <h3 className='font-[700] text-[2rem] leading-[2rem] text-[#FFFFFF] text-left mb-[1rem]'>Get a free estimate</h3>
                    <p className='text-[#8E8E8E] text-[1rem] leading-[1.5rem] font-[400] w-[70%] mb-[1.5rem]'>
                    Alakados Properties stands as your dependable real estate broker committed to delivering unparalleled customer satisfaction consistently.
                    </p>
                    <form className='w-full grid grid-cols-automatic3 gap-[1rem] items-center place-content-center'>
                            <input type='text' placeholder='Enter email address' className=' w-full bg-[#FFFFFF] placeholder:text-[#BBBBBB] placeholder:font-[400] placeholder:text-[1.2rem] outline-[#C0C0C0] rounded-[3.96px] py-[1.5rem] px-[1rem]' />
                            <button type='submit' className='w-[40%] col-span-1 text-[#FFFFFF] py-[1.5rem] px-[1rem] w-full bg-[#3B3A5D] rounded-[.2rem]'>Subscribe now</button>
                    </form>
                </div>
                <div className='smallnav col-span-2 flex flex-col justify-items-center items-center text-center'>
                    <h3 className='font-[700] text-[2rem] leading-[2rem] text-[#FFFFFF] text-left mb-[1rem] text-center'>Get a free estimate</h3>
                    <p className='text-[#8E8E8E] text-[1rem] leading-[1.5rem] font-[400] w-[70%] mb-[1.5rem] text-center'>
                    Alakados Properties stands as your dependable real estate broker committed to delivering unparalleled customer satisfaction consistently.
                    </p>
                    <form className='w-full grid grid-cols-automatic3 gap-[1rem] justify-content-center justify-items-center items-center place-content-center text-center'>
                            <input type='text' placeholder='Enter email address' className=' w-[90%] bg-[#FFFFFF] placeholder:text-[#BBBBBB] placeholder:font-[400] placeholder:text-[1.2rem] outline-[#C0C0C0] rounded-[3.96px] py-[1.5rem] px-[1rem]' />
                            <button type='submit' className='w-[65%] mx-[17.5%] text-[#FFFFFF] py-[1.5rem] px-[1rem] w-full bg-[#3B3A5D] rounded-[.2rem]'>Subscribe now</button>
                    </form>
                </div>
            </div>
            <div className="w-full grid grid-cols-automatic3 justify-items-center items-center place-content-center mb-[2rem]">
                <div className="flex flex-row p-[3.5rem] justify-around items-start place-content-center col-span-2 lg:border-r-[#FFFFFF] lg:border-r-[.1rem]">
                    <div className='flex flex-col mr-[1.5rem]'>
                        <h6 className='font-[600] text-[1.3rem] text-[#FFFFFF] leading-[1.5rem] mb-[2rem]'>Company</h6>
                        <div className='relative z-[2000] flex flex-col justify-items-start items-start'>
                           {
                            Navigation.map((response) => {
                                return (
                                    <a key={response.id} href={response.route === '/' ? `${window.location.origin}`:`${window.location.origin}${response.route}`} className='cursor-pointer mb-[1rem] text-[#B16642] font-[400] text-[1rem] leading-[1.5rem]'>{response.name}</a>
                                )
                            })
                           }
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='font-[600] text-[1.3rem] text-[#FFFFFF] leading-[1.5rem] mb-[2rem]'>Services</h6>
                        <div className='flex flex-col justify-items-start items-start'>
                                    <a href={`${window.location.origin}/properties`} className='cursor-pointer mb-[1rem] text-[#B16642] font-[400] text-[1rem] leading-[1.5rem]'>Buy / Rent</a>
                        </div>
                    </div>
                </div>
                <div className='w-full col-span-1 flex items-start'>
                <div className='hidenav relative z-10 bg-[#DBA954] w-full flex flex-col items-left justify-around px-[1.5rem] py-[2rem]'>
                           <h4 className='font-[600] text-[1.1rem] leading-[1.5rem] text-[#3B3A5D] mb-[1rem]'>Contact us</h4>
                           <div className='flex flex-col'>
                                <div className='flex flex-row justify-items-center items-center mb-[1rem]'>
                                    <FaLocationPin className='mr-[1rem] fill-[#3B3A5D] text-[1.2rem]' />
                                    <p className='font-[400] text-[#3B3A5D] text-[.8rem]'>Tema & Accra</p>
                                </div>
                                <div className='flex flex-row justify-items-center items-center mb-[1rem]'>
                                    <FaPhone className='mr-[1rem] fill-[#3B3A5D] text-[1.2rem]' />
                                    <p className='font-[400] text-[#3B3A5D] text-[.8rem]'>+233 599 053 150 | +233 269 369 806</p>
                                </div>
                                <div className='flex flex-row justify-items-center items-center mb-[1rem]'>
                                    <FaMessage className='mr-[1rem] fill-[#3B3A5D] text-[1.2rem]' />
                                    <p className='font-[400] text-[#3B3A5D] text-[.8rem]'>dennis.bimpong@alakadosproperties.com</p>
                                </div>
                           </div>
                    </div>
                   <div className='smallnav bg-[#DBA954] w-full flex flex-col items-left justify-around px-[1.5rem] py-[2rem] w-[80%] mx-[10%]'>
                           <h4 className='font-[600] text-[1.1rem] leading-[1.5rem] text-[#3B3A5D] mb-[1rem]'>Contact us</h4>
                           <div className='flex flex-col'>
                                <div className='flex flex-row justify-items-center items-center mb-[1rem]'>
                                    <FaLocationPin className='mr-[1rem] fill-[#3B3A5D] text-[1.2rem]' />
                                    <p className='font-[400] text-[#3B3A5D] text-[.8rem]'>Tema & Accra</p>
                                </div>
                                <div className='flex flex-row justify-items-center items-center mb-[1rem]'>
                                    <FaPhone className='mr-[1rem] fill-[#3B3A5D] text-[1.2rem]' />
                                    <p className='font-[400] text-[#3B3A5D] text-[.8rem]'>+233 599 053 150 | +233 29369806</p>
                                </div>
                                <div className='flex flex-row justify-items-center items-center mb-[1rem]'>
                                    <FaMessage className='mr-[1rem] fill-[#3B3A5D] text-[1.2rem]' />
                                    <p className='font-[400] text-[#3B3A5D] text-[.8rem]'>dennis.bimpong@alakadosproperties.com</p>
                                </div>
                           </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default FooterComponent;