import cls from './ContactUsPopup.module.css';
import './ContactUsPopup.css';
import { Modal, Text, TextVariants, Input, PhoneNumberInput, ButtonVariants, Button } from 'shared/components';
import { useEffect, useState } from 'react';
import { E164Number } from 'libphonenumber-js';
import classNames from 'classnames';

interface ContactUsPopupProps {
    open: boolean,
    onClose: () => void
}

export const ContactUsPopup = (props: ContactUsPopupProps) => {
    const { open, onClose } = props;
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [numberValue, setNumberValue] = useState<E164Number | undefined>();
    const [countriesValue, setCountriesValue] = useState('');
    const [noteValue, setNoteValue] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if(
            firstNameValue !== '' && lastNameValue !== '' && emailValue !== '' && noteValue !== '' && numberValue !== '' && countriesValue !== ''
        ) {
            setCompleted(true);
        } else
            setCompleted(false);
    }, [numberValue, lastNameValue, emailValue, countriesValue, noteValue, numberValue]);

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
                    label="Business Email"
                    type="email"
                    placeholder="john.smith@company.com"
                    value={emailValue}
                    onInputChange={(value) => setEmailValue(value)}
                    classNamesProps={classNames(cls.email, cls.input)}
                />
                <PhoneNumberInput
                    value={numberValue}
                    onChange={(value) => setNumberValue(value)}
                    classNamesProps="contact-us-phone-input"
                />
                <Input
                    label="Offshoring Countries"
                    type="text"
                    placeholder=""
                    value={countriesValue}
                    onInputChange={(value) => setCountriesValue(value)}
                    classNamesProps={classNames(cls.countries, cls.input)}
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