import cls from './Input.module.css';
import { InfoBadge } from 'shared/components';
import { ChangeEvent, memo, useState } from 'react';
import { InputValidations, validation } from 'shared/lib';

interface InputProps {
    label: string,
    type: string,
    info: string,
    placeholder: string,
    validationType: InputValidations,
    value: string,
    onInputChange: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const { label, type, info, placeholder, validationType, value, onInputChange } = props;
    const [inputValue, setInputValue] = useState(value);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newValue = validation(value, validationType);

        if(newValue !== null) {
            onInputChange(newValue);

            if(newValue !== '')
                setInputValue(validationType === InputValidations.MONEY ? `$${newValue}` : newValue);
            else
                setInputValue(newValue);
        }
    };

    return (
        <div className={cls.container}>
            <div className={cls.label}>
                <span className={cls.labelText}>{label}</span>
                <InfoBadge text={info}/>
            </div>
            <input
                value={inputValue}
                onChange={changeHandler}
                className={cls.input}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
});

Input.displayName = 'Input';