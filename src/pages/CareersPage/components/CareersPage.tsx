import { CareersAvailableRoles, CareersBenefits, CareersIntroduction } from 'sections/careers';

const CareersPage = () => {
    return (
        <main>
            <CareersIntroduction/>
            <CareersBenefits/>
            <CareersAvailableRoles/>
        </main>
    );
};

export default CareersPage;