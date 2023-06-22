export const numberFormat = (number: number, withSign = false) => {
    const separatedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if(number < 0) {
        return `-$${separatedNumber.slice(1)}`;
    }
    if(withSign)
        return `+$${separatedNumber}`;

    return `$${separatedNumber}`;
};