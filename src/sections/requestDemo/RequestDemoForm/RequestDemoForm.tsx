import cls from './RequestDemoForm.module.css';
import { Button, ButtonVariants, Input, PhoneNumberInput, Select } from 'shared/components';
import { FormEvent, useEffect, useState } from 'react';
import { E164Number } from 'libphonenumber-js';
import { useAppSelector } from 'hooks';
import { sendEmail } from 'shared/lib/sendEmail/sendEmail';
import isEmail from 'validator/lib/isEmail';
import { CountriesCheckbox } from 'widgets';

const companySizeOptions = ['<300 agents', '300-1k agents', '1k-5k agents', '5k-10k agents', '>10k agents'];

export const RequestDemoForm = () => {
    const { selectedPlan } = useAppSelector((state) => state.requestDemo);
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(undefined);
    const [companyValue, setCompanyValue] = useState('');
    const [roleValue, setRoleValue] = useState('');
    const [companySizeValue, setCompanySizeValue] = useState('');
    const [countriesValues, setCountriesValues] = useState<Array<string>>([]);
    const [noteValue, setNoteValue] = useState('');
    const [numberValue, setNumberValue] = useState<E164Number | undefined>();
    const [isNumberValid, setIsNumberValid] = useState<boolean | undefined>(undefined);
    const [completed, setCompleted] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if(
            firstNameValue !== '' && lastNameValue !== '' && isEmailValid && companyValue !== '' && roleValue !== ''
            && companySizeValue !== '' && countriesValues[0] !== '' && noteValue !== '' && isNumberValid
        ) {
            setCompleted(true);
        } else
            setCompleted(false);
    }, [firstNameValue, lastNameValue, isEmailValid, isNumberValid, companyValue, roleValue, companySizeValue, countriesValues.length, noteValue]);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        const content: Array<string> = [
            `selectedPlan: ${selectedPlan}`,
            `first name: ${firstNameValue}`,
            `last name: ${lastNameValue}`,
            `email: ${emailValue}`,
            `company: ${companyValue}`,
            `role: ${roleValue}`,
            `countries: ${countriesValues.join(', ')}`,
            `number of agents: ${companySizeValue}`,
            `note: ${noteValue}`,
            `number: ${numberValue}`,
        ];
        sendEmail({ header: 'Request a Demo', content }).then(r => console.log(r));

        e.preventDefault();
        setFirstNameValue('');
        setLastNameValue('');
        setEmailValue('');
        setCompanyValue('');
        setRoleValue('');
        setCompanySizeValue('');
        setCountriesValues([]);
        setNoteValue('');
        setNumberValue('');
        setSubmitted(true);
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

    const changeNumberHandler = (value: E164Number | undefined, isValid: boolean) => {
        setNumberValue(value);
        setIsNumberValid(isValid);
    };

    const changeEmailHandler = (value: string) => {
        setEmailValue(value);
        setIsEmailValid(isEmail(value));
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
                        placeholder="Smith"
                        value={lastNameValue}
                        onInputChange={(value) => setLastNameValue(value)}
                    />
                </div>
                <Input
                    required
                    error="Invalid Email"
                    isValid={isEmailValid}
                    label="Business Email"
                    type="email"
                    placeholder="john.smith@company.com"
                    value={emailValue}
                    onInputChange={(value) => changeEmailHandler(value)}
                    classNamesProps={cls.email}
                />
                <PhoneNumberInput
                    isValid={isNumberValid}
                    error="Invalid number"
                    value={numberValue}
                    onChange={changeNumberHandler}
                />
                <div className={cls.company}>
                    <Input
                        label="Company Name"
                        type="text"
                        placeholder="Company, Inc."
                        value={companyValue}
                        onInputChange={(value) => setCompanyValue(value)}
                    />
                    <Input
                        label="Your role in this company"
                        type="text"
                        placeholder="VP, Innovations"
                        value={roleValue}
                        onInputChange={(value) => setRoleValue(value)}
                    />
                </div>
                <div className={cls.selects}>
                    <Select
                        label="Number of Call Agents"
                        value={companySizeValue}
                        options={companySizeOptions}
                        onSelectChange={(value) => setCompanySizeValue(value)}
                        classNamesProps={cls.select}
                    />
                    <CountriesCheckbox
                        values={countriesValues}
                        onSelect={countrySelectHandler}
                        classNamesProps={cls.checkbox}
                    />
                </div>
                <Input
                    rows={4}
                    max={500}
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
                        type="button"
                        variant={ButtonVariants.ACTION}
                        text="Thank you! We received your demo request"
                        disabled={!completed}
                    /> :
                    <Button
                        type="submit"
                        variant={ButtonVariants.ACTION}
                        text="Send and Request a Demo"
                        disabled={!completed}
                    />
                }
            </form>
        </section>
    );
};