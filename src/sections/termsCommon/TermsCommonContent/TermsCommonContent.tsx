import { TermsPageSchema } from 'pages/terms';
import { Text, TextVariants } from 'shared/components';
import cls from './TermsCommonContent.module.css';
import { Fragment, useEffect, useState } from 'react';
import { isInViewport } from 'shared/lib';

interface TermsContentProps {
    content: TermsPageSchema;
    onChange: (menuIndex: number) => void;
}

export const TermsCommonContent = (props: TermsContentProps) => {
    const { content, onChange } = props;
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
        for (const sectionId of sectionsIds) {
            const isSectionInViewPort = isInViewport(sectionId);
            if(isSectionInViewPort) {
                setNewMenuIndex(sectionsIds.indexOf(sectionId));
            }
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => removeEventListener('scroll', scrollHandler);
    }, [sectionsIds]);

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
                        </Fragment>
                    )}
                </section>
            )}
        </div>
    );
};

