import React, { ReactNode, useState } from 'react';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down.svg';
import DropdownIconOpen from 'shared/assets/icons/arrow-dropdown-up.svg';
import cls from './NavigationDropdown.module.css';
import classNames from 'classnames';

interface NavigationDropdownProps {
    title: string;
    children: ReactNode;
    width: number;
    isEnterprise: boolean;
}

export const NavigationDropdown = (props: NavigationDropdownProps) => {
    const { children, title, width, isEnterprise } = props;
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const dropdownClickHandler = () => setIsDropdownOpen(prev => !prev);

    return (
        <div className={classNames(cls.dropdownContainer, { [cls.dark]: isEnterprise })}>
            <button onClick={dropdownClickHandler} className={cls.dropdownButton}>
                {title}
                {isDropdownOpen ?
                    <DropdownIconOpen/> :
                    <DropdownIconClose fill={isEnterprise ? '#fff' : '#161414'}/>
                }
            </button>
            {isDropdownOpen &&
                <React.Fragment>
                    <div style={{ width }} className={cls.dropdown}>
                        {children}
                    </div>
                    <div onClick={() => setIsDropdownOpen(false)} className={cls.overlay}/>
                </React.Fragment>
            }
        </div>
    );
};