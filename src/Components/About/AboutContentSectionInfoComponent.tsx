import { AboutContentInfo } from '../../Misc/AboutContentInfoSettings';
import AboutImageIcon from './../../assets/aboutimage.gif'
import PlayButton from './../../assets/playbuttonanime.gif'
const AboutContentSectionInfoComponent = () => {
    return (
        <>
            <div className='hidenav grid grid-cols-automatic2 gap-[1.5rem] items-center'>
                <div className='flex flex-col'>
                    <h3 className="font-[900] text-[#DFA857] uppercase mb-[1rem] text-left text-[2rem]">Alakados Intro</h3>
                    <h2 className="text-left font-[700] text-[4rem] leading-[4rem] mb-[2rem]">Buying, Selling and Rentals of Properties In An Easy Way.</h2>
                <p className="text-left font-[500] text-[1.2rem] leading-[1.5rem] text-[#9A7C50] mb-[1rem]">
                Experience a seamless journey in buying and selling properties with our innovative solutions and exceptional designs. We re-engineer services to provide you with a premium, hassle-free real estate experience.
                </p>
                </div> 
                <div className='relative mb-[1.2rem] w-full h-full'>
                    <img src={AboutImageIcon} className='w-full h-full' alt="about image" />
                    <img src={PlayButton} className='absolute z-2 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' alt="about image" />
                </div>
            </div>
            <div className="smallnav flex flex-col justify-items-center items-center text-center">
                <h3 className="font-[900] text-[#DFA857] uppercase mb-[1rem]">Alakados Intro</h3>
                <h2 className="text-center font-[700] text-[1.5rem] leading-[2rem] mb-[1rem]">Buying And Selling Property In An Easy Way.</h2>
                <p className="text-center font-[500] text-[1rem] leading-[1.5rem] text-[#9A7C50] mb-[1rem]">
                Experience a seamless journey in buying and selling properties with our innovative solutions and exceptional designs. We re-engineer services to provide you with a premium, hassle-free real estate experience.
                </p>
                <div className='relative mb-[1.2rem] w-full h-full'>
                    <img src={AboutImageIcon} className='w-full h-full' alt="about image" />
                    <img src={PlayButton} className='absolute z-2 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' alt="about image" />
                </div>
                <div className='flex flex-col justify-items-center items-center place-content-center'>
                        {
                            AboutContentInfo.map((response) => (
                                <>
                                <div className='flex flex-row justify-items-center items-center mb-[1.2rem]'>
                                    {response.icon}
                                    <span className='ml-[.6rem] text-[#757575] font-[400] text-[1rem] leading-[1.5rem]'>{response.value}</span>
                                </div>
                                </>
                            ))
                        }
                </div>
                
            </div>
        </>
    )
}
export default AboutContentSectionInfoComponent;