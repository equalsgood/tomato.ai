import React, { memo } from 'react';
import { RoutePaths } from 'app/providers/AppRouter';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import cls from './NavigationLink.module.css';
import ArrowGreenIcon from 'shared/assets/icons/arrow-green-right.svg';

export enum NavigationLinkVariants {
    DEFAULT = 'default',
    ACTION = 'action',
    OUTLINED = 'outlined',
    ACTION_BLUE = 'actionBlue',
    OUTLINED_BLUE = 'outlinedBlue',
    ACTION_TEXT = 'actionText',
    FOOTER = 'footer',
}

export interface NavigationLinkProps {
    text: string;
    to: RoutePaths;
    variant: NavigationLinkVariants;
    classNamesProps?: string | undefined;
    isEnterprise?: boolean;
    onClick?: () => void;
}

export const NavigationLink = memo((props: NavigationLinkProps) => {
    const { text, to, variant, classNamesProps, isEnterprise = false, onClick } = props;
    const classes = classNames(cls.navigationLink, cls[variant], classNamesProps, { [cls.dark]: isEnterprise });

    return (
        <Link to={to} className={classes} onClick={onClick}>
            {text}
            {variant === NavigationLinkVariants.ACTION_TEXT && <ArrowGreenIcon/>}
        </Link>
    );
});

NavigationLink.displayName = 'NavigationLink';