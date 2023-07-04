import cls from './PhoneNumberInput.module.css';
import PhoneInput from 'react-phone-number-input';
import './PhoneNumberInput.css';
import { E164Number } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import classNames from 'classnames';

interface PhoneNumberInputProps {
    value: E164Number | undefined;
    onChange: (value?: E164Number | undefined) => void;
    classNamesProps?: string
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
    const { value, onChange, classNamesProps } = props;
    return (
        <div className={classNames('phone-number-input', classNamesProps)}>
            <span className={cls.labelText}>Phone number</span>
            <PhoneInput
                international
                limitMaxLength
                countryCallingCodeEditable={false}
                defaultCountry="US"
                placeholder="Enter phone number"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};