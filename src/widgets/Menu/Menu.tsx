import cls from './Menu.module.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SingleMenuItem } from './components/SingleMenuItem/SingleMenuItem';

const MENU_ITEM_HEIGHT = 65;

export interface MenuItem {
    title: string;
    iconLight?: JSX.Element;
    iconDark?: JSX.Element;
    relatedSectionId?: string;
}

interface MenuProps {
    currentMenuItemIndex: number;
    isEnterprise?: boolean | undefined;
    items: Array<MenuItem>;
    onItemChange: (itemIndex: number) => void;
    withIcon: boolean;
}

export const Menu = (props: MenuProps) => {
    const { isEnterprise, items, onItemChange, withIcon, currentMenuItemIndex } = props;
    const [selectOffset, setSelectOffset] = useState<string>('translateY(0px)');

    useEffect(() => {
        setSelectOffset(`translateY(${MENU_ITEM_HEIGHT * currentMenuItemIndex}px)`);    
    }, [currentMenuItemIndex]);

    return (
        <ul className={classNames(cls.menuItems, { [cls.dark]: isEnterprise })}>
            {items.map((item, index) =>
                <SingleMenuItem
                    key={item.title}
                    active={currentMenuItemIndex === index}
                    item={item}
                    index={index}
                    onItemChange={onItemChange}
                    isEnterprise={isEnterprise}
                    withIcon={withIcon}
                />
            )}
            <div className={cls.select} style={{ transform: selectOffset }}></div>
        </ul>
    );
};