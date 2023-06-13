import React from 'react';
import { Benefits, HomeComments, HomeIntroduction } from 'sections/home';
import { FeaturedCompanies, InfoMenu } from 'sections/common';


const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <Benefits/>
            <HomeComments/>
            <InfoMenu/>
            <FeaturedCompanies/>
        </main>
    );
};

export default HomePage;