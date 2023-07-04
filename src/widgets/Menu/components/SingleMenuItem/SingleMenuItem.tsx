import React, { memo } from 'react';
import cls from './SingleMenuItem.module.css';
import { Text, TextVariants } from 'shared/components';
import { MenuItem } from '../../Menu';

interface SingleMenuItemProps {
    active: boolean;
    item: MenuItem;
    index: number;
    onItemChange: (index: number) => void;
    isEnterprise?: boolean | undefined;
    withIcon: boolean;
}

export const SingleMenuItem = memo((props: SingleMenuItemProps) => {
    const { active, item, index, onItemChange, isEnterprise = false, withIcon } = props;

    if(isEnterprise) {
        return (
            <li
                onClick={() => onItemChange(index)}
                className={cls.menuItem}
            >
                { withIcon && item.iconLight}
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
            { withIcon && active && item.iconDark }
            { withIcon && !active && item.iconLight }
            <Text
                tag="p"
                variant={active ? TextVariants.SUBTITLE_MEDIUM : TextVariants.SUBTITLE_MEDIUM_REVERSED}
            >
                {item.title}
            </Text>
        </li>
    );
});
SingleMenuItem.displayName = 'SingleMenuItem';