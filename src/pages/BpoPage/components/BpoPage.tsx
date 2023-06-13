import { BpoContent, BpoIntroduction } from 'sections/bpo';
import { FeaturedCompanies } from 'sections/common';

const BpoPage = () => {
    return (
        <main>
            <BpoIntroduction/>
            <FeaturedCompanies/>
            <BpoContent/>
        </main>
    );
};

export default BpoPage;