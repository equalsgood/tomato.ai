import React, { useState } from 'react';
import cls from './Navigation.module.css';
import { NavigationLinkProps, NavigationLinkVariants, NavigationLink, NavigationDropdown } from 'shared/components/';
import { RoutePaths } from 'app/providers/AppRouter';
import BpoIcon from 'shared/assets/icons/bpo-header-icon.svg';
import EnterprisesIcon from 'shared/assets/icons/enterprises-header-icon.svg';

interface NavigationProps {
    isEnterprise: boolean;
}

export const Navigation = ({ isEnterprise }: NavigationProps) => {
    const [casesDropdownOpen, setCasesDropdownOpen] = useState<boolean>(false);
    const [companyDropdownOpen, setCompanyDropdownOpen] = useState<boolean>(false);
    const [safetyDropdownOpen, setSafetyDropdownOpen] = useState<boolean>(false);

    const switchCasesDropdownState = (state: boolean) =>
        setCasesDropdownOpen(state);

    const switchCompanyDropdownState = (state: boolean) =>
        setCompanyDropdownOpen(state);

    const switchSafetyDropdownState = (state: boolean) =>
        setSafetyDropdownOpen(state);

    return (
        <nav className={cls.navigation}>
            <NavigationDropdown
                classNamesProps={cls.casesDropdown}
                title="Use Cases"
                isEnterprise={isEnterprise}
                open={casesDropdownOpen}
                changeDropdownState={switchCasesDropdownState}
            >
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
                            isEnterprise={isEnterprise}
                            onClick={() => switchCasesDropdownState(false)}
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
                            isEnterprise={isEnterprise}
                            onClick={() => switchCasesDropdownState(false)}
                        />
                    )}
                </div>
            </NavigationDropdown>
            <NavigationDropdown
                classNamesProps={cls.companyDropdown}
                title="Company"
                isEnterprise={isEnterprise}
                open={companyDropdownOpen}
                changeDropdownState={switchCompanyDropdownState}
            >
                <div className={cls.defaultLinks}>
                    {companyLinks.map(link =>
                        <NavigationLink
                            key={`${link.text}-header-navigation`}
                            text={link.text}
                            to={link.to}
                            variant={link.variant}
                            isEnterprise={isEnterprise}
                            onClick={() => switchCompanyDropdownState(false)}
                        />
                    )}
                </div>
            </NavigationDropdown>
            <NavigationDropdown
                classNamesProps={cls.companyDropdown}
                title="Safety"
                isEnterprise={isEnterprise}
                open={safetyDropdownOpen}
                changeDropdownState={switchSafetyDropdownState}
            >
                <div className={cls.defaultLinks}>
                    {safetyLinks.map(link =>
                        <NavigationLink
                            key={`${link.text}-header-navigation`}
                            text={link.text}
                            to={link.to}
                            variant={link.variant}
                            isEnterprise={isEnterprise}
                            onClick={() => switchSafetyDropdownState(false)}
                        />
                    )}
                </div>
            </NavigationDropdown>
            { navigationLinks.map(link =>
                <NavigationLink
                    key={`${link.text}-header-navigation`}
                    text={link.text}
                    to={link.to}
                    variant={link.variant}
                    classNamesProps={link.classNamesProps}
                    isEnterprise={isEnterprise}
                />
            ) }
        </nav>
    );
};

const bpoLinks: Array<NavigationLinkProps> = [
    {
        text: 'Overview',
        to: RoutePaths.BPO,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'ROI Calculator',
        to: RoutePaths.BPO_CALCULATOR,
        variant: NavigationLinkVariants.DEFAULT,
    },
];

const enterprisesLinks: Array<NavigationLinkProps> = [
    {
        text: 'Overview',
        to: RoutePaths.ENTERPRISE,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'ROI Calculator',
        to: RoutePaths.ENTERPRISE_CALCULATOR,
        variant: NavigationLinkVariants.DEFAULT,
    },
];

const companyLinks: Array<NavigationLinkProps> = [
    {
        text: 'About',
        to: RoutePaths.ABOUT,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Pricing',
        to: RoutePaths.PRICING,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Careers',
        to: RoutePaths.CAREERS,
        variant: NavigationLinkVariants.DEFAULT,
    },
];

const safetyLinks: Array<NavigationLinkProps> = [
    {
        text: 'Security',
        to: RoutePaths.SECURITY,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Ethics',
        to: RoutePaths.ETHICS,
        variant: NavigationLinkVariants.DEFAULT,
    }
];

const navigationLinks: Array<NavigationLinkProps> = [
    {
        text: 'Blog',
        to: RoutePaths.BLOG,
        variant: NavigationLinkVariants.DEFAULT,
    },
    {
        text: 'Request Demo',
        to: RoutePaths.REQUEST_DEMO,
        variant: NavigationLinkVariants.ACTION,
        classNamesProps: cls.actionLink
    }
];