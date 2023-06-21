export const numberFormat = (number: number) => {
    const separatedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if(number < 0) {
        return `-$${separatedNumber.slice(1)}`;
    }
    return `$${separatedNumber}`;
};