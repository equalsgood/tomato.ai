import React, { memo, useContext, useEffect, useState } from 'react';
import cls from './Header.module.css';
import HeaderLogo from 'shared/assets/logos/header-logo.svg';
import HeaderLightLogo from 'shared/assets/logos/header-light-logo.svg';
import { Navigation } from './components/Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';
import { RoutePaths } from 'app/providers/AppRouter';
import classNames from 'classnames';
import { Context } from 'app/providers/ContextProvider';
import { MobileHeader } from 'widgets/Header/components/MobileHeader/MobileHeader';

export const Header = memo(() => {
    const location = useLocation();
    const [isCurrentLocationEnterprise, setIsCurrentLocationEnterprise] = useState(location.pathname === RoutePaths.BPO);
    const { isMobile } = useContext(Context);

    useEffect(() => {
        setIsCurrentLocationEnterprise(location.pathname === RoutePaths.ENTERPRISE);
    }, [location]);

    if(isMobile) {
        return (
            <MobileHeader isEnterprise={isCurrentLocationEnterprise}/>
        );
    }

    return (
        <header className={classNames(cls.header, { [cls.dark]: isCurrentLocationEnterprise })}>
            <div className={cls.content}>
                <Link className={cls.logo} to={RoutePaths.HOME}>
                    {isCurrentLocationEnterprise ?
                        <HeaderLightLogo/> :
                        <HeaderLogo/>
                    }
                </Link>
                <Navigation isEnterprise={isCurrentLocationEnterprise}/>
            </div>
        </header>
    );
});

Header.displayName = 'Header';