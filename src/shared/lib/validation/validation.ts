export enum InputValidations {
    MONEY = 'money',
    NUMBER = 'number',
    NONE = 'NONE',
}

export const validation = (value: string, validationType: InputValidations): string | null => {
    if(validationType === InputValidations.NONE)
        return value;

    if(value === '')
        return value;

    if(validationType === InputValidations.MONEY) {
        const newValue = value.split('').filter(char => char !== '$').join('');

        if(isNaN(+newValue))
            return null;

        if(newValue.includes('.') || newValue.includes(','))
            return null;

        return newValue.trim();
    }

    if(validationType === InputValidations.NUMBER) {
        if(isNaN(+value) || value.includes('.') || value.includes(','))
            return null;

        return value.trim();
    }

    return null;
};