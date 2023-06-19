import cls from './Select.module.css';
import { InfoBadge } from 'shared/components';
import classNames from 'classnames';
import DropdownIconOpen from 'shared/assets/icons/arrow-dropdown-up.svg';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down-m.svg';
import React, { memo, useState } from 'react';

interface SelectProps {
    label: string,
    info: string,
    value: string,
    options: Array<string>,
    onSelectChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const { label, info, value, options, onSelectChange } = props;

    const [open, setOpen] = useState(false);

    const clickHandler = (option: string) => {
        if (onSelectChange) {
            onSelectChange(option);
        }
        setOpen(false);
    };

    return (
        <div className={cls.container}>
            <div className={cls.label}>
                <span className={cls.labelText}>{label}</span>
                <InfoBadge text={info}/>
            </div>
            <div
                className={classNames(cls.select, { [cls.selected]: !!value, [cls.open]: open })}
                onClick={() => setOpen(true)}
            >
                {value || options[0]}
                {open ?
                    <DropdownIconOpen/> :
                    <DropdownIconClose/>
                }
            </div>
            {open &&
                <React.Fragment>
                    <div className={cls.options}>
                        {options.map(option =>
                            <span
                                key={`${option}-select-option`}
                                className={cls.option}
                                onClick={() => clickHandler(option)}
                            >
                                {option}
                            </span>
                        )}
                    </div>
                    <div onClick={() => setOpen(false)} className={cls.overlay}/>
                </React.Fragment>
            }
        </div>
    );
});
Select.displayName = 'Select';