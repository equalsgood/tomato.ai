import { Navigate, RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { BpoPage } from 'pages/BpoPage';
import { EnterprisePage } from 'pages/EnterprisePage';
import { BpoCalculatorPage } from 'pages/BpoCalculatorPage';
import { EnterpriseCalculatorPage } from 'pages/EnterpriseCalculatorPage';
import { RequestDemoPage } from 'pages/RequestDemoPage';
import { PricingPage } from 'pages/PricingPage';
import { CareersPage } from 'pages/CareersPage';
import { AboutPage } from 'pages/AboutPage';
import { TermsPage, GuidelinesPage, PrivacyPage, EthicsPage, SecurityPage } from 'pages/terms';

export enum RoutePaths {
    HOME = '/',
    BPO = '/bpo',
    ENTERPRISE = '/enterprise',
    BPO_CALCULATOR = '/bpo-roi',
    ENTERPRISE_CALCULATOR = '/enterprise-roi',
    REQUEST_DEMO = '/request-demo',
    PRICING = '/pricing',
    CAREERS = '/careers',
    ABOUT = '/about',
    TERMS = '/terms',
    GUIDELINES = '/guidelines',
    PRIVACY = '/privacy',
    ETHICS = '/ethics',
    SECURITY = '/security',
    NO_MATCH = '*'
}

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePaths.HOME,
        element: <HomePage/>,
    },
    {
        path: RoutePaths.BPO,
        element: <BpoPage/>,
    },
    {
        path: RoutePaths.ENTERPRISE,
        element: <EnterprisePage/>,
    },
    {
        path: RoutePaths.BPO_CALCULATOR,
        element: <BpoCalculatorPage/>,
    },
    {
        path: RoutePaths.ENTERPRISE_CALCULATOR,
        element: <EnterpriseCalculatorPage/>,
    },
    {
        path: RoutePaths.REQUEST_DEMO,
        element: <RequestDemoPage/>,
    },
    {
        path: RoutePaths.PRICING,
        element: <PricingPage/>,
    },
    {
        path: RoutePaths.CAREERS,
        element: <CareersPage/>,
    },
    {
        path: RoutePaths.ABOUT,
        element: <AboutPage/>,
    },
    {
        path: RoutePaths.TERMS,
        element: <TermsPage/>,
    },
    {
        path: RoutePaths.PRIVACY,
        element: <PrivacyPage/>,
    },
    {
        path: RoutePaths.SECURITY,
        element: <SecurityPage/>,
    },
    {
        path: RoutePaths.ETHICS,
        element: <EthicsPage/>,
    },
    {
        path: RoutePaths.GUIDELINES,
        element: <GuidelinesPage/>,
    },
    {
        path: RoutePaths.NO_MATCH,
        element: <Navigate to={RoutePaths.HOME} replace />,
    },
];