import React from 'react';
import { Benefits, HomeComments, HomeIntroduction, Map, PoweredByAi } from 'sections/home';
import { CtaTitle, FeaturedCompanies, FeaturedCompaniesVariants, InfoMenu } from 'sections/common';
import firstBackground from 'shared/assets/images/bg/home-bg-rect-1.png';
import secondBackground from 'shared/assets/images/bg/home-bg-rect-2.png';
import cls from './HomePage.module.css';

const HomePage = () => {
    return (
        <main className={cls.main}>
            <HomeIntroduction/>
            <Benefits/>
            <HomeComments/>
            <InfoMenu/>
            <FeaturedCompanies variant={FeaturedCompaniesVariants.DEFAULT}/>
            <PoweredByAi/>
            <Map/>
            <CtaTitle/>
            <img alt="background image 1" src={firstBackground} className={cls.right} />
            <img alt="background image 2" src={secondBackground} className={cls.left} />
        </main>
    );
};

export default HomePage;