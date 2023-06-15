import cls from './Select.module.css';
import { InfoBadge } from 'shared/components';
import classNames from 'classnames';
import DropdownIconOpen from 'shared/assets/icons/arrow-dropdown-up.svg';
import DropdownIconClose from 'shared/assets/icons/arrow-dropdown-down-m.svg';
import React, { useState } from 'react';

interface SelectProps {
    label: string,
    info: string,
}

const MOCK = {
    selectedValue: '',
    options: [
        'Support',
        'Sales'
    ]
};

export const Select = (props: SelectProps) => {
    const { label, info } = props;

    const [open, setOpen] = useState(false);

    return (
        <div className={cls.container}>
            <div className={cls.label}>
                <span className={cls.labelText}>{label}</span>
                <InfoBadge text={info}/>
            </div>
            <div
                className={classNames(cls.select, { [cls.selected]: !!MOCK.selectedValue, [cls.open]: open })}
                onClick={() => setOpen(true)}
            >
                {MOCK.selectedValue || MOCK.options[0]}
                {open ?
                    <DropdownIconOpen/> :
                    <DropdownIconClose/>
                }
            </div>
            {open &&
                <React.Fragment>
                    <div className={cls.options}>
                        {MOCK.options.map(option =>
                            <span
                                key={`${option}-select-option`}
                                className={cls.option}
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
};