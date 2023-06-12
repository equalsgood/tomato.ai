import React from 'react';
import { Benefits, HomeComments, HomeIntroduction } from 'features/home';

const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <Benefits/>
            <HomeComments/>
        </main>
    );
};

export default HomePage;