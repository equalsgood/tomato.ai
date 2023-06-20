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