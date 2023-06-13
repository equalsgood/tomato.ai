import cls from './EnterprisePage.module.css';
import { EnterpriseContent, EnterpriseIntroduction } from 'sections/enterprise';
import { FeaturedCompaniesLight } from 'sections/common';

const EnterprisePage = () => {
    return (
        <main className={cls.main}>
            <EnterpriseIntroduction/>
            <FeaturedCompaniesLight/>
            <EnterpriseContent/>
        </main>
    );
};

export default EnterprisePage;