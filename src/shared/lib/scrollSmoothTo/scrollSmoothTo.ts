export const scrollSmoothTo = (elementId: string) => {
    const element = document.getElementById(elementId);

    if(element) {
        element.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    }
};