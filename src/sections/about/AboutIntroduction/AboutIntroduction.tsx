import cls from './AboutIntroduction.module.css';
import { Text, TextVariants } from 'shared/components';
import { scrollSmoothTo } from 'shared/lib';
import introImage from 'shared/assets/images/double-images/about-1.png';

export const AboutIntroduction = () => {
    return (
        <section className={cls.about}>
            <div className={cls.infoContainer}>
                <div className={cls.info}>
                    <Text tag="span" variant={TextVariants.BADGE} classNamesProps={cls.badge}>mission</Text>
                    <Text tag="h1" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>
                        To <span className={cls.blue}>clarify speech</span> in order to <span className={cls.yellow}>improve understanding</span> and increase <span className={cls.green}>access to jobs</span>
                    </Text>
                    <a onClick={() => scrollSmoothTo('available-roles')} className={cls.action}>
                        <span>Contact us</span>
                    </a>
                </div>
            </div>
            <div className={cls.imageContainer}>
                <img alt="image of a working team partying" width={1000} src={introImage}/>
            </div>
        </section>
    );
};