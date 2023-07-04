import cls from './RequestDemoForm.module.css';
import { Button, ButtonVariants, Checkbox, Input, PhoneNumberInput, Select } from 'shared/components';
import { FormEvent, useEffect, useState } from 'react';
import { E164Number } from 'libphonenumber-js';
import { useAppSelector } from 'hooks';

const companySizeOptions = ['300 agents', '300-1k agents', '1k-5k agents', '5k-10k agents', '>10k agents'];
const countriesOptions = ['Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Cape Verde','Cayman Islands','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica','Cote D Ivoire','Croatia','Cruise Ship','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyz Republic','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mauritania','Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Namibia','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre and Miquelon','Samoa','San Marino','Satellite','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','South Africa','South Korea','Spain','Sri Lanka','St Kitts and Nevis','St Lucia','St Vincent','St. Lucia','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Turks and Caicos','Uganda','Ukraine','United Arab Emirates','United Kingdom','Uruguay','Uzbekistan','Venezuela','Vietnam','Virgin Islands (US)','Yemen','Zambia','Zimbabwe'];

export const RequestDemoForm = () => {
    const { selectedPlan } = useAppSelector((state) => state.requestDemo);
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [companyValue, setCompanyValue] = useState('');
    const [roleValue, setRoleValue] = useState('');
    const [companySizeValue, setCompanySizeValue] = useState('');
    const [countriesValues, setCountriesValues] = useState<Array<string>>([]);
    const [noteValue, setNoteValue] = useState('');
    const [numberValue, setNumberValue] = useState<E164Number | undefined>();
    const [completed, setCompleted] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if(
            firstNameValue !== '' && lastNameValue !== '' && emailValue !== '' && companyValue !== '' && roleValue !== ''
            && companySizeValue !== '' && countriesValues[0] !== '' && noteValue !== '' && numberValue !== ''
        ) {
            setCompleted(true);
        } else
            setCompleted(false);
    }, [numberValue, lastNameValue, emailValue, companyValue, roleValue, companySizeValue, countriesValues.length, noteValue, numberValue]);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
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
                    label="Business Email"
                    type="email"
                    placeholder="john.smith@company.com"
                    value={emailValue}
                    onInputChange={(value) => setEmailValue(value)}
                    classNamesProps={cls.email}
                />
                <PhoneNumberInput
                    value={numberValue}
                    onChange={(value) => setNumberValue(value)}
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
                    <Checkbox
                        label="Location of agents"
                        values={countriesValues}
                        options={countriesOptions}
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
                        type="submit"
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