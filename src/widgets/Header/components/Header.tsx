import React, { memo } from 'react';
import cls from './Header.module.css';
import HeaderLogo from 'shared/assets/logos/header-logo.svg';
import { Navigation } from './Navigation';

export const Header = memo(() => {
    return (
        <header className={cls.header}>
            <HeaderLogo/>
            <Navigation/>
        </header>
    );
});

Header.displayName = 'Header';