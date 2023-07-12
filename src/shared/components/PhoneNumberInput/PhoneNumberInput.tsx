import cls from './PhoneNumberInput.module.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import './PhoneNumberInput.css';
import { E164Number } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import classNames from 'classnames';
import { useEffect } from 'react';

interface PhoneNumberInputProps {
    value: E164Number | undefined;
    onChange: (value: E164Number | undefined, isValid: boolean) => void;
    classNamesProps?: string;
    isValid?: boolean | undefined;
    error?: string;
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
    const { value, onChange, classNamesProps, isValid, error } = props;

    const changeHandler = (value: E164Number | undefined) => {
        onChange(value, isValidPhoneNumber(value ? value as string : ''));
    };

    return (
        <div className={classNames('phone-number-input', classNamesProps, { ['phone-number-input-error']: isValid === false })}>
            <div className={cls.label}>
                <span className={cls.labelText}>Phone number</span>
                {isValid === false &&
                    <span className={cls.errorMessage}>{error}</span>
                }
            </div>
            <PhoneInput
                international
                limitMaxLength
                countryCallingCodeEditable={false}
                defaultCountry="US"
                placeholder="Enter phone number"
                value={value}
                onChange={changeHandler}
            />
        </div>
    );
};