import { Testimonials } from "../../Misc/TestimonialsSettings";
// import function to register Swiper custom elements
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialInfoComponent from "./TestimonialInfoComponent";
// Import Swiper styles
import 'swiper/css';
import TestimonialSwiperNavComponent from "./TestimonialSwiperNavComponent";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { AutoplayOptions } from "swiper/types";

const TestimonialsListComponent = () => {
    const autoplay: AutoplayOptions = {
        delay: 1000,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true
    }
    return (
        <>
        <div className="hidenav w-full h-full p-[4rem] relative -mt-[8rem]">
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={autoplay}
        loop={true}
    >
        <TestimonialSwiperNavComponent />
        {
            Testimonials.map((testimonial) => {
                return (
                    <SwiperSlide className="pt-[8rem]"><TestimonialInfoComponent key={testimonial.id} testimonialSetting={testimonial}/></SwiperSlide>
                )
            })
        }
        </Swiper>
        </div>
            
        <div className="smallnav w-full h-full relative -mt-[2rem]">
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        className="w-full h-full"
      spaceBetween={50}
      slidesPerView={1}
      autoplay={autoplay}
      loop={true}
    >
         <TestimonialSwiperNavComponent />
        {
            Testimonials.map((testimonial) => {
                return (
                    <SwiperSlide><TestimonialInfoComponent key={testimonial.id}  testimonialSetting={testimonial}/></SwiperSlide>
                )
            })
        }
        </Swiper>
        </div>
        </>
    )
}
export default TestimonialsListComponent;