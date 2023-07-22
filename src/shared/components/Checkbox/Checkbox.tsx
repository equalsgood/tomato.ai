import cls from './Checkbox.module.css';
import classNames from 'classnames';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down-m.svg';
import React, { ChangeEvent, memo, useEffect, useState } from 'react';
import { CheckIcon } from 'shared/assets/icons/Check';

interface CheckboxProps {
    label: string,
    values: Array<string>,
    options: Array<string>,
    onSelect: (option: string) => void
    classNamesProps?: string | undefined;
    withSearch?: boolean;
    reduced?: boolean | undefined;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const { label, values, options, onSelect, classNamesProps, withSearch, reduced } = props;
    const [selectedValuesString, setSelectedValuesString] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState<Array<string>>(options);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const newString = values.join(', ');
        setSelectedValuesString(newString);
    });

    const clickHandler = (option: string) => {
        onSelect(option);
    };

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchValue(newValue);
        const newOptions = options.filter(option => option.toLowerCase().includes(newValue.toLowerCase()));

        setFilteredOptions(newOptions);
    };

    return (
        <div className={classNames(cls.container, { [cls.reduced]: reduced })}>
            <div className={cls.label}>
                <span className={cls.labelText}>{label}</span>
            </div>
            <div className={cls.selectContainer}>
                <div
                    className={classNames(cls.select, classNamesProps, { [cls.selected]: !!selectedValuesString })}
                    onClick={() => setOpen(true)}
                >
                    <p>
                        {selectedValuesString || options[0]}
                    </p>
                    <DropdownIconClose/>
                </div>
                {open &&
                <React.Fragment>
                    <div className={cls.optionsContainer}>
                        { withSearch && <input autoFocus className={cls.search} value={searchValue} onChange={searchHandler} placeholder="Search"/> }
                        <div className={cls.options}>
                            {filteredOptions.map(option =>
                                <div
                                    key={`${option}-select-option`}
                                    className={classNames(cls.option, { [cls.selectedOption]: values.includes(option) })}
                                    onClick={() => clickHandler(option)}
                                >
                                    <CheckIcon checked={values.includes(option)} classNamesProps={cls.icon}/>
                                    {option}
                                </div>
                            )}
                        </div>
                    </div>
                    <div onClick={() => setOpen(false)} className={cls.overlay}/>
                </React.Fragment>
                }
            </div>
        </div>
    );
});
Checkbox.displayName = 'Checkbox';