import cls from '../../TermsCommonContent.module.css';
import { Text, TextVariants } from 'shared/components';
import { Fragment, useEffect, useState } from 'react';
import { TermsContentSection, TermsPageSchema } from 'pages/terms';

interface TermsCommonContentMobileProps {
    currentMenuIndex: number;
    content: TermsPageSchema;
}

export const TermsCommonContentMobile = (props: TermsCommonContentMobileProps) => {
    const { content, currentMenuIndex } = props;
    const [currentSection, setCurrentSection] = useState<TermsContentSection>(content.sections[0]);

    useEffect(() => {
        const newSection = content.sections[currentMenuIndex];
        setCurrentSection(newSection || content.sections[0]);
    }, [currentMenuIndex, content]);

    if(!currentSection)
        return <div></div>;

    return (
        <div className={cls.contentWrapper}>
            <Text tag="h1" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>{content.title}</Text>
            <section id={currentSection.sectionId} key={currentSection.sectionId} className={cls.section}>
                <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL} classNamesProps={cls.subtitle}>{currentSection.sectionTitle}</Text>
                { currentSection.sectionContent.map((contentPart, index) =>
                    <Fragment key={`${currentSection.sectionTitle}-content-part-${index}`}>
                        { contentPart.type === 'paragraph' &&
                            <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>{contentPart.text}</Text>
                        }
                        { contentPart.type === 'image' &&
                            <div className={cls.imageWrapper}>
                                <img className={contentPart.classNameProps} alt={contentPart.alt} src={contentPart.mobileSrc ? contentPart.mobileSrc : contentPart.src}/>
                            </div>
                        }
                        { contentPart.type === 'list' &&
                            <div className={cls.listContainer}>
                                {contentPart.listTitle && <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>{contentPart.listTitle}</Text>}
                                <ul>
                                    {contentPart.items.map((item, index) =>
                                        <li key={`${currentSection.sectionId}-list-item-${index}`}>
                                            <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>
                                                {item.subtitle && <Text tag="span" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.itemSubtitle}>{item.subtitle}{'\u00A0'}</Text>}
                                                {item.itemText}
                                            </Text>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        }
                        { contentPart.type === 'downloadLink' &&
                            <a className={cls.download} href={contentPart.src} download>
                                {contentPart.text}
                            </a>
                        }
                    </Fragment>
                )}
            </section>
        </div>
    );
};