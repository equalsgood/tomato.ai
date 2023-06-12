import React from 'react';
import { Benefits, HomeComments, HomeIntroduction } from 'features/home';
import { InfoMenu } from 'features/common';

const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <Benefits/>
            <HomeComments/>
            <InfoMenu/>
        </main>
    );
};

export default HomePage;