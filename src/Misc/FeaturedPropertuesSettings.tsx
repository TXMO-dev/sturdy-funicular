import { ReactNode } from "react"
import FeaturedMain1 from './../assets/featuredproperties/featuredpropertymain1.jpeg' 
import Feature2 from './../assets/featuredproperties/featuredproperty2.jpg'
import Feature3 from './../assets/featuredproperties/featuredproperty3.jpg'
import Feature4 from './../assets/featuredproperties/featuredproperty4.jpg'
import Feature5 from './../assets/featuredproperties/featuredproperty8.jpg'
import FeaturedMainUlti from './../assets/featuredproperties/featuredproperty5.jpg';
import Feature6 from './../assets/featuredproperties/featuredproperty6.jpg';
import Feature7 from './../assets/featuredproperties/featuredproperty7.jpg';
import Bed from './../assets/featuredproperties/bed.svg'
import Bath from './../assets/featuredproperties/Bath.svg'
import Parking from './../assets/featuredproperties/parking.svg'
import CantomentMain from './../assets/featuredproperties/featuredcantomentmain.jpg';
import CantomentOne from './../assets/featuredproperties/featuredcantoment1.jpg';
import CantomentTwo from './../assets/featuredproperties/featuredcantoment2.jpg';
import CantomentThree from './../assets/featuredproperties/featuredcantoment3.jpg';
import CommunityMain from './../assets/featuredproperties/25MainHouse.jpg';
import CommunityOne from './../assets/featuredproperties/community1.jpg';
import CommunityTwo from './../assets/featuredproperties/community2.jpg';
import CommunityThree from './../assets/featuredproperties/community3.jpg';
import TwentyFourMain from './../assets/featuredproperties/24MainHouse.jpg';
import TwentyFourSecond from './../assets/featuredproperties/24SecondHouse.jpg';
import TwentyFourThird from './../assets/featuredproperties/24ThirdHouse.jpg';
import TwentyFourFourth from './../assets/featuredproperties/24FourthHouse.jpg';
import EastLegonMain from './../assets/featuredproperties/eastlegonmain.jpg';
import EastLegonOne from './../assets/featuredproperties/eastlegon1.jpg';
import EastLegonTwo from './../assets/featuredproperties/eastlegon2.jpg';
import EastLegonThree from './../assets/featuredproperties/eastlegon3.jpg';  
export type FeaturedPropertiesSettingsType = {
    id: number,
    location: string,
    name: string,
    subDescription: string,
    price: string,
    features:{
        id: number,
        type: string,
        icon: ReactNode
    }[],
    saleType: string,
    about: {
        aboutHeading: string,
        aboutDescription: string,
        aboutQuote: string
    },
    agent: {
        agentDescription: string,
        agentPhoto?: string,
        agentName: string, 
        agentContact: {
            email: string,
            phoneNumber: string
        }

    },
    photoGallery:{
        id: number,
        urlPath: string
    }[],
    datePosted: string
 }

export const FeaturedProperties: FeaturedPropertiesSettingsType[] = [
    {
        id: 0,
        location: "East-Legon, Greater Accra Region, Ghana",
        name: "East Legon Estate House",
        subDescription: "Luxurious apartment located within East Legon for sale",
        price: "$220,000",  
        features: [
            { id: 0, type: "3 Beds", icon: <img src={Bed} alt="bed"/> },
            { id: 1, type: "4 Baths", icon: <img src={Bath} alt="bath"/> },
            { id: 2, type: "2 Parking", icon: <img src={Parking} alt="parking"/> },
            // { id: 3, type: "120sqft", icon: <img src={Measurement} alt="measurement"/> }
        ],
        saleType: "For Sale",
        about: {
            aboutHeading: "About this Property",
            aboutDescription: "This stunning fully furnished apartment located within Adjirigannor in the east legon area of greater accra speaks of class and good taste of wealth.",
            aboutQuote: "\"Real estate is about the safest investment in the world.\" - Franklin D. Roosevelt"
        },
        agent: {
            agentDescription: "Dedicated real estate professional with expertise in buying and selling of properties.",
            agentName: "Dennis Bimpong",
            agentContact: {
                email: "dennis.bimpong@alakadosproperties.com",
                phoneNumber: "+233 26 936 9806 / +233 59 905 3150"
            }
        },
        photoGallery: [
            { id: 0, urlPath: FeaturedMain1 },
            { id: 1, urlPath: Feature2 },
            { id: 2, urlPath: Feature3 },
            { id: 3, urlPath: Feature4}
        ],
        datePosted: "2024-04-03T00:00:00Z"
    },
    {
        id: 1,
        location: "Greater Accra Region, Ghana",
        name: "West Airport Estate House",
        subDescription: "West Airport gated community estate house located withn one of the prime areas within Accra.",
        price: "$750,000",
        features: [
            { id: 0, type: "4 Beds", icon: <img src={Bed} alt="bed"/> },
            { id: 1, type: "5 Baths", icon: <img src={Bath} alt="bath"/> },
            { id: 2, type: "3 Parking", icon: <img src={Parking} alt="parking"/> }
        ],
        saleType: "For Sale",
        about: {
            aboutHeading: "About this Property",
            aboutDescription: "Indulge in luxury living with this spacious villa featuring high-end finishes, lush landscaping, and a tranquil outdoor oasis.",
            aboutQuote: "\"The best investment on Earth is earth.\" - Louis Glickman"
        },
        agent: {
            agentDescription: "Experienced real estate agent specializing in luxury properties.",
            agentName: "Dennis Bimpong",
            agentContact: {
                email: "dennis.bimpong@alakadosproperties.com",
                phoneNumber: "+233 26 936 9806 / +233 59 905 3150"
            }
        },
        photoGallery: [
            { id: 0, urlPath: FeaturedMainUlti },
            { id: 1, urlPath: Feature5 },
            { id: 2, urlPath: Feature6 },
            { id: 3, urlPath: Feature7}
        ],
        datePosted: "2024-04-03T00:00:00Z"
    },
    {
        id: 2,
        location: "Greater Accra Region, Ghana",
        name: "Cantoment House",
        subDescription: "5 Bedroom house located in cantoment in the greater accra region.",
        price: "$1,500,000",
        features: [
            { id: 0, type: "5 Beds", icon: <img src={Bed} alt="bed"/> },
            { id: 1, type: "6 Baths", icon: <img src={Bath} alt="bath"/> },
            { id: 2, type: "6 Parking", icon: <img src={Parking} alt="parking"/> },
        ],
        saleType: "For Sale",
        about: {
            aboutHeading: "About this Property",
            aboutDescription: "Enjoy breathtaking sunsets and a beachfront lifestyle with this contemporary house located in cantoment.",
            aboutQuote: "\"Owning a home is a keystone of wealth... both financial affluence and emotional security.\" - Suze Orman"
        },
        agent: {
            agentDescription: "Specializing in real estates with a vast experience",
            agentName: "Dennis Bimpong",
            agentContact: {
                email: "dennis.bimpong@alakadosproperties.com",
                phoneNumber: "+233 26 936 9806 / +233 59 905 3150"
            }
        },
        photoGallery: [
            { id: 0, urlPath: CantomentMain },
            { id: 1, urlPath: CantomentOne },
            { id: 2, urlPath: CantomentTwo },
            { id: 3, urlPath: CantomentThree}
        ],
        datePosted: "2024-04-03T00:00:00Z"
    },
    {
        id: 3,
        location: "Tema, Ghana",
        name: "Community 25 House",
        subDescription: "Stunning view of an estate house located in commmunity 25",
        price: "$170,000",
        features: [
            { id: 0, type: "4 Beds", icon: <img src={Bed} alt="bed"/> },
            { id: 1, type: "5 Baths", icon: <img src={Bath} alt="bath"/> },
            { id: 2, type: "3 Parking", icon: <img src={Parking} alt="parking"/> }
        ],
        saleType: "For Sale",
        about: {
            aboutHeading: "About this Property",
            aboutDescription: "Escape to this beauty offering unparalleled serenity and panoramic views of the surrounding landscape.",
            aboutQuote: "\"Real estate is about the safest investment in the world.\" - Franklin D. Roosevelt"
        },
        agent: {
            agentDescription: "Experienced in luxury estate properties.",
            agentName: "Dennis Bimpong",
            agentContact: {
                email: "dennis.bimpong@alakadosproperties.com",
                phoneNumber: "+233 26 936 9806 / +233 59 905 3150"
            }
        },
        photoGallery: [
            { id: 0, urlPath: CommunityMain },
            { id: 1, urlPath: CommunityOne },
            { id: 2, urlPath: CommunityTwo },
            { id: 3, urlPath: CommunityThree}
        ],
        datePosted: "2024-04-03T00:00:00Z"
    },
    {
        id: 4,
        location: "Greater Accra Region, Ghana",
        name: "Community 24 House",
        subDescription: "A Luxurious estate house located in a gated community in Tema, Ghana",
        price: "$170,000",
        features: [
            { id: 0, type: "4 Beds", icon: <img src={Bed} alt="bed"/> },
            { id: 1, type: "5 Baths", icon: <img src={Bath} alt="bath"/> },
            { id: 2, type: "3 Parking", icon: <img src={Parking} alt="parking"/> }
        ],
        saleType: "For Sale",
        about: {
            aboutHeading: "About this Property",
            aboutDescription: "Experience the epitome of luxury living in this exquisite view, boasting unparalleled and opulent amenities.",
            aboutQuote: "\"Owning a home is a keystone of wealth... both financial affluence and emotional security.\" - Suze Orman"
        },
        agent: {
            agentDescription: "Specializes in Real estate development.",
            agentName: "Dennis Bimpong",
            agentContact: {
                email: "dennis.bimpong@alakadosproperties.com",
                phoneNumber: "+233 26 936 9806 / +233 59 905 3150"
            }
        },
        photoGallery: [
            { id: 0, urlPath: TwentyFourMain },
            { id: 1, urlPath: TwentyFourSecond },
            { id: 2, urlPath: TwentyFourThird },
            { id: 3, urlPath: TwentyFourFourth}
        ],
        datePosted: "2024-04-03T00:00:00Z"
    },
    {
        id: 5,
        location: "Greater Accra Region, Ghana",
        name: "East Legon Premium House",
        subDescription: "Chic loft apartment in the heart of the city",
        price: "$350,000",
        features: [
            { id: 0, type: "4 Beds", icon: <img src={Bed} alt="bed"/> },
            { id: 1, type: "5 Baths", icon: <img src={Bath} alt="bath"/> },
            { id: 2, type: "5 Parking", icon: <img src={Parking} alt="parking"/> }
        ],
        saleType: "For Sale",   
        about: {
            aboutHeading: "About this Property",
            aboutDescription: "Embrace modern urban living in this stylish loft apartment featuring sleek design, high ceilings, and panoramic city views.",
            aboutQuote: "\"Home is not a place, it's a feeling.\" - Unknown"
        },
        agent: {
            agentDescription: "Specializes in urban properties and luxury apartments.",
            agentName: "Dennis Bimpong",
            agentContact: {
                email: "dennis.bimpong@alakadosproperties.com",
                phoneNumber: "+233 26 936 9806 / +233 59 905 3150"
            }
        },
        photoGallery: [
            { id: 0, urlPath: EastLegonMain },
            { id: 1, urlPath: EastLegonOne },
            { id: 2, urlPath: EastLegonTwo },
            { id: 3, urlPath: EastLegonThree} 
        ],
        datePosted: "2024-04-03T00:00:00Z"
    },
];
