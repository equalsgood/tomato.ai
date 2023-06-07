import { Navigate, RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { BPOsPage } from 'pages/BPOsPage';

export enum RoutePaths {
    HOME = '/',
    BPOs = '/bpos',
    NO_MATCH = '*'
}

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePaths.HOME,
        element: <HomePage/>,
    },
    {
        path: RoutePaths.BPOs,
        element: <BPOsPage/>,
    },
    {
        path: RoutePaths.NO_MATCH,
        element: <Navigate to={RoutePaths.HOME} replace />,
    },
];