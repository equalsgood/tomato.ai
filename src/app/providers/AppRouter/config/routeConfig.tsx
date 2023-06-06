import { Navigate, RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { BPOsPage } from 'pages/BPOsPage';

export enum AppRoutes {
    HOME = 'home',
    BPOs = 'bpos',
    NO_MATCH = 'noMatch'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.BPOs]: '/bpos',
    [AppRoutes.NO_MATCH]: '*',
};

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePaths.home,
        element: <HomePage/>,
    },
    {
        path: RoutePaths.bpos,
        element: <BPOsPage/>,
    },
    {
        path: RoutePaths.noMatch,
        element: <Navigate to={RoutePaths.home} replace />,
    },
];