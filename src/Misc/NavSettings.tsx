import { ReactNode } from "react";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import PropertiesPage from "../Pages/PropertiesPage";
import ContactUsPage from "../Pages/ContactUsPage";

type NaveSetting = {
    id: number;
    name: string;
    route: string;
    routeComponent:ReactNode;
}

export const Navigation: NaveSetting[] = [
    {
        id:0,
        name:'Home',
        route:'/',
        routeComponent: <HomePage />
    },
    {
        id: 1,
        name: 'About',
        route: '/about',
        routeComponent: <AboutPage />
    },
    {
        id: 2,
        name: 'Services',
        route: '/services',
        routeComponent: <ServicesPage />
    },
    {
        id: 3,
        name: 'Properties',
        route: '/properties',
        routeComponent: <PropertiesPage />
    },
    {
        id: 4,
        name: 'Contact',
        route: '/contact',
        routeComponent: <ContactUsPage />
    }
]