import cls from './CareersIntroduction.module.css';
import { Text, TextVariants } from 'shared/components';
import { scrollSmoothTo } from 'shared/lib';
import introImage from 'shared/assets/images/double-images/careers-1.png';

export const CareersIntroduction = () => {
    return (
        <section className={cls.careers}>
            <div className={cls.infoContainer}>
                <div className={cls.info}>
                    <Text tag="h1" variant={TextVariants.TITLE} classNamesProps={cls.title}>Join our Tomato.ai team right now!</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>AI powered voice filter clarifies offshore agent voices as they speak. AI powered voice filter clarifies offshore agent voices as they speak.</Text>
                    <a onClick={() => scrollSmoothTo('available-roles')} className={cls.action}>
                        <span>Check available roles</span>
                    </a>
                </div>
            </div>
            <div className={cls.imageContainer}>
                <img src={introImage} alt="image that represents teamwork"/>
            </div>
        </section>
    );
};