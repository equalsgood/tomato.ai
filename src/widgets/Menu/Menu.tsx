import cls from './Menu.module.css';
import { useState } from 'react';
import classNames from 'classnames';
import { SingleMenuItem } from './components/SingleMenuItem/SingleMenuItem';

const MENU_ITEM_HEIGHT = 70;

export interface MenuItem {
    title: string,
    iconLight?: JSX.Element,
    iconDark?: JSX.Element,
}

interface MenuProps {
    isEnterprise?: boolean | undefined;
    items: Array<MenuItem>;
    onItemChange: (itemIndex: number) => void;
    withIcon: boolean;
}

export const Menu = (props: MenuProps) => {
    const { isEnterprise, items, onItemChange, withIcon } = props;
    const [currentActiveMenuItem, setCurrentActiveMenuItem] = useState<number>(0);
    const [selectOffset, setSelectOffset] = useState<string>('translateY(0px)');

    const changeItemHandler = (index: number) => {
        setCurrentActiveMenuItem(index);
        setSelectOffset(`translateY(${MENU_ITEM_HEIGHT * index}px)`);
        onItemChange(index);
    };

    return (
        <ul className={classNames(cls.menuItems, { [cls.dark]: isEnterprise })}>
            {items.map((item, index) =>
                <SingleMenuItem
                    key={item.title}
                    active={currentActiveMenuItem === index}
                    item={item}
                    index={index}
                    onItemChange={changeItemHandler}
                    isEnterprise={isEnterprise}
                    withIcon={withIcon}
                />
            )}
            <div className={cls.select} style={{ transform: selectOffset }}></div>
        </ul>
    );
};