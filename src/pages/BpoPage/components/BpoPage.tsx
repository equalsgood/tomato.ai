import { BpoContent, BpoIntroduction } from 'sections/bpo';
import { CtaTitle, FeaturedCompanies, InfoMenu } from 'sections/common';

const BpoPage = () => {
    return (
        <main>
            <BpoIntroduction/>
            <FeaturedCompanies/>
            <BpoContent/>
            <InfoMenu/>
            <CtaTitle/>
        </main>
    );
};

export default BpoPage;