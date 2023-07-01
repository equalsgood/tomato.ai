import { ComparePlans, PlansIntroduction } from 'sections/pricing';
import { FaqSection, SingleFaq } from 'sections/common';
import cls from './PricingPage.module.css';
import backgroundImage from 'shared/assets/images/bg/pricing-bg.png';

const PricingPage = () => {
    return (
        <main className={cls.main}>
            <PlansIntroduction/>
            <ComparePlans/>
            <FaqSection
                iteratorKey="enterprise-calculator"
                faqs={questions}
            />
            <img alt="background image" src={backgroundImage} className={cls.image} />
        </main>
    );
};

export default PricingPage;

const questions: Array<SingleFaq> = [
    {
        question: 'FAQ question 1',
        answer: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.'
    },
    {
        question: 'FAQ question 2',
        answer: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.'
    },
    {
        question: 'FAQ question 3',
        answer: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.'
    },
    {
        question: 'FAQ question 4',
        answer: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.'
    },
    {
        question: 'FAQ question 5',
        answer: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.'
    },
];