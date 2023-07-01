import cls from './EnterprisePage.module.css';
import { EnterpriseContent, EnterpriseIntroduction } from 'sections/enterprise';
import { CtaTitle, FeaturedCompanies, FeaturedCompaniesVariants, InfoMenu } from 'sections/common';

const EnterprisePage = () => {
    return (
        <main className={cls.main}>
            <EnterpriseIntroduction/>
            <FeaturedCompanies variant={FeaturedCompaniesVariants.LIGHT}/>
            <EnterpriseContent/>
            <InfoMenu isEnterprise/>
            <CtaTitle isEnterprise/>
        </main>
    );
};

export default EnterprisePage;