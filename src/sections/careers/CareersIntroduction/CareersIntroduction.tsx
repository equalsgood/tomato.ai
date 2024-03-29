import cls from './CareersIntroduction.module.css';
import { Text, TextVariants } from 'shared/components';
import { scrollSmoothTo } from 'shared/lib';
import introImage from 'shared/assets/images/double-images/careers-1.png';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';

export const CareersIntroduction = () => {
    const { isMobile } = useContext(Context);

    
    return (
        <section className={cls.careers}>
            <div className={cls.info}>
                <Text tag="h1" variant={TextVariants.TITLE} classNamesProps={cls.title}>Join our Tomato.ai team right now!</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>Join our world class team solving problems affecting hundreds of millions of people daily. The impact of your work will be felt widely and you are sure to grow tremendously.</Text>
                <a onClick={() => scrollSmoothTo({ elementId: 'available-roles', block: isMobile ? 'start' : 'center' })} className={cls.action}>
                    <span>Check available roles</span>
                </a>
            </div>
            <div className={cls.imageContainer}>
                <img src={introImage} alt="image that represents teamwork"/>
            </div>
        </section>
    );
};