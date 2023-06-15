import cls from './Input.module.css';
import { InfoBadge } from 'shared/components';
import { ChangeEvent, useState } from 'react';
import { InputValidations } from 'shared/lib/validation';
import { validation } from 'shared/lib/validation';

interface InputProps {
    label: string,
    type: string,
    info: string,
    placeholder: string,
    validationType: InputValidations
}

export const Input = (props: InputProps) => {
    const { label, type, info, placeholder, validationType } = props;

    const [value, setValue] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newValue = validation(value, validationType);

        if(newValue !== null)
            setValue(newValue);
    };

    return (
        <div className={cls.container}>
            <div className={cls.label}>
                <span className={cls.labelText}>{label}</span>
                <InfoBadge text={info}/>
            </div>
            <input
                value={value}
                onChange={changeHandler}
                className={cls.input}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};