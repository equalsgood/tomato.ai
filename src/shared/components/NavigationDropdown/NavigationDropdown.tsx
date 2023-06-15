import React, { memo, ReactNode } from 'react';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down.svg';
import DropdownIconOpen from 'shared/assets/icons/arrow-dropdown-up.svg';
import cls from './NavigationDropdown.module.css';
import classNames from 'classnames';

interface NavigationDropdownProps {
    title: string;
    children: ReactNode;
    width: number;
    isEnterprise: boolean;
    open: boolean;
    changeDropdownState: (state: boolean) => void;
}

export const NavigationDropdown = memo((props: NavigationDropdownProps) => {
    const { children, title, width, isEnterprise, open, changeDropdownState } = props;

    return (
        <div className={classNames(cls.dropdownContainer, { [cls.dark]: isEnterprise })}>
            <button onClick={() => changeDropdownState(true)} className={cls.dropdownButton}>
                {title}
                {open ?
                    <DropdownIconOpen/> :
                    <DropdownIconClose fill={isEnterprise ? '#fff' : '#161414'}/>
                }
            </button>
            {open &&
                <React.Fragment>
                    <div style={{ width }} className={cls.dropdown}>
                        {children}
                    </div>
                    <div onClick={() => changeDropdownState(false)} className={cls.overlay}/>
                </React.Fragment>
            }
        </div>
    );
});
NavigationDropdown.displayName = 'NavigationDropdown';