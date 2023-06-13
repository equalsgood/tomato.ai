import React, { memo } from 'react';
import { RoutePaths } from 'app/providers/AppRouter';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import cls from './NavigationLink.module.css';

export enum NavigationLinkVariants {
    DEFAULT = 'default',
    ACTION = 'action',
    OUTLINED = 'outlined',
    ACTION_BLUE = 'actionBlue',
    OUTLINED_BLUE = 'outlinedBlue',
    FOOTER = 'footer',
}

export interface NavigationLinkProps {
    text: string;
    to: RoutePaths;
    variant: NavigationLinkVariants;
    classNamesProps?: string | undefined;
    isEnterprise?: boolean;
}

export const NavigationLink = memo((props: NavigationLinkProps) => {
    const { text, to, variant, classNamesProps, isEnterprise = false } = props;
    const classes = classNames(cls.navigationLink, cls[variant], classNamesProps, { [cls.dark]: isEnterprise });

    return (
        <Link to={to} className={classes}>
            {text}
        </Link>
    );
});

NavigationLink.displayName = 'NavigationLink';