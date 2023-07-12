import cls from './ContactUsPopup.module.css';
import './ContactUsPopup.css';
import { Modal, Text, TextVariants, Input, PhoneNumberInput, ButtonVariants, Button } from 'shared/components';
import { useEffect, useState } from 'react';
import { E164Number } from 'libphonenumber-js';
import classNames from 'classnames';
import isEmail from 'validator/lib/isEmail';
import { CountriesCheckbox } from 'widgets';

interface ContactUsPopupProps {
    open: boolean,
    onClose: () => void
}

export const ContactUsPopup = (props: ContactUsPopupProps) => {
    const { open, onClose } = props;
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(undefined);
    const [numberValue, setNumberValue] = useState<E164Number | undefined>();
    const [isNumberValid, setIsNumberValid] = useState<boolean | undefined>(undefined);
    const [countriesValues, setCountriesValues] = useState<Array<string>>([]);
    const [noteValue, setNoteValue] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if(
            firstNameValue !== '' && lastNameValue !== '' && isEmailValid && noteValue !== '' && isNumberValid && countriesValues.length
        ) {
            setCompleted(true);
        } else
            setCompleted(false);
    }, [numberValue, lastNameValue, isEmailValid, countriesValues.length, noteValue, isNumberValid]);


    const changeNumberHandler = (value: E164Number | undefined, isValid: boolean) => {
        setNumberValue(value);
        setIsNumberValid(isValid);
    };

    const changeEmailHandler = (value: string) => {
        setEmailValue(value);
        setIsEmailValid(isEmail(value));
    };

    const countrySelectHandler = (value: string) => {
        let isAlreadySelected = false;
        const newCountries: Array<string> = [];

        countriesValues.forEach(selectedValue => {
            if(selectedValue !== value)
                newCountries.push(selectedValue);

            if(selectedValue === value)
                isAlreadySelected = true;
        });

        if(!isAlreadySelected)
            newCountries.push(value);

        setCountriesValues(newCountries);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <form className={cls.content}>
                <Text tag="h2" variant={TextVariants.TITLE_REVERSED} classNamesProps={cls.title}>Let’s Talk!</Text>
                <div className={cls.initialsContainer}>
                    <Input
                        label="First Name"
                        type="text"
                        placeholder="John"
                        value={firstNameValue}
                        onInputChange={(value) => setFirstNameValue(value)}
                        classNamesProps={cls.input}
                    />
                    <Input
                        label="Last Name"
                        type="text"
                        placeholder="Smith"
                        value={lastNameValue}
                        onInputChange={(value) => setLastNameValue(value)}
                        classNamesProps={cls.input}
                    />
                </div>
                <Input
                    error="Invalid Email"
                    isValid={isEmailValid}
                    label="Business Email"
                    type="email"
                    placeholder="john.smith@company.com"
                    value={emailValue}
                    onInputChange={(value) => changeEmailHandler(value)}
                    classNamesProps={classNames(cls.email, cls.input)}
                />
                <PhoneNumberInput
                    isValid={isNumberValid}
                    error="Invalid number"
                    value={numberValue}
                    onChange={changeNumberHandler}
                    classNamesProps="contact-us-phone-input"
                />
                <CountriesCheckbox
                    values={countriesValues}
                    onSelect={countrySelectHandler}
                />
                <Input
                    rows={3}
                    max={500}
                    label="Any additional notes for us?"
                    type="text"
                    placeholder="Leave your message"
                    value={noteValue}
                    onInputChange={(value) => setNoteValue(value)}
                    classNamesProps={classNames(cls.note, cls.input)}
                />
                <Button
                    classNamesProps={cls.submit}
                    type="submit"
                    variant={ButtonVariants.ACTION}
                    text="Send Message"
                    disabled={!completed}
                />
                <Button
                    variant={ButtonVariants.CLOSE}
                    classNamesProps={cls.close}
                    type='button'
                    onClick={onClose}
                />
            </form>
        </Modal>
    );
};