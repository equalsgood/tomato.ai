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
import { BlogPage } from 'pages/BlogPage';
import { hiddenLinks } from 'shared/lib';

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
    GUIDELINES = '/brand-guidelines',
    PRIVACY = '/privacy',
    ETHICS = '/ethics',
    SECURITY = '/security',
    BLOG = '/blog',
    NO_MATCH = '*'
}

export const getRouteConfig = (): Array<RouteProps> => {
    const routeConfig = initialRouteConfig;

    //temporary hidden links logic
    if(!hiddenLinks.blog)
        routeConfig.push({
            path: RoutePaths.BLOG,
            element: <BlogPage/>,
        });

    if(!hiddenLinks.terms)
        routeConfig.push({
            path: RoutePaths.TERMS,
            element: <TermsPage/>,
        });

    if(!hiddenLinks.pricing)
        routeConfig.push({
            path: RoutePaths.PRICING,
            element: <PricingPage/>,
        });

    if(!hiddenLinks.security)
        routeConfig.push({
            path: RoutePaths.SECURITY,
            element: <SecurityPage/>,
        });
    //

    return routeConfig;
};

const initialRouteConfig: Array<RouteProps> = [
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
        path: RoutePaths.CAREERS,
        element: <CareersPage/>,
    },
    {
        path: RoutePaths.ABOUT,
        element: <AboutPage/>,
    },
    {
        path: RoutePaths.PRIVACY,
        element: <PrivacyPage/>,
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
        element: <Navigate to={RoutePaths.HOME} replace/>,
    },
];