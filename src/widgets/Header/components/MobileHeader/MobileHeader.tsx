import cls from './MobileHeader.module.css';
import { RoutePaths } from 'app/providers/AppRouter';
import HeaderLogo from 'shared/assets/logos/header-logo.svg';
import HeaderLightLogo from 'shared/assets/logos/header-light-logo.svg';
import MenuIcon from 'shared/assets/icons/menu.svg';
import MenuLightIcon from 'shared/assets/icons/menu-light.svg';
import MenuCloseIcon from 'shared/assets/icons/menu-close.svg';
import MenuCloseLightIcon from 'shared/assets/icons/menu-close-light.svg';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Navigation } from '../Navigation/Navigation';

interface MobileHeaderProps {
    isEnterprise: boolean
}

export const MobileHeader = ({ isEnterprise }: MobileHeaderProps) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(prev => !prev);
    };

    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        <header className={classNames(cls.header, { [cls.dark]: isEnterprise, [cls.open]: open })}>
            <div className={cls.topBar}>
                <Link className={cls.logo} to={RoutePaths.HOME}>
                    {isEnterprise ?
                        <HeaderLightLogo/> :
                        <HeaderLogo/>
                    }
                </Link>
                <button type="button" className={cls.button} onClick={toggleOpen}>
                    {open ?
                        <>
                            {isEnterprise ?
                                <MenuCloseLightIcon/> :
                                <MenuCloseIcon/>
                            }
                        </> :
                        <>
                            {isEnterprise ?
                                <MenuLightIcon/> :
                                <MenuIcon/>
                            }
                        </>
                    }
                </button>
            </div>
            <Navigation
                open={open}
                mobile
                isEnterprise={isEnterprise}
            />
        </header>
    );
};