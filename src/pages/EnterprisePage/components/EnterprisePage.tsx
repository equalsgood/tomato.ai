import cls from './EnterprisePage.module.css';
import { EnterpriseContent, EnterpriseIntroduction } from 'sections/enterprise';
import { FeaturedCompaniesLight, InfoMenu } from 'sections/common';

const EnterprisePage = () => {
    return (
        <main className={cls.main}>
            <EnterpriseIntroduction/>
            <FeaturedCompaniesLight/>
            <EnterpriseContent/>
            <InfoMenu isEnterprise/>
        </main>
    );
};

export default EnterprisePage;