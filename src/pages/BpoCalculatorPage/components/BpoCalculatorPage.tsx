import { BpoRoiCalculator } from 'sections/bpoCalculator';
import { FaqSection, SingleFaq } from 'sections/common';

const BpoCalculatorPage = () => {
    return (
        <main>
            <BpoRoiCalculator/>
            <FaqSection
                iteratorKey="bpo-calculator"
                faqs={questions}
            />
        </main>
    );
};

export default BpoCalculatorPage;

const questions: Array<SingleFaq> = [
    {
        question: 'How to estimate revenue increase per 1% CSAT or FCR lift?',
        answer: 'For a BPO to estimate the revenue increase per 1% lift in CSAT (Customer Satisfaction) or FCR (First Call Resolution) consider these options:\n' +
            '(a) analyzing a subset of your accounts that have higher CSAT or FCR than the average and the growth of those accounts have had vs the average account \n' +
            '(b) analyzing historical data for periods when you had higher CSAT and FCR than the current average \n' +
            '(c) assessing the past missed business opportunities and value due to your current CSAT and FCR and what additional revenue could be attained\n'
    },
    {
        question: 'If I do not know a certain value what should I do?',
        answer: 'Some of the requested fields in the calculator might not be readily available or easy to figure out. We recommend entering a best guess and then refining the estimate later once you have better information.'
    },
    {
        question: 'How is ROI calculated from the inputs?',
        answer: 'For a detailed description of how the ROI is calculated from the input submit the form and review the generated PDF with your results which walks carefully through how the ROI is derived.'
    },
    {
        question: 'What costs are normally included in accent training costs?',
        answer: 'Accent training costs can include the cost of workshops and software, and the opportunity cost of agents not handling calls while spending time training.'
    },
];