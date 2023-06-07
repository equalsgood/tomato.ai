import React from 'react';
import cls from './Navigation.module.css';
import { NavigationLinkProps, NavigationLinkVariants, NavigationLink } from 'shared/components/';
import { RoutePaths } from 'app/providers/AppRouter';

export const Navigation = () => {
    return (
        <nav className={cls.navigation}>
            { navigationConfig.map(link =>
                <NavigationLink
                    key={`${link.text}-header-navigation`}
                    text={link.text}
                    to={link.to}
                    variant={link.variant}
                />
            ) }
        </nav>
    );
};

const navigationConfig: Array<NavigationLinkProps> = [
    {
        text: 'Use Cases',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DROPDOWN,
    },
    {
        text: 'Company',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DROPDOWN,
    },
    {
        text: 'ROI Calculator',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Pricing',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Blog',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Request Demo',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.ACTION,
    },
];