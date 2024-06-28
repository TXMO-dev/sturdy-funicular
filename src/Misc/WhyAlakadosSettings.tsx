import { ReactNode } from "react"
import PiggyAlakados from './../assets/piggyalakados.svg';
import PropertyAlakados from './../assets/propertyalakados.svg';
import MapAlakados from './../assets/MapAlakados.svg';
import HandsAlakados from './../assets/HandsAlakados.svg';
import CommissionAlakados from './../assets/CommissionAlakados.svg';

export type AlakadosSettings = {
    id: number,
    icon: ReactNode,
    title: string,
    subText: string;
}

export const Alakados: AlakadosSettings[] = [
    {
        id:0,
        icon: <img src={PiggyAlakados} alt="piggy icon" />,
        title: 'Budget Friendly',
        subText: 'Find the best properties that fit your budget without compromising on quality. Enjoy affordable options tailored to your needs, making home ownership within reach for everyone.'
    },
    {
        id: 1,
        icon: <img src={PropertyAlakados} alt="piggy icon" />,
        title: 'Property Insurance',
        subText: 'Secure your investment with our comprehensive property insurance plans. We offer reliable coverage that protects your home and gives you peace of mind.'
    },
    {
        id: 2,
        icon: <img src={MapAlakados} alt="piggy icon" />,
        title: 'Prime Location',
        subText: 'Discover homes in prime locations with excellent amenities and convenient access. Our listings feature properties in sought-after neighborhoods that enhance your lifestyle.'
    },
    {
        id: 3,
        icon: <img src={HandsAlakados} alt="piggy icon" />,
        title: 'Trusted By Thousands',
        subText: 'Join the community of satisfied customers who trust our expertise and service. We are committed to providing exceptional experiences and reliable support throughout your real estate journey.'
    },
    {
        id: 4,
        icon: <img src={CommissionAlakados} alt="piggy icon" />,
        title: 'Lowest Commission',
        subText: 'Benefit from our competitive commission rates, ensuring you get the best deal. We offer transparent pricing and affordable options to help you save on your property transactions.'
    },
    
]