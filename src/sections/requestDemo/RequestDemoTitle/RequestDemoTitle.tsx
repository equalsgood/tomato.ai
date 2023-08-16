import cls from './RequestDemoTitle.module.css';
import { Text, TextVariants } from 'shared/components';

export const RequestDemoTitle = () => {
    return (
        <section className={cls.section}>
            <Text tag="p" variant={TextVariants.BADGE} classNamesProps={cls.badge}>FREE TRIAL</Text>
            <Text tag="h1" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>Request Demo</Text>
            <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>Please provide the information below so that we can better address your needs when we schedule a meeting</Text>
        </section>
    );
};