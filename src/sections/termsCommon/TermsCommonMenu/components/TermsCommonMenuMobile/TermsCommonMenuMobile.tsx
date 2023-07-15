import cls from './TermsCommonMenuMobile.module.css';
import { MenuItem } from 'widgets';
import { useEffect, useState } from 'react';
import { Select } from 'shared/components';

interface TermsCommonMenuMobileProps {
    items: Array<MenuItem>;
    onChange: (menuIndex: number) => void;
}

export const TermsCommonMenuMobile = (props: TermsCommonMenuMobileProps) => {
    const { items, onChange } = props;
    const [selectOptions, setSelectOptions] = useState<Array<string>>([]);
    const [selectValue, setSelectValue] = useState<string | undefined>(items[0]?.title);

    useEffect(() => {
        const newSelectOptions = items.map(item => item?.title as string);
        setSelectOptions(newSelectOptions);
    }, [items]);

    const selectChangeHandler = (value: string) => {
        setSelectValue(value);
        const newItemIndex = items.findIndex(item => item.title === value);
        onChange(newItemIndex);
    };
    
    return (
        <div className={cls.menu}>
            <Select onSelectChange={selectChangeHandler} value={selectValue || ''} options={selectOptions} dark />
        </div>
    );
};