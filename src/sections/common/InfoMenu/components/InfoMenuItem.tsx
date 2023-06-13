import React, { memo } from 'react';
import cls from './InfoMenuItem.module.css';
import { Text, TextVariants } from 'shared/components';
import { menuItem } from '../InfoMenu';

interface InfoMenuItemProps {
    active: boolean;
    item: menuItem;
    index: number;
    onItemChange: (index: number) => void;
    isEnterprise?: boolean | undefined;
}

export const InfoMenuItem = memo((props: InfoMenuItemProps) => {
    const { active, item, index, onItemChange, isEnterprise = false } = props;

    if(isEnterprise) {
        return (
            <li
                onClick={() => onItemChange(index)}
                className={cls.menuItem}
            >
                {item.iconLight}
                <Text
                    tag="p"
                    variant={TextVariants.SUBTITLE_MEDIUM_REVERSED}
                >
                    {item.title}
                </Text>
            </li>
        );
    }

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
                variant={active ? TextVariants.SUBTITLE_MEDIUM : TextVariants.SUBTITLE_MEDIUM_REVERSED}
            >
                {item.title}
            </Text>
        </li>
    );
});
InfoMenuItem.displayName = 'InfoMenuItem';