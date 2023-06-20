import cls from './FaqSection.module.css';
import { Faq, Text, TextVariants } from 'shared/components';

export interface SingleFaq {
    question: string,
    answer: string
}

interface FaqSectionProps {
    iteratorKey: string,
    faqs: Array<SingleFaq>
}

export const FaqSection = (props: FaqSectionProps) => {
    const { iteratorKey, faqs } = props;

    return (
        <section className={cls.faqSection}>
            <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL} classNamesProps={cls.title}>Frequently asked questions</Text>
            <ul className={cls.questions}>
                {faqs.map((faq, index) =>
                    <Faq
                        key={`${iteratorKey}-faq-${index}`}
                        question={faq.question}
                        answer={faq.answer}
                    />
                )}
            </ul>
        </section>
    );
};