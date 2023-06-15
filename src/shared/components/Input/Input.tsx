import cls from './Input.module.css';
import { InfoBadge } from 'shared/components';
import { ChangeEvent, useState } from 'react';

export enum InputValidations {
    MONEY = 'money'
}

interface InputProps {
    label: string,
    type: string,
    info: string,
    placeholder: string,
    validation: InputValidations
}



export const Input = (props: InputProps) => {
    const { label, type, info, placeholder, validation } = props;

    const [value, setValue] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if(value === ''){
            setValue('');
            return;
        }

        if(validation === InputValidations.MONEY) {
            if((isNaN(+value) && value.slice(0,1) !== '$') || (isNaN(+value.slice(1)))){
                return;
            }

            if(value.includes('.') || value.includes(','))
                return;

            setValue(value.includes('$') ? value : `$${value}`);
            return;
        }

        setValue(value);
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