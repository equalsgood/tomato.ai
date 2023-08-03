import { TermsCommonContent, TermsCommonMenu } from 'sections/termsCommon';
import cls from '../../styles.module.css';
import backgroundImageOne from 'shared/assets/images/bg/terms-bg-1.png';
import backgroundImageTwo from 'shared/assets/images/bg/terms-bg-2.png';
import { TermsPageSchema } from '../../types';
import exampleImage from 'shared/assets/images/example.png';
import { useMemo, useState } from 'react';

const EthicsPage = () => {
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

export default EthicsPage;

const content: TermsPageSchema = {
    title: 'Ethics',
    sections: [
        {
            sectionTitle: 'Ethical Statement',
            sectionId: 'section-1',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'At Tomato.ai, we firmly believe that innovative technology should be developed responsibly and with the highest ethical standards in mind. Our commitment to ethics and morals governs every aspect of our company and the development of our real-time accent softening technology. As pioneers in the field of real-time voice synthesis, we understand the importance of addressing concerns related to impersonation and misuse of synthetic voices. We are dedicated to transparently sharing our approach to ethical considerations as this technology becomes widely adopted.'
                },
                {
                    type: 'paragraph',
                    text: 'Tomato.ai\'s platform utilizes cutting-edge, real-time voice synthesis technology that enables users to soften accents while maintaining the speaker\'s unique identity.'
                },
            ]
        },
        {
            sectionTitle: 'Value of Accent Softening',
            sectionId: 'section-2',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'At Tomato.ai we value cultural diversity and appreciate the role that accents play in enriching our daily experiences. We strongly believe that no one accent is better than another. The purpose of the Tomato.ai accent softening solution is to help speakers and listeners to more easily get through a conversion, increasing intelligibility and trust. We strive to preserve the style and voice of the speaker, and to retain elements of the original cultural background. As an example, the solution can make a technical support call with a person speaking their second language smoother and less stressful for both speaker and listener.'
                }
            ]
        },
        {
            sectionTitle: 'Protecting Privacy',
            sectionId: 'section-3',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'We are committed to protecting the privacy of our users, and as such, Tomato.ai does not store any voice data per speaker without the speaker\'s explicit permission, and encrypts all data as it is transmitted. Our real-time voice generation process eliminates the need for voice data retention, reducing the risk of data breaches and protecting our users from potential impersonation by hackers.'
                },
            ]
        },
        {
            sectionTitle: 'Voice Data Policy',
            sectionId: 'section-4',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'At Tomato.ai, we strictly refrain from using customer voice data to train models, unless the data was correctly licensed for training models. Moreover, we refrain from selling data to third-party companies. The rights to the voice created using our technology solely belong to the customer, empowering them with complete control over their synthesized voice.'
                },
                {
                    type: 'paragraph',
                    text: 'To uphold ethical practices, Tomato.ai requires that all materials used in conjunction with our technology, including integrated content and related metadata, are either produced by the user, correctly licensed from third-party rights holders, used within the rights holder\'s permissions, or legally acquired in any other manner.'
                },
            ]
        },
        {
            sectionTitle: 'Prohibited Use Cases',
            sectionId: 'section-5',
            sectionContent: [
                {
                    type: 'list',
                    listTitle: 'Tomato.ai\'s real-time accent softening technology is not to be abused. Prohibited uses include but are not limited to:',
                    items: [
                        {
                            subtitle: '',
                            itemText: 'Impersonating any individual, company, administration, or entity without explicit authorization.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Propagating hate speech, engaging in discrimination, libel, terrorism, or any form of violent activities.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Spreading unattributed content or misrepresenting sources.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Exploiting or manipulating children in any way.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Making wide scale unsolicited phone calls, vast communications, postings, or messages.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Deceiving or deliberately misleading people.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Conducting illegal activities.'
                        },
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'At Tomato.ai, we remain dedicated to ensuring that our real-time voice synthesis technology is utilized responsibly, ethically, and for positive contributions to society. We are committed to upholding these principles and continuously improving our technology to align with the highest ethical standards.'
                },
            ]
        },
    ]
};