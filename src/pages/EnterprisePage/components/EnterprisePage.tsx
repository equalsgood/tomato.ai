import cls from './EnterprisePage.module.css';
import { EnterpriseIntroduction } from 'sections/enterprise';

const EnterprisePage = () => {
    return (
        <main className={cls.main}>
            <EnterpriseIntroduction/>
        </main>
    );
};

export default EnterprisePage;