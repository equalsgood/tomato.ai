import { TermsCommonContent, TermsCommonMenu } from 'sections/termsCommon';
import cls from '../../styles.module.css';
import imagesCls from './GuidelinesPage.module.css';
import backgroundImageOne from 'shared/assets/images/bg/terms-bg-1.png';
import backgroundImageTwo from 'shared/assets/images/bg/terms-bg-2.png';
import { TermsPageSchema } from '../../types';
import { useMemo, useState } from 'react';
import iconUsageImage from 'shared/assets/images/guidelines/icon-usage.png';
import logoUsageImage from 'shared/assets/images/guidelines/logo-usage.png';
import paletteImage from 'shared/assets/images/guidelines/palette.png';
import typographyImage from 'shared/assets/images/guidelines/typography.png';
import wrongUsageImage from 'shared/assets/images/guidelines/wrong-usage.png';
import iconUsageImageMobile from 'shared/assets/images/guidelines/icon-usage-mobile.png';
import logoUsageImageMobile from 'shared/assets/images/guidelines/logo-usage-mobile.png';
import paletteImageMobile from 'shared/assets/images/guidelines/palette-mobile.png';
import typographyImageMobile from 'shared/assets/images/guidelines/typography-mobile.png';
import wrongUsageImageMobile from 'shared/assets/images/guidelines/wrong-usage-mobile.png';
import zipFile from 'shared/samples/logos-and-icons.zip';

const GuidelinesPage = () => {
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

export default GuidelinesPage;

const content: TermsPageSchema = {
    title: 'Brand Guidelines',
    sections: [
        {
            sectionTitle: 'Logo Usage',
            sectionId: 'section-1',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'The Tomato.ai logo colors consist of an icon with two colors and a single color for the text, or it may consist of a single color across the text and icon. Below are examples of how to use different versions of logo over light and dark background colors.'
                },
                {
                    type: 'image',
                    src: logoUsageImage,
                    mobileSrc: logoUsageImageMobile,
                    alt: 'logo Usage Image',
                    classNameProps: imagesCls.logoUsage
                }
            ]
        },
        {
            sectionTitle: 'Icon Usage',
            sectionId: 'section-2',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'The Tomato.ai icon uses either 2 colors, or a single color as shown below.'
                },
                {
                    type: 'image',
                    src: iconUsageImage,
                    mobileSrc: iconUsageImageMobile,
                    alt: 'icon Usage Image',
                    classNameProps: imagesCls.iconUsage
                }
            ]
        },
        {
            sectionTitle: 'Wrong Usage',
            sectionId: 'section-3',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'The Tomato.ai logo and icon should only be used as described above. The logo and icon should not use other colors, have the dimensions modified, or have the orientation be on an angel and flipped.'
                },
                {
                    type: 'image',
                    src: wrongUsageImage,
                    mobileSrc: wrongUsageImageMobile,
                    alt: 'wrong Usage Image',
                    classNameProps: imagesCls.wrongUsage
                }
            ]
        },
        {
            sectionTitle: 'Color Palette',
            sectionId: 'section-4',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'The Tomato.ai color palette can be seen below. The logo and icon are best used along side these colors.'
                },
                {
                    type: 'image',
                    src: paletteImage,
                    mobileSrc: paletteImageMobile,
                    alt: 'palette Image',
                    classNameProps: imagesCls.palette
                }
            ]
        },
        {
            sectionTitle: 'Typography',
            sectionId: 'section-5',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'The Tomato.ai logo and icon are best used alongside the “Satoshi” font from the Google Fonts Library. Below are various variations of that font in use.'
                },
                {
                    type: 'image',
                    src: typographyImage,
                    mobileSrc: typographyImageMobile,
                    alt: 'typography Image',
                    classNameProps: imagesCls.typography
                }
            ]
        },
        {
            sectionTitle: 'Download Assets',
            sectionId: 'section-6',
            sectionContent: [
                {
                    type: 'paragraph',
                    text: 'Please click the link below to download a zipped file with the approved logo and icon variations.'
                },
                {
                    type: 'downloadLink',
                    text: 'Download Tomato.ai Logos & Icons',
                    src: zipFile
                },
                {
                    type: 'paragraph',
                    text: ''
                },
                {
                    type: 'paragraph',
                    text: ''
                },
                {
                    type: 'paragraph',
                    text: ''
                },
                {
                    type: 'paragraph',
                    text: ''
                },
            ]
        },
    ]
};