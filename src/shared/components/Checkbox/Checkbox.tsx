import cls from './Checkbox.module.css';
import classNames from 'classnames';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down-m.svg';
import React, { memo, useEffect, useState } from 'react';

interface CheckboxProps {
    label: string,
    values: Array<string>,
    options: Array<string>,
    onSelect: (option: string) => void
    classNamesProps?: string;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const { label, values, options, onSelect, classNamesProps } = props;
    const [selectedValuesString, setSelectedValuesString] = useState<string>('');

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const newString = values.join(', ');
        setSelectedValuesString(newString);
    });

    return (
        <div className={cls.container}>
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
                    <div className={cls.options}>
                        {options.map(option =>
                            <div
                                key={`${option}-select-option`}
                                className={classNames(cls.option, { [cls.selectedOption]: values.includes(option) })}
                                onClick={() => onSelect(option)}
                            >
                                {option}
                            </div>
                        )}
                    </div>
                    <div onClick={() => setOpen(false)} className={cls.overlay}/>
                </React.Fragment>
                }
            </div>
        </div>
    );
});
Checkbox.displayName = 'Checkbox';