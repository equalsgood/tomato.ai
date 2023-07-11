import cls from './HomeIntroduction.module.css';
import { HomeIntroTitle } from './components/HomeIntroTitle/HomeIntroTitle';
import { HomeSoundExamples } from './components/HomeSoundExamples/HomeSoundExamples';
import firstBackground from 'shared/assets/images/bg/home-bg-rect-1.png';
import secondBackground from 'shared/assets/images/bg/home-bg-rect-2.png';

export const HomeIntroduction = () => {
    return (
        <section className={cls.introductionSection}>
            <HomeIntroTitle/>
            <HomeSoundExamples/>
        </section>
    );
};