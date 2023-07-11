import React, { memo, ReactNode } from 'react';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down.svg';
import DropdownIconOpen from 'shared/assets/icons/arrow-dropdown-up.svg';
import cls from './NavigationDropdown.module.css';
import classNames from 'classnames';

interface NavigationDropdownProps {
    title: string;
    children: ReactNode;
    isEnterprise: boolean;
    open: boolean;
    changeDropdownState: (state: boolean) => void;
    classNamesProps?: string;
    mobile?: boolean;
}

export const NavigationDropdown = memo((props: NavigationDropdownProps) => {
    const { children, title, isEnterprise, open, changeDropdownState, classNamesProps, mobile } = props;

    return (
        <div className={classNames(cls.dropdownContainer, { [cls.dark]: isEnterprise, [cls.open]: open })}>
            <button onClick={() => changeDropdownState(true)} className={cls.dropdownButton}>
                {title}
                <div className={cls.icon}>
                    {open ?
                        <DropdownIconOpen/> :
                        <DropdownIconClose fill={isEnterprise ? '#fff' : '#161414'}/>
                    }
                </div>
            </button>
            {!mobile && open &&
                <React.Fragment>
                    <div className={classNames(cls.dropdown, classNamesProps)}>
                        {children}
                    </div>
                    <div onClick={() => changeDropdownState(false)} className={cls.overlay}/>
                </React.Fragment>
            }
            {mobile &&
                <React.Fragment>
                    <div className={classNames(cls.dropdown, classNamesProps)}>
                        {children}
                    </div>
                    <div onClick={() => changeDropdownState(false)} className={cls.overlay}/>
                </React.Fragment>
            }
        </div>
    );
});
NavigationDropdown.displayName = 'NavigationDropdown';