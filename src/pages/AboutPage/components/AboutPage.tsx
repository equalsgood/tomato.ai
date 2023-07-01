import { AboutFounders, AboutIntroduction } from 'sections/about';
import { FeaturedCompanies, FeaturedCompaniesVariants } from 'sections/common';
import cls from './AboutPage.module.css';
import backgroundImage from 'shared/assets/images/bg/about-bg.png';

const AboutPage = () => {
    return (
        <main className={cls.main}>
            <AboutIntroduction/>
            <AboutFounders/>
            <FeaturedCompanies variant={FeaturedCompaniesVariants.TITLED} title="Supported by leading investors"/>
            <img alt="background image" src={backgroundImage} className={cls.image} />
        </main>
    );
};

export default AboutPage;