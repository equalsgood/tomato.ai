import { RequestDemoForm, RequestDemoTitle } from 'sections/requestDemo';
import cls from './RequestDemoPage.module.css';
import backgroundImage from 'shared/assets/images/bg/demo-bg.png';
import { FaqSection, SingleFaq } from 'sections/common';

const RequestDemoPage = () => {
    return (
        <main className={cls.main}>
            <RequestDemoTitle/>
            <RequestDemoForm/>
            <FaqSection
                iteratorKey="request-demo"
                faqs={questions}
            />
            <img alt="background image" src={backgroundImage} className={cls.image} />
        </main>
    );
};

export default RequestDemoPage;

const questions: Array<SingleFaq> = [
    {
        question: 'Can we run a free trial?',
        answer: 'Yes, we can provide the solution for a limited field test so that the benefits of the solution can be measured and compared to baseline metrics.'
    },
    {
        question: 'What languages and accents do you support?',
        answer: 'We currently support the English language and expect to offer other languages soon. English accents we support include Filipino, Indian, and Spanish. Please include in the notes section which languages and accents you would need support for ranked by priority. If possible also include the number of call agents per language and accent combination.'
    },
    {
        question: 'Is the service offered to companies with less than 300 call agents?',
        answer: 'Currently we are working with companies with 300 or more call agents. Please complete the demo request and indicate in the comments how many agents you have and we will reach out when we offer it to call centers of your size.'
    },
    {
        question: 'What are the system and integration requirements for the solution?',
        answer: 'The solution works on most environments call centers might have and requires no (or little) integration depending on the existing setup. More details can be provided on a scheduled call.'
    }
];