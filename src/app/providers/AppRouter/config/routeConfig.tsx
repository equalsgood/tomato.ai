import { Navigate, RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { BPOPage } from 'pages/BPOPage';
import { EnterprisePage } from 'pages/EnterprisePage';

export enum RoutePaths {
    HOME = '/',
    BPO = '/bpo',
    ENTERPRISE = '/enterprise',
    NO_MATCH = '*'
}

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePaths.HOME,
        element: <HomePage/>,
    },
    {
        path: RoutePaths.BPO,
        element: <BPOPage/>,
    },
    {
        path: RoutePaths.ENTERPRISE,
        element: <EnterprisePage/>,
    },
    {
        path: RoutePaths.NO_MATCH,
        element: <Navigate to={RoutePaths.HOME} replace />,
    },
];