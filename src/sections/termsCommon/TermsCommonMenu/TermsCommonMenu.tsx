import cls from './TermsCommonMenu.module.css';
import { Menu, MenuItem } from 'widgets';
import { Text, TextVariants } from 'shared/components';
import { useEffect, useState } from 'react';
import { scrollSmoothTo } from 'shared/lib';
import { TermsPageSchema } from 'pages/terms';

interface TermsMenuProps {
    content: TermsPageSchema;
    currentMenuIndex: number;
    onChange: (menuIndex: number) => void;
}

export const TermsCommonMenu = (props: TermsMenuProps) => {
    const { content, currentMenuIndex, onChange } = props;
    const [items, setItems] = useState<Array<MenuItem>>([]);

    useEffect(() => {
        const newItems = content.sections.map(section => {
            const item: MenuItem = {
                title: section.sectionTitle,
                relatedSectionId: section.sectionId
            };
            return item;
        });
        setItems(newItems);
    }, [content]);

    const changeHandler = (itemIndex: number) => {
        onChange(itemIndex);
        const newItem = items[itemIndex];
        scrollSmoothTo({ elementId: `${newItem?.relatedSectionId || ''}`, block: 'start' });
    };

    return (
        <aside className={cls.aside}>
            <div className={cls.contentWrapper}>
                <div className={cls.menuWrapper}>
                    <Menu
                        currentMenuItemIndex={currentMenuIndex}
                        items={items}
                        onItemChange={changeHandler}
                        withIcon={false}
                    />
                </div>
                <Text tag="p" variant={TextVariants.DEFAULT} classNamesProps={cls.info}>For any other questions you can text to:</Text>
                <a className={cls.mailLink} href = "mailto: customersupport@tomato.ai">customersupport@tomato.ai</a>
            </div>
        </aside>
    );
};