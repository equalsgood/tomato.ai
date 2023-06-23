import cls from './RequestDemoTitle.module.css';
import { Text, TextVariants } from 'shared/components';

export const RequestDemoTitle = () => {
    return (
        <section className={cls.section}>
            <Text tag="p" variant={TextVariants.BADGE} classNamesProps={cls.badge}>FREE TRIAL</Text>
            <Text tag="h1" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>Request Demo</Text>
            <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. </Text>
        </section>
    );
};