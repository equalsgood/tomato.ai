import cls from './TermsCommonMenu.module.css';
import { ContactUsPopup, Menu, MenuItem } from 'widgets';
import { Text, TextVariants } from 'shared/components';
import { useContext, useEffect, useState } from 'react';
import { scrollSmoothTo } from 'shared/lib';
import { TermsPageSchema } from 'pages/terms';
import { Context } from 'app/providers/ContextProvider';
import {
    TermsCommonMenuMobile
} from 'sections/termsCommon/TermsCommonMenu/components/TermsCommonMenuMobile/TermsCommonMenuMobile';

interface TermsMenuProps {
    content: TermsPageSchema;
    currentMenuIndex: number;
    onChange: (menuIndex: number) => void;
}

export const TermsCommonMenu = (props: TermsMenuProps) => {
    const { isMobile } = useContext(Context);
    const { content, currentMenuIndex, onChange } = props;
    const [items, setItems] = useState<Array<MenuItem>>([]);
    const [open, setOpen] = useState<boolean>(false);

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

    if(isMobile) {
        return (
            <TermsCommonMenuMobile onChange={onChange} items={items}/>
        );
    }

    const changeHandler = (itemIndex: number) => {
        onChange(itemIndex);
        const newItem = items[itemIndex];
        if(itemIndex !== 0) {
            scrollSmoothTo({ elementId: `${newItem?.relatedSectionId || ''}`, block: 'start' });
        }
        if(itemIndex === 0) {
            scrollSmoothTo({ elementId: `${newItem?.relatedSectionId || ''}`, block: 'pageStart' });
        }
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
                <Text tag="p" variant={TextVariants.DEFAULT} classNamesProps={cls.info}>
                    For any other questions please <button
                        onClick={() => setOpen(true)}
                        className={cls.contactBtn}
                    >
                        contact us
                    </button>
                </Text>
            </div>
            <ContactUsPopup open={open} onClose={() => setOpen(false)}/>
        </aside>
    );
};