import React from 'react';
import { Benefits, HomeComments, HomeIntroduction, Map, PoweredByAi } from 'sections/home';
import { FeaturedCompanies, InfoMenu } from 'sections/common';


const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <Benefits/>
            <HomeComments/>
            <InfoMenu/>
            <FeaturedCompanies/>
            <PoweredByAi/>
            <Map/>
        </main>
    );
};

export default HomePage;