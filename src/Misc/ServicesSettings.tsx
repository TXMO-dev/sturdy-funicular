import { ReactNode } from "react";
import RentAHome from './../assets/rentahome.svg';
import SellAHome from './../assets/sellahome.svg';
import BuyAHome from './../assets/buyahome.svg';
import ExperienceAgent from './../assets/experienceagent.svg';
import MembershipSupport from './../assets/membersupport.svg';
export type ServicesSettings = {
    id: number;
    icon: ReactNode,
    title: string,
    subText: string
}

export const Services: ServicesSettings[] = [
    {
        id: 0,
        icon: <img src={RentAHome} alt="rent a home" />,
        title: 'Rent a Home',
        subText:'Discover a wide range of rental properties that cater to your needs and budget. Whether you’re looking for a cozy apartment or a spacious house, we provide detailed listings and professional assistance to help you find the perfect rental home.'
    },
    {
        id:1,
        icon: <img src={SellAHome} alt="sell a home" />,
        title: 'Sell a Home',
        subText:'Looking to sell your home? Our experienced team offers comprehensive marketing strategies and expert advice to ensure a smooth and successful sale. We’ll help you get the best price for your property and guide you through every step of the process.'
    },
    {
        id:2,
        icon: <img src={BuyAHome} alt="buy a home" />,
        title: 'Buy a Home',
        subText: 'Find your dream home with our extensive listings of properties for sale. Our knowledgeable agents will work with you to understand your needs and preferences, providing personalized recommendations and support to make your home-buying experience seamless and enjoyable.'
    },
    {
        id:3,
        icon: <img src={ExperienceAgent} alt="experience agent" />,
        title: 'Experience Agent',
        subText: 'Our experienced agents are dedicated to providing exceptional service and expert guidance. With in-depth knowledge of the real estate market, they will help you navigate the complexities of buying, selling, or renting a home, ensuring a smooth and successful transaction.'
    },
    {
        id:4,
        icon: <img src={MembershipSupport} alt="membership support" />,
        title: 'Member Support',
        subText: 'Our dedicated member support team is here to assist you with any questions or concerns. Whether you need help with your account, property listings, or any other aspect of our services, we are committed to providing prompt and effective support to ensure your satisfaction.'
    } 
]