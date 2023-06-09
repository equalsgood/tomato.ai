import React from 'react';
import { Benefits, HomeIntroduction } from 'features/home';

const HomePage = () => {
    return (
        <div>
            <HomeIntroduction/>
            <Benefits/>
        </div>
    );
};

export default HomePage;