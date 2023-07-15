export interface ScrollSmoothToProps {
    elementId: string;
    block: 'start' | 'center' | 'pageStart';
}

export const scrollSmoothTo = (props: ScrollSmoothToProps) => {
    const { elementId, block } = props;
    const element = document.getElementById(elementId);

    if(element && block === 'center') {
        element.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    } else if (element && block === 'start') {
        const bodyRect = document.body.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        // 90 is header height
        const y = elementRect.top - bodyRect.top - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (element && block === 'pageStart') {
        // const bodyRect = document.body.getBoundingClientRect();
        // const elementRect = element.getBoundingClientRect();
        // // 90 is header height
        // const y = elementRect.top - bodyRect.top - 90;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};