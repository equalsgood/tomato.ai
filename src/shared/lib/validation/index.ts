export enum InputValidations {
    MONEY = 'money',
    NUMBER = 'number'
}

export const validation = (value: string, validationType: InputValidations): string | null => {
    if(value === '')
        return value;

    if(validationType === InputValidations.MONEY) {
        if((isNaN(+value) && value.slice(0,1) !== '$') || (isNaN(+value.slice(1))))
            return null;

        if(value.includes('.') || value.includes(','))
            return null;

        const newValue = value.includes('$') ? value : `$${value}`;
        return newValue.trim();
    }

    if(validationType === InputValidations.NUMBER) {
        if(isNaN(+value) || value.includes('.') || value.includes(','))
            return null;

        return value.trim();
    }

    return null;
};