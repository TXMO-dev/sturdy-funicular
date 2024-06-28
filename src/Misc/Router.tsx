import { createBrowserRouter } from "react-router-dom";
import { Navigation } from "./NavSettings";
import FeaturedListDetailPage from "../Pages/FeaturedListDetailPage";

const navRoutes = [
    ...Navigation.map(res => ({
        path: res.route,
        element: res.routeComponent
    }))
];

const featuredListDetailNavigation = {
    path: '/featured-list/:id',
    element: <FeaturedListDetailPage />
}
export const router = createBrowserRouter([...navRoutes,featuredListDetailNavigation]);