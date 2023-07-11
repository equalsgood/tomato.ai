import { TermsCommonContent, TermsCommonMenu } from 'sections/termsCommon';
import cls from '../../styles.module.css';
import backgroundImageOne from 'shared/assets/images/bg/terms-bg-1.png';
import backgroundImageTwo from 'shared/assets/images/bg/terms-bg-2.png';
import { TermsPageSchema } from '../../types';
import exampleImage from 'shared/assets/images/example.png';
import { useMemo, useState } from 'react';

const TermsPage = () => {
    const contentMemo = useMemo(() => content, []);
    const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

    const sectionChangeHandler = (menuIndex: number) => setCurrentMenuIndex(menuIndex);

    return (
        <main className={cls.main}>
            <div className={cls.content}>
                <TermsCommonMenu onChange={sectionChangeHandler} currentMenuIndex={currentMenuIndex} content={contentMemo}/>
                <TermsCommonContent onChange={sectionChangeHandler} content={contentMemo}/>
            </div>
            <img alt="background image 1" src={backgroundImageOne} className={cls.right} />
            <img alt="background image 2" src={backgroundImageTwo} className={cls.left} />
        </main>
    );
};

export default TermsPage;

const content: TermsPageSchema = {
    title: 'Terms',
    sections: [
        {
            sectionTitle: 'Some subtitle for this',
            sectionId: 'section-1',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
                },
                {
                    type: 'paragraph',
                    text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
                },
                {
                    type: 'paragraph',
                    text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
                },
                {
                    type: 'image',
                    src: exampleImage,
                    alt: 'example image 1'
                }
            ]
        },
        {
            sectionTitle: 'Some subtitle for this 2',
            sectionId: 'section-2',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
                },
                {
                    type: 'paragraph',
                    text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
                },
                {
                    type: 'paragraph',
                    text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
                },
            ]
        },
        {
            sectionTitle: 'Some subtitle for this 3',
            sectionId: 'section-3',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
                },
                {
                    type: 'image',
                    src: exampleImage,
                    alt: 'example image 1'
                }
            ]
        },
    ]
};