import cls from './Input.module.css';
import { InfoBadge } from 'shared/components';
import { ChangeEvent, memo } from 'react';
import { InputValidations } from 'shared/lib/validation';
import { validation } from 'shared/lib/validation';

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

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newValue = validation(value, validationType);

        if(newValue !== null)
            onInputChange(newValue);
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
});

Input.displayName = 'Input';