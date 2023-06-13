import React from 'react';
import cls from './Navigation.module.css';
import { NavigationLinkProps, NavigationLinkVariants, NavigationLink, NavigationDropdown } from 'shared/components/';
import { RoutePaths } from 'app/providers/AppRouter';
import BpoIcon from 'shared/assets/icons/bpo-header-icon.svg';
import EnterprisesIcon from 'shared/assets/icons/enterprises-header-icon.svg';

export const Navigation = () => {
    return (
        <nav className={cls.navigation}>
            <NavigationDropdown width={260} title="Use Cases">
                <div className={cls.linksTitle}>
                    <BpoIcon/>
                    <p>BPOs</p>
                </div>
                <div className={cls.useCasesLinks}>
                    {bpoLinks.map(link =>
                        <NavigationLink
                            key={`bpo-${link.text}-header-navigation`}
                            text={link.text}
                            to={link.to}
                            variant={link.variant}
                        />
                    )}
                </div>
                <div className={cls.linksTitle}>
                    <EnterprisesIcon/>
                    <p>Enterprises</p>
                </div>
                <div className={cls.useCasesLinks}>
                    {enterprisesLinks.map(link =>
                        <NavigationLink
                            key={`enterprises-${link.text}-header-navigation`}
                            text={link.text}
                            to={link.to}
                            variant={link.variant}
                        />
                    )}
                </div>
            </NavigationDropdown>
            <NavigationDropdown width={150} title="Company">
                {companyLinks.map(link =>
                    <NavigationLink
                        key={`${link.text}-header-navigation`}
                        text={link.text}
                        to={link.to}
                        variant={link.variant}
                    />
                )}
            </NavigationDropdown>
            <NavigationDropdown width={150} title="Safety">
                {safetyLinks.map(link =>
                    <NavigationLink
                        key={`${link.text}-header-navigation`}
                        text={link.text}
                        to={link.to}
                        variant={link.variant}
                    />
                )}
            </NavigationDropdown>
            { navigationLinks.map(link =>
                <NavigationLink
                    key={`${link.text}-header-navigation`}
                    text={link.text}
                    to={link.to}
                    variant={link.variant}
                    classNamesProps={link.classNamesProps}
                />
            ) }
        </nav>
    );
};

const bpoLinks: Array<NavigationLinkProps> = [
    {
        text: 'Overview',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'ROI Calculator',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
];

const enterprisesLinks: Array<NavigationLinkProps> = [
    {
        text: 'Overview',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'ROI Calculator',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
];

const companyLinks: Array<NavigationLinkProps> = [
    {
        text: 'About',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Pricing',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Careers',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
];

const safetyLinks: Array<NavigationLinkProps> = [
    {
        text: 'Security',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Ethics',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    }
];

const navigationLinks: Array<NavigationLinkProps> = [
    {
        text: 'Blog',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Request Demo',
        to: RoutePaths.HOME,
        variant: NavigationLinkVariants.ACTION,
        classNamesProps: cls.actionLink
    }
];