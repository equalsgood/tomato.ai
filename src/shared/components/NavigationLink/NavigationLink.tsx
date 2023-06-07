import React from 'react';
import { RoutePaths } from 'app/providers/AppRouter';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import cls from './NavigationLink.module.css';
import DropdownIcon from 'shared/assets/icons/arrow-header-dropdown.svg';

export enum NavigationLinkVariants {
    DEFAULT = 'default',
    DROPDOWN = 'dropdown',
    ACTION = 'action',
    FOOTER = 'footer',
}

export interface NavigationLinkProps {
    text: string;
    to: RoutePaths;
    variant: NavigationLinkVariants;
}

export const NavigationLink = (props: NavigationLinkProps) => {
    const { text, to, variant } = props;
    const classes = classNames(cls.navigationLink, cls[variant]);

    return (
        <Link to={to} className={classes}>
            {text}
            {variant === 'dropdown' && <DropdownIcon/>}
        </Link>
    );
};