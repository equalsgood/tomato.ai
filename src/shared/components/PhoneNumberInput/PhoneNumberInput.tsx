import cls from './PhoneNumberInput.module.css';
import PhoneInput from 'react-phone-number-input';
import './PhoneNumberInput.css';
import { E164Number } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';

interface PhoneNumberInputProps {
    value: E164Number | undefined,
    onChange: (value?: E164Number | undefined) => void
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
    const { value, onChange } = props;
    return (
        <div className="phone-number-input">
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