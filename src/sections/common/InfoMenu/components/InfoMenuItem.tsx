import React, { memo } from 'react';
import cls from './InfoMenuItem.module.css';
import { Text, TextVariants } from 'shared/components';
import { menuItem } from '../InfoMenu';

interface InfoMenuItemProps {
    active: boolean;
    item: menuItem;
    index: number;
    onItemChange: (index: number) => void;
}

export const InfoMenuItem = memo((props: InfoMenuItemProps) => {
    const { active, item, index, onItemChange } = props;

    return (
        <li
            onClick={() => onItemChange(index)}
            className={cls.menuItem}
        >
            { active ?
                item.iconDark :
                item.iconLight
            }
            <Text
                tag="p"
                variant={active ? TextVariants.TITLE_SMALL : TextVariants.TITLE_SMALL_REVERSED}
            >
                {item.title}
            </Text>
        </li>
    );
});
InfoMenuItem.displayName = 'InfoMenuItem';