import { RouteProps } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { BPOsPage } from "pages/BPOsPage";

export enum AppRoutes {
    HOME = "home",
    BPOs = "bpos",
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.BPOs]: "/bpos",
};

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePaths.home,
        element: <HomePage/>,
    },
    {
        path: RoutePaths.bpos,
        element: <BPOsPage/>,
    }
];