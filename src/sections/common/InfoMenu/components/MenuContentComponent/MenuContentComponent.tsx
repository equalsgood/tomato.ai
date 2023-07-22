import cls from './MenuContentComponent.module.css';
import classNames from 'classnames';
import { AudioPlayer, Text, TextVariants } from 'shared/components';

export enum MenuContentComponentVariants {
    Pronunciation = 'pronunciation',
    Quality = 'quality',
    Cancellation = 'cancellation',
    Preserve = 'preserve',
}

interface MenuContentComponentProps {
    isEnterprise: boolean | undefined;
    title: string;
    paragraph: string;
    audioOriginalSrc: string;
    audioEnhancedSrc: string;
    imageSrc: string;
    imageDarkSrc: string;
    variant: MenuContentComponentVariants;
}

export const MenuContentComponent = (props: MenuContentComponentProps) => {
    const { isEnterprise, audioOriginalSrc, audioEnhancedSrc, imageSrc, title, paragraph, imageDarkSrc, variant } = props;

    return (
        <div className={classNames(cls.section, cls[variant])}>
            <Text tag="h3" variant={isEnterprise ? TextVariants.TITLE_EXTRA_SMALL_REVERSED : TextVariants.TITLE_EXTRA_SMALL} classNamesProps={cls.title}>
                {title}
            </Text>
            <Text tag="p" variant={isEnterprise ? TextVariants.PARAGRAPH_TITLE : TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>
                {paragraph}
            </Text>
            <div className={cls.contentContainer}>
                <AudioPlayer audioId={`${title}-original-id`} src={audioOriginalSrc} type="original" size="small"/>
                <img src={isEnterprise ? imageDarkSrc : imageSrc} alt={`${title} content picture`}/>
                <AudioPlayer audioId={`${title}-enhanced-id`} src={audioEnhancedSrc} type="enhanced" size="small"/>
            </div>
        </div>
    );
};