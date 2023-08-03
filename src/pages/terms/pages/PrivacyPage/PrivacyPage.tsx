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

const content: TermsPageSchema = {
    title: 'Privacy',
    sections: [
        {
            sectionTitle: 'Privacy Policy',
            sectionId: 'section-1',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'Last Updated: Nov 30, 2022'
                },
                {
                    type: 'paragraph',
                    text: 'This Privacy Policy describes the privacy practices of Tomato AI, Inc. ( “we”, “us”, or “our”) and how we handle personal information that we collect through our website — https://tomato.ai, through any other website that we own or control and which posts to this Privacy Policy, and through other interactions and correspondence with you (collectively, the “Service” or “Services”).'
                },
                {
                    type: 'paragraph',
                    text: 'We treat all personal information covered by this Privacy Policy as pertaining to individuals acting as business representatives, and not in their individual or household capacity. This Privacy Policy does not apply to personal information we process on behalf of our enterprise customers in our capacity as a service provider.'
                }
            ]
        },
        {
            sectionTitle: 'Personal Info Collection',
            sectionId: 'section-2',
            sectionContent: [
                {
                    type: 'list',
                    listTitle: 'Information you provide to us may include:',
                    items: [
                        {
                            subtitle: 'Contact details,',
                            itemText: 'such as your first and last name, email and mailing addresses, social media handle, phone number, professional title, and company name.'
                        },
                        {
                            subtitle: 'Account information, ',
                            itemText: 'such as the username and password you use to access our customer portal.'
                        },
                        {
                            subtitle: 'Communications',
                            itemText: 'that we exchange with you, including when you contact us with questions, feedback, or otherwise.'
                        },
                        {
                            subtitle: 'Marketing data,',
                            itemText: 'such as your preferences for receiving our marketing communications, and details about your engagement with them.'
                        },
                        {
                            subtitle: 'Other data',
                            itemText: 'not specifically listed here, which we will use as described in this Privacy Policy or as otherwise disclosed at the time of collection.'
                        },
                    ]
                },
            ]
        },
        {
            sectionTitle: 'Third Party Info',
            sectionId: 'section-3',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'We may maintain pages on social media platforms, such as Twitter, LinkedIn, Facebook, and other third-party platforms. When you visit or interact with our pages on those platforms, the platform provider’s privacy policy will apply to your interactions and their collection, use and processing of your personal information. You or the platforms may provide us with information through the platform, and we will treat such information in accordance with this Privacy Policy. We may obtain your personal information from other third parties, such as publicly-available sources and data providers.'
                },
            ]
        },
        {
            sectionTitle: 'Automatic Data Collection',
            sectionId: 'section-4',
            sectionContent: [
                {
                    type: 'list',
                    listTitle: 'We and our service providers may automatically log information about you, your computer or mobile device, and your interaction over time with our website and the Services, our communications and other online services, such as:',
                    items: [
                        {
                            subtitle: 'Device data,',
                            itemText: 'such as your computer’s or mobile device’s operating system type and version, manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g., phone, tablet), IP address, language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 3G), and general location information such as city, state, or geographic area.'
                        },
                        {
                            subtitle: 'Online activity data,',
                            itemText: 'such as pages or screens you viewed, how long you spent on a page or screen, the website you visited before browsing to the website, navigation paths between pages or screens, information about your activity on a page or screen, access times, and duration of access, and whether you have opened our marketing emails or clicked links within them.'
                        },
                    ]
                },
                {
                    type: 'list',
                    listTitle: 'We use the following tools for automatic data collection:',
                    items: [
                        {
                            subtitle: 'Cookies,',
                            itemText: 'which are text files that websites store on a visitor‘s device to uniquely identify the visitor’s browser or to store information or settings in the browser for the purpose of helping you navigate between pages efficiently, remembering your preferences, enabling functionality, and helping us understand user activity and patterns.'
                        },
                        {
                            subtitle: 'Local storage technologies,',
                            itemText: 'like HTML5, that provide cookie-equivalent functionality but can store larger amounts of data, including on your device outside of your browser in connection with specific applications.'
                        },
                        {
                            subtitle: 'Web beacons,',
                            itemText: 'also known as pixel tags or clear GIFs, which are used to demonstrate that a webpage or email was accessed or opened, or that certain content was viewed or clicked.'
                        },
                    ]
                },
            ]
        },
        {
            sectionTitle: 'Use of Personal Info',
            sectionId: 'section-5',
            sectionContent: [
                {
                    type: 'list',
                    listTitle: 'We use your personal information to operate our services:',
                    items: [
                        {
                            subtitle: '',
                            itemText: 'Provide, operate, maintain, secure, and improve our Services.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Provide information about our Services.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Communicate with you about our Services, including by sending you announcements, updates, security alerts, and support and administrative messages.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Understand your needs and interests, and personalize your experience with our Services and our communications.'
                        },
                        {
                            subtitle: '',
                            itemText: 'Respond to your requests, questions, and feedback.'
                        },
                    ]
                },
            ]
        },
        {
            sectionTitle: 'R&D and Direct marketing',
            sectionId: 'section-6',
            sectionContent: [
                {
                    type: 'paragraph',
                    paragraphTitle: 'Research and development.',
                    text: 'As part of these activities, we may create aggregated, de-identified or other anonymous data from personal information we collect. We may use this anonymous data and share it with third parties for our lawful business purposes, including to analyze and improve the Services, and promote our business.'
                },
                {
                    type: 'paragraph',
                    paragraphTitle: 'Direct marketing.',
                    text: 'We may send you direct marketing communications as permitted by law via postal mail, email, telephone, text message, and other means. You may opt out of our marketing communications as described in the “Opt out of marketing communications” section below.'
                },
            ]
        },
        {
            sectionTitle: 'Sharing of Personal Info',
            sectionId: 'section-7',
            sectionContent: [
                {
                    type: 'list',
                    listTitle: 'We may share your personal information with:',
                    items: [
                        {
                            subtitle: 'Affiliates.',
                            itemText: 'Our corporate parent, subsidiaries, and affiliates, for purposes consistent with this Privacy Policy.'
                        },
                        {
                            subtitle: 'Service providers.',
                            itemText: 'Companies and individuals that provide services on our behalf or help us operate our Services or our business (such as banking partners, hosting, information technology, customer support, email delivery, and website analytics services).'
                        },
                        {
                            subtitle: 'Professional advisors.',
                            itemText: 'Professional advisors, such as lawyers, auditors, bankers, and insurers, where necessary in the course of the professional services that they render to us.'
                        },
                        {
                            subtitle: 'Authorities and others.',
                            itemText: 'Law enforcement, government authorities, and private parties, as we believe in good faith to be necessary or appropriate for the compliance and protection purposes described above.'
                        },
                        {
                            subtitle: 'Business transferees.',
                            itemText: 'Acquirers and other relevant participants in business transactions (or negotiations for such transactions) involving a corporate divestiture, merger, consolidation, acquisition, reorganization, sale, or other disposition of all or any portion of the business or assets of, or equity interests in, Tomato AI, Inc. (including, in connection with a bankruptcy or similar proceedings).'
                        },
                    ]
                },
            ]
        },
        {
            sectionTitle: 'Job Applicants',
            sectionId: 'section-8',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'When you visit the “Careers” portion of our website, we collect the information that you provide to us in connection with your job application. This includes business and personal contact information, professional credentials and skills, educational and work history, and other information of the type that may be included in a resume. This may also include diversity information that you voluntarily provide. We use this information to facilitate our recruitment activities and process employment applications, such as by evaluating a job candidate for an employment activity, and monitoring recruitment statistics. We may also use this information to provide improved administration of the website, and as otherwise necessary (a) to comply with relevant laws or to respond to subpoenas or warrants served on us; (b) to protect and defend the rights or property of us or others; (c) in connection with a legal investigation; and/or (d) to investigate or assist in preventing any violation or potential violation of the law, this Privacy Policy, or our Terms of Service.'
                },
            ]
        },
        {
            sectionTitle: 'Changes to Privacy Policy',
            sectionId: 'section-9',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the website.'
                },
            ]
        },
        {
            sectionTitle: 'How to Contact Us',
            sectionId: 'section-10',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'You can reach us by email at support@tomato.ai, by telephone at (415) 264-5160 or at the following mailing address:'
                },
                {
                    type: 'paragraph',
                    text: 'Tomato AI, Inc.'
                },
                {
                    type: 'paragraph',
                    text: '3494 Camino Tassajara  #1011'
                },
                {
                    type: 'paragraph',
                    text: 'Danville, CA 94506'
                },
            ]
        },
    ]
};