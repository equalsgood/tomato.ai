import cls from './AboutIntroduction.module.css';
import { Text, TextVariants } from 'shared/components';
import { scrollSmoothTo } from 'shared/lib';
import introImage from 'shared/assets/images/double-images/about-1.png';
import { ContactUsPopup } from 'sections/about/AboutIntroduction/components/ContactUsPopup/ContactUsPopup';
import { useCallback, useState } from 'react';

export const AboutIntroduction = () => {
    const [open, setOpen] = useState(false);

    const closeHandler = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <section className={cls.about}>
            <div className={cls.infoContainer}>
                <div className={cls.info}>
                    <Text tag="span" variant={TextVariants.BADGE} classNamesProps={cls.badge}>mission</Text>
                    <Text tag="h1" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>
                        To <span className={cls.blue}>clarify speech</span> in order to <span className={cls.yellow}>improve understanding</span> and increase <span className={cls.green}>access to jobs</span>
                    </Text>
                    <button onClick={() => setOpen(true)} className={cls.action}>
                        <span>Contact us</span>
                    </button>
                </div>
            </div>
            <div className={cls.imageContainer}>
                <img alt="image of a working team partying" width={1000} src={introImage}/>
            </div>
            <ContactUsPopup open={open} onClose={closeHandler}/>
        </section>
    );
};