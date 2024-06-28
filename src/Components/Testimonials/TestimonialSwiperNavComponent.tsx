import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const TestimonialSwiperNavComponent = () => {
    const swiper = useSwiper();
    return (
        <>
            <div className="hidenav absolute top-[15%] right-0 z-[100] w-full flex flex-row items-center place-content-end -mt-[2.5rem]">
            <div onClick={() => swiper.slidePrev()} className='cursor-pointer w-[4rem] mr-[1rem] h-[4rem] bg-[#FFFFFF] rounded-[100%] p-[1.4rem] flex flex-row justify-items-center items-center place-content-center transitionparent'>
                <FaArrowLeft className="fill-current text-[#FFBB50]  transition-colors duration-300 transitionchild" />  
            </div>
            <div onClick={() => swiper.slideNext()} className='cursor-pointer w-[4rem] h-[4rem] bg-[#FFFFFF] rounded-[100%] p-[1.4rem] flex flex-row justify-items-center items-center place-content-center transitionparent'>
                <FaArrowRight  className="fill-current text-[#FFBB50] transitionchild transition-colors duration-300" />
            </div>
        </div>
        <div className="smallnav mt-[2rem] z-100 w-full flex flex-row items-center mb-[2rem] place-content-center">
            <div onClick={() => swiper.slidePrev()} className='cursor-pointer w-[4rem] mr-[1rem] h-[4rem] bg-[#FFFFFF] rounded-[100%] p-[1.4rem] flex flex-row justify-items-center items-center place-content-center transitionparent'>
                <FaArrowLeft className="fill-current text-[#FFBB50]  transition-colors duration-300 transitionchild" />  
            </div>
            <div onClick={() => swiper.slideNext()} className='cursor-pointer w-[4rem] h-[4rem] bg-[#FFFFFF] rounded-[100%] p-[1.4rem] flex flex-row justify-items-center items-center place-content-center transitionparent'>
                <FaArrowRight  className="fill-current text-[#FFBB50] transitionchild transition-colors duration-300" />
            </div>
        </div>
        </>
    );
}
export default TestimonialSwiperNavComponent;