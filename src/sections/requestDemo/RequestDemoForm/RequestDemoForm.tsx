import cls from './RequestDemoForm.module.css';
import { Button, ButtonVariants, Input, Select } from 'shared/components';
import { FormEvent, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { E164Number } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import './RequestDemoForm.css';

const companySizeOptions = ['10+ workers', '20+ workers', '30+ workers', '40+ workers', '50+ workers'];
const interestsOptions = ['Improve voice quality1', 'Improve voice quality2', 'Improve voice quality3', 'Improve voice quality4'];

export const RequestDemoForm = () => {
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [companyValue, setCompanyValue] = useState('');
    const [roleValue, setRoleValue] = useState('');
    const [companySizeValue, setCompanySizeValue] = useState('');
    const [interestsValue, setInterestsValue] = useState('');
    const [noteValue, setNoteValue] = useState('');
    const [numberValue, setNumberValue] = useState<E164Number | undefined>();
    const [completed, setCompleted] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if(
            firstNameValue !== '' && lastNameValue !== '' && emailValue !== '' && companyValue !== '' && roleValue !== ''
            && companySizeValue !== '' && interestsValue !== '' && noteValue !== '' && numberValue !== ''
        ) {
            setCompleted(true);
        } else
            setCompleted(false);
    }, [numberValue, lastNameValue, emailValue, companyValue, roleValue, companySizeValue, interestsValue, noteValue, numberValue]);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFirstNameValue('');
        setLastNameValue('');
        setEmailValue('');
        setCompanyValue('');
        setRoleValue('');
        setCompanySizeValue('');
        setInterestsValue('');
        setNoteValue('');
        setNumberValue('');
        setSubmitted(true);
    };

    return (
        <section className={cls.section}>
            <form onSubmit={submitHandler}>
                <div className={cls.initials}>
                    <Input
                        label="First Name"
                        type="text"
                        placeholder="John"
                        value={firstNameValue}
                        onInputChange={(value) => setFirstNameValue(value)}
                    />
                    <Input
                        label="Last Name"
                        type="text"
                        placeholder="Jones"
                        value={lastNameValue}
                        onInputChange={(value) => setLastNameValue(value)}
                    />
                </div>
                <Input
                    required
                    label="Business Email"
                    type="email"
                    placeholder="Email@gmail.com"
                    value={emailValue}
                    onInputChange={(value) => setEmailValue(value)}
                    classNamesProps={cls.email}
                />
                <div className="request-demo-number-input">
                    <span className={cls.labelText}>Phone number</span>
                    <PhoneInput
                        international
                        limitMaxLength
                        countryCallingCodeEditable={false}
                        defaultCountry="US"
                        placeholder="Enter phone number"
                        value={numberValue}
                        onChange={setNumberValue}
                    />
                </div>
                <div className={cls.company}>
                    <Input
                        label="Company Name"
                        type="text"
                        placeholder="John"
                        value={companyValue}
                        onInputChange={(value) => setCompanyValue(value)}
                    />
                    <Input
                        label="Your role in this company"
                        type="text"
                        placeholder="Jones"
                        value={roleValue}
                        onInputChange={(value) => setRoleValue(value)}
                    />
                </div>
                <div className={cls.selects}>
                    <Select
                        label="Company Size"
                        value={companySizeValue}
                        options={companySizeOptions}
                        onSelectChange={(value) => setCompanySizeValue(value)}
                        classNamesProps={cls.select}
                    />
                    <Select
                        label="What are you most interested in?"
                        value={interestsValue}
                        options={interestsOptions}
                        onSelectChange={(value) => setInterestsValue(value)}
                        classNamesProps={cls.select}
                    />
                </div>
                <Input
                    rows={4}
                    label="Please provide any details about your needs"
                    type="text"
                    placeholder="Note"
                    value={noteValue}
                    onInputChange={(value) => setNoteValue(value)}
                    classNamesProps={cls.note}
                />
                { submitted ?
                    <Button
                        classNamesProps={cls.submitted}
                        type="submit"
                        variant={ButtonVariants.ACTION}
                        text="Thank You! You will have a DEMO Soon!"
                        disabled={!completed}
                    /> :
                    <Button
                        type="submit"
                        variant={ButtonVariants.ACTION}
                        text="Send and request a DEMO"
                        disabled={!completed}
                    />
                }
            </form>
        </section>
    );
};