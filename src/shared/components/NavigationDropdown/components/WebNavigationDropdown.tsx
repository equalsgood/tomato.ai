import cls from '../NavigationDropdown.module.css';
import classNames from 'classnames';
import DropdownIconOpen from 'shared/assets/icons/arrow-dropdown-up.svg';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down.svg';
import React, { ReactNode } from 'react';

interface WebNavigationDropdownProps {
    title: string;
    children: ReactNode;
    isEnterprise: boolean;
    open: boolean;
    changeDropdownState: (state: boolean) => void;
    classNamesProps?: string | undefined;
    mobile?: boolean;
}

export const WebNavigationDropdown = (props: WebNavigationDropdownProps) => {
    const { children, title, isEnterprise, open, changeDropdownState, classNamesProps } = props;

    return (
        <div
            onMouseEnter={() => changeDropdownState(true)}
            onMouseLeave={() => changeDropdownState(false)}
            className={classNames(cls.dropdownContainer, { [cls.dark]: isEnterprise, [cls.open]: open })}
        >
            <button onClick={() => changeDropdownState(true)} className={cls.dropdownButton}>
                {title}
                <div className={cls.icon}>
                    {open ?
                        <DropdownIconOpen/> :
                        <DropdownIconClose fill={isEnterprise ? '#fff' : '#161414'}/>
                    }
                </div>
            </button>
            {open &&
                <React.Fragment>
                    <div className={classNames(cls.dropdown, classNamesProps)}>
                        {children}
                    </div>
                </React.Fragment>
            }
        </div>
    );
};