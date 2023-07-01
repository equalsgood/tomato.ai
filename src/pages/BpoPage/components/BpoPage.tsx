import { BpoContent, BpoIntroduction } from 'sections/bpo';
import { CtaTitle, FeaturedCompanies, FeaturedCompaniesVariants, InfoMenu } from 'sections/common';

const BpoPage = () => {
    return (
        <main>
            <BpoIntroduction/>
            <FeaturedCompanies variant={FeaturedCompaniesVariants.DEFAULT}/>
            <BpoContent/>
            <InfoMenu/>
            <CtaTitle/>
        </main>
    );
};

export default BpoPage;