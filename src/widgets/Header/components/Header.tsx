import React, { memo } from 'react';
import cls from './Header.module.css';
import HeaderLogo from 'shared/assets/logos/header-logo.svg';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';
import { RoutePaths } from 'app/providers/AppRouter';

export const Header = memo(() => {
    return (
        <header className={cls.header}>
            <Link to={RoutePaths.HOME}>
                <HeaderLogo/>
            </Link>
            <Navigation/>
        </header>
    );
});

Header.displayName = 'Header';