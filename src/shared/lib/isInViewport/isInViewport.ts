export function isInViewport (elementId: string) {
    const element = document.getElementById(elementId);

    if(element) {
        const viewedSectionCenter = 250;
        const rect = element.getBoundingClientRect();

        return (
            rect.top <= viewedSectionCenter &&
            rect.bottom >= viewedSectionCenter
        );
    } else return false;
}