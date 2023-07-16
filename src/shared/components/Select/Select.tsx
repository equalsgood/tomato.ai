import cls from './Select.module.css';
import { InfoBadge } from 'shared/components';
import classNames from 'classnames';
import DropdownIconOpen from 'shared/assets/icons/arrow-dropdown-up-m.svg';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down-m.svg';
import React, { memo, useState } from 'react';

export enum SelectVariants {
    DEFAULT = 'default',
    DARK = 'dark',
    GREEN = 'green'
}

interface SelectProps {
    label?: string,
    info?: string,
    value: string,
    options: Array<string>,
    onSelectChange?: (value: string) => void
    classNamesProps?: string;
    labelClassNamesProps?: string;
    variant?: SelectVariants;
}

export const Select = memo((props: SelectProps) => {
    const { label, info, value, options, onSelectChange, classNamesProps, labelClassNamesProps, variant = SelectVariants.DEFAULT } = props;

    const [open, setOpen] = useState(false);

    const clickHandler = (option: string) => {
        if (onSelectChange) {
            onSelectChange(option);
        }
        setOpen(false);
    };

    return (
        <div className={classNames(cls.container, cls[variant])}>
            { label &&
                <div className={classNames(cls.label, labelClassNamesProps)}>
                    <span className={cls.labelText}>{label}</span>
                    {info && <InfoBadge text={info}/>}
                </div>
            }
            <div className={cls.selectContainer}>
                <div
                    className={classNames(cls.select, classNamesProps, { [cls.selected]: !!value })}
                    onClick={() => setOpen(true)}
                >
                    {value || options[0]}
                    <DropdownIconClose/>
                </div>
                {open &&
                <React.Fragment>
                    <div className={cls.options}>
                        {options.map((option, index) =>
                            <span
                                key={`${option}-select-option`}
                                className={cls.option}
                                onClick={() => clickHandler(option)}
                            >
                                {option}
                                {index === 0 && <DropdownIconOpen/>}
                            </span>
                        )}
                    </div>
                    <div onClick={() => setOpen(false)} className={cls.overlay}/>
                </React.Fragment>
                }
            </div>
        </div>
    );
});
Select.displayName = 'Select';