import cls from './HomeIntroduction.module.css';
import { HomeIntroTitle } from './components/HomeIntroTitle/HomeIntroTitle';
import { HomeSoundExamples } from './components/HomeSoundExamples/HomeSoundExamples';

export const HomeIntroduction = () => {
    return (
        <section className={cls.introductionSection}>
            <HomeIntroTitle/>
            <HomeSoundExamples/>
        </section>
    );
};