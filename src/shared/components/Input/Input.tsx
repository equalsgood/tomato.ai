import cls from './Input.module.css';
import { InfoBadge } from 'shared/components';
import { ChangeEvent, memo, useEffect, useState } from 'react';
import { InputValidations, validation } from 'shared/lib';
import classNames from 'classnames';

interface InputProps {
    required?: boolean,
    label: string,
    type: string,
    info?: string,
    placeholder: string,
    validationType?: InputValidations,
    value: string,
    onInputChange: (value: string) => void,
    classNamesProps?: string,
    rows?: number,
    doubleLabel?: boolean,
}

export const Input = memo((props: InputProps) => {
    const { label, type, info, placeholder, validationType, value, onInputChange, required, classNamesProps, rows, doubleLabel } = props;
    const [inputValue, setInputValue] = useState(value);

    const changeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        const newValue = validation(value, validationType);

        if(newValue !== null) {
            onInputChange(newValue);
        }
    };

    useEffect(() => {
        if(value !== '')
            setInputValue(validationType === InputValidations.MONEY ? `$${value}` : value);
        else
            setInputValue(value);
    }, [value]);

    return (
        <div className={classNames(cls.container, classNamesProps)}>
            <div className={classNames(cls.label, { [cls.doubleLine]: doubleLabel })}>
                <span className={cls.labelText}>{label}</span>
                { info && <InfoBadge text={info}/> }
            </div>
            { rows ?
                <textarea
                    value={inputValue}
                    onChange={changeHandler}
                    className={classNames(cls.input, cls.area)}
                    placeholder={placeholder}
                    rows={rows}
                /> :
                <input
                    required={required}
                    value={inputValue}
                    onChange={changeHandler}
                    className={cls.input}
                    type={type}
                    placeholder={placeholder}
                />
            }
        </div>
    );
});

Input.displayName = 'Input';