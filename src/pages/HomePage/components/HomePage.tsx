import React from 'react';
import { Benefits, HomeComments, HomeIntroduction, Map } from 'sections/home';
import { FeaturedCompanies, InfoMenu } from 'sections/common';


const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <Benefits/>
            <HomeComments/>
            <InfoMenu/>
            <FeaturedCompanies/>
            <Map/>
        </main>
    );
};

export default HomePage;