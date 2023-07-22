import cls from './Menu.module.css';
import { ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SingleMenuItem } from './components/SingleMenuItem/SingleMenuItem';
import { Context } from 'app/providers/ContextProvider';

export interface MenuItem {
    title: string;
    iconLight?: JSX.Element;
    iconDark?: JSX.Element;
    relatedSectionId?: string;
    RelatedSectionComponent?: JSX.Element;
}

interface MenuProps {
    currentMenuItemIndex: number;
    isEnterprise?: boolean | undefined;
    items: Array<MenuItem>;
    onItemChange: (itemIndex: number) => void;
    withIcon: boolean;
}

// const MENU_ITEM_HEIGHT = 65;

export const Menu = (props: MenuProps) => {
    const { isMobile } = useContext(Context);
    const { isEnterprise, items, onItemChange, withIcon, currentMenuItemIndex } = props;
    const [itemHeight, setItemHeight] = useState<number>(65);
    const [selectOffset, setSelectOffset] = useState<string>('translateY(0px)');

    useEffect(() => {
        setItemHeight(isMobile ? 58 : 65);
    }, [isMobile]);
    
    useEffect(() => {
        setSelectOffset(`translateY(${itemHeight * currentMenuItemIndex}px)`);
    }, [currentMenuItemIndex, itemHeight]);

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