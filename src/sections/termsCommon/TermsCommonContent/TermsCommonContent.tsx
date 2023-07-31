import { TermsPageSchema } from 'pages/terms';
import { Text, TextVariants } from 'shared/components';
import cls from './TermsCommonContent.module.css';
import { Fragment, useContext, useEffect, useState } from 'react';
import { isInViewport } from 'shared/lib';
import { Context } from 'app/providers/ContextProvider';
import {
    TermsCommonContentMobile
} from './components/TermsCommonContentMobile/TermsCommonContentMobile';

interface TermsContentProps {
    content: TermsPageSchema;
    onChange: (menuIndex: number) => void;
    currentMenuIndex: number;
}

export const TermsCommonContent = (props: TermsContentProps) => {
    const { isMobile } = useContext(Context);
    const { content, onChange, currentMenuIndex } = props;
    const [sectionsIds, setSectionIds] = useState<Array<string>>([]);
    const [newMenuIndex, setNewMenuIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(newMenuIndex);
        }, 300);

        return () => clearTimeout(timeout);
    }, [newMenuIndex]);

    useEffect(() => {
        const newSectionsIds = content.sections.map(section => section.sectionId);
        setSectionIds(newSectionsIds);
    }, [content]);

    const scrollHandler = () => {
        let isViewportSectionFound = false;
        for (const sectionId of sectionsIds) {
            const isSectionInViewPort = isInViewport(sectionId);
            if(isSectionInViewPort) {
                isViewportSectionFound = true;
                setNewMenuIndex(sectionsIds.indexOf(sectionId));
            }
        }
        if(!isViewportSectionFound) {
            setNewMenuIndex(0);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => removeEventListener('scroll', scrollHandler);
    }, [sectionsIds]);

    if(isMobile) {
        return (
            <TermsCommonContentMobile currentMenuIndex={currentMenuIndex} content={content}/>
        );
    }

    return (
        <div className={cls.contentWrapper}>
            <Text tag="h1" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>{content.title}</Text>
            { content.sections.map(section =>
                <section id={section.sectionId} key={section.sectionId} className={cls.section}>
                    <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL} classNamesProps={cls.subtitle}>{section.sectionTitle}</Text>
                    { section.sectionContent.map((contentPart, index) =>
                        <Fragment key={`${section.sectionTitle}-content-part-${index}`}>
                            { contentPart.type === 'paragraph' &&
                                <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>{contentPart.text}</Text>
                            }
                            { contentPart.type === 'image' &&
                                <img alt={contentPart.alt} src={contentPart.src}/>
                            }
                            { contentPart.type === 'list' &&
                                <>
                                    {contentPart.listTitle && <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>{contentPart.listTitle}</Text>}
                                    <ul>
                                        {contentPart.items.map((item, index) =>
                                            <li key={`${section.sectionId}-list-item-${index}`}>
                                                {item.subtitle && <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.itemSubtitle}>{item.subtitle}</Text>}
                                                <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>{item.itemText}</Text>
                                            </li>
                                        )}
                                    </ul>
                                </>
                            }
                        </Fragment>
                    )}
                </section>
            )}
        </div>
    );
};

