import { TermsCommonContent, TermsCommonMenu } from 'sections/termsCommon';
import cls from '../../styles.module.css';
import backgroundImageOne from 'shared/assets/images/bg/terms-bg-1.png';
import backgroundImageTwo from 'shared/assets/images/bg/terms-bg-2.png';
import { TermsPageSchema } from '../../types';
import exampleImage from 'shared/assets/images/example.png';
import { useMemo, useState } from 'react';

const PrivacyPage = () => {
    const contentMemo = useMemo(() => content, []);
    const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

    const sectionChangeHandler = (menuIndex: number) => setCurrentMenuIndex(menuIndex);

    return (
        <main className={cls.main}>
            <div className={cls.content}>
                <TermsCommonMenu onChange={sectionChangeHandler} currentMenuIndex={currentMenuIndex} content={contentMemo}/>
                <TermsCommonContent currentMenuIndex={currentMenuIndex} onChange={sectionChangeHandler} content={contentMemo}/>
            </div>
            <img alt="background image 1" src={backgroundImageOne} className={cls.right} />
            <img alt="background image 2" src={backgroundImageTwo} className={cls.left} />
        </main>
    );
};

export default PrivacyPage;

// const content: TermsPageSchema = {
//     title: 'Privacy',
//     sections: [
//         {
//             sectionTitle: 'Privacy subtitle for this',
//             sectionId: 'section-1',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
//                 },
//                 {
//                     type: 'paragraph',
//                     text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
//                 },
//                 {
//                     type: 'paragraph',
//                     text: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.'
//                 },
//                 {
//                     type: 'image',
//                     src: exampleImage,
//                     alt: 'example image 1'
//                 }
//             ]
//         },
//     ]
// };

const content: TermsPageSchema = {
    title: 'Privacy',
    sections: [
        {
            sectionTitle: 'Privacy subtitle for this',
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
            sectionTitle: 'Privacy subtitle for this 2',
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
            sectionTitle: 'Privacy subtitle for this 3',
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

// const content: TermsPageSchema = {
//     title: 'Privacy',
//     sections: [
//         {
//             sectionTitle: 'Privacy Policy',
//             sectionId: 'privacy-section-1',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Last Updated: Nov 30, 2022'
//                 },
//                 {
//                     type: 'paragraph',
//                     text: 'This Privacy Policy describes the privacy practices of Tomato AI, Inc. ( “we”, “us”, or “our”) and how we handle personal information that we collect through our website — https://tomato.ai, through any other website that we own or control and which posts to this Privacy Policy, and through other interactions and correspondence with you (collectively, the “Service” or “Services”).'
//                 },
//                 {
//                     type: 'paragraph',
//                     text: 'We treat all personal information covered by this Privacy Policy as pertaining to individuals acting as business representatives, and not in their individual or household capacity. This Privacy Policy does not apply to personal information we process on behalf of our enterprise customers in our capacity as a service provider.'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'Personal Info Collected',
//             sectionId: 'privacy-section-2',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Information you provide to us may include:'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'Third party Info',
//             sectionId: 'privacy-section-3',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'We may maintain pages on social media platforms, such as Twitter, LinkedIn, Facebook, and other third-party platforms. When you visit or interact with our pages on those platforms, the platform provider’s privacy policy will apply to your interactions and their collection, use and processing of your personal information. You or the platforms may provide us with information through the platform, and we will treat such information in accordance with this Privacy Policy. We may obtain your personal information from other third parties, such as publicly-available sources and data providers.'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'Automatic Data Collection',
//             sectionId: 'privacy-section-4',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Last Updated: Nov 30, 2022'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'Use of Personal Info',
//             sectionId: 'privacy-section-5',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Last Updated: Nov 30, 2022'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'R&D and Direct marketing',
//             sectionId: 'privacy-section-6',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Last Updated: Nov 30, 2022'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'Sharing of Personal Info',
//             sectionId: 'privacy-section-7',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Last Updated: Nov 30, 2022'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'Job Applicants',
//             sectionId: 'privacy-section-8',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Last Updated: Nov 30, 2022'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'Changes to Privacy Policy',
//             sectionId: 'privacy-section-9',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Last Updated: Nov 30, 2022'
//                 },
//             ]
//         },
//         {
//             sectionTitle: 'How to Contact Us',
//             sectionId: 'privacy-section-10',
//             sectionContent: [
//                 {
//                     type: 'paragraph',
//                     text: 'Last Updated: Nov 30, 2022'
//                 },
//             ]
//         },
//     ]
// };