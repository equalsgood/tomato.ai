import React from 'react';
import { Benefits, HomeComments, HomeIntroduction, Map, PoweredByAi } from 'sections/home';
import { CtaTitle, FeaturedCompanies, FeaturedCompaniesVariants, InfoMenu } from 'sections/common';


const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <Benefits/>
            <HomeComments/>
            <InfoMenu/>
            <FeaturedCompanies variant={FeaturedCompaniesVariants.DEFAULT}/>
            <PoweredByAi/>
            <Map/>
            <CtaTitle/>
        </main>
    );
};

export default HomePage;