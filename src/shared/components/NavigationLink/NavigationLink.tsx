import React, { memo } from 'react';
import { RoutePaths } from 'app/providers/AppRouter';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import cls from './NavigationLink.module.css';

export enum NavigationLinkVariants {
    DEFAULT = 'default',
    ACTION = 'action',
    FOOTER = 'footer',
}

export interface NavigationLinkProps {
    text: string;
    to: RoutePaths;
    variant: NavigationLinkVariants;
}

export const NavigationLink = memo((props: NavigationLinkProps) => {
    const { text, to, variant } = props;
    const classes = classNames(cls.navigationLink, cls[variant]);

    return (
        <Link to={to} className={classes}>
            {text}
        </Link>
    );
});

NavigationLink.displayName = 'NavigationLink';