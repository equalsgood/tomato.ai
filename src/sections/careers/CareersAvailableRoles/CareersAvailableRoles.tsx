import cls from './CareersAvailableRoles.module.css';
import { Text, TextVariants } from 'shared/components';
import { AvailableRole } from './components/AvailableRole';
import SupportIcon from 'shared/assets/icons/career-roles/dev.svg';

export const CareersAvailableRoles = () => {
    return (
        <section id="available-roles" className={cls.section}>
            <div className={cls.availableRolesContainer}>
                <Text tag="h2" variant={TextVariants.TITLE} classNamesProps={cls.title}>Available Roles</Text>
                <ul className={cls.roles}>
                    {roles.map((role, index) =>
                        <AvailableRole
                            key={`career-role-${index}`}
                            icon={role.icon}
                            title={role.title}
                            description={role.description}
                            location={role.location}
                            rate={role.rate}
                            applyLink={role.applyLink}
                        />
                    )}
                </ul>
            </div>
        </section>
    );
};

export interface CareerRole {
    icon: JSX.Element,
    title: string,
    description: string,
    location: string,
    rate: string,
    applyLink: string,
}

const roles: Array<CareerRole> = [
    {
        icon: <SupportIcon/>,
        title: 'Senior Speech Scientist',
        description: 'We are looking for a senior machine learning scientist experienced in speech technology to help us improve our speech-to-speech deep learning model. They should be excited about our mission to give millions of people better economic opportunities by clarifying their speech.',
        location: 'Bay Area preferred. Open to remote globally',
        rate: 'Competitive Pay',
        applyLink: '/'
    },
    {
        icon: <SupportIcon/>,
        title: 'Infra ML Engineer',
        description: 'Build and Improve the model inference infrastructure to reduce latency and improve handling of streaming audio inputs. Improve the model training infrastructure in PyTorch, e.g. training speed, job management, log management, and Cloud storage integration, Build and improve data processing infrastructure.',
        location: 'Remote in US time zones',
        rate: 'Competitive Pay',
        applyLink: '/'
    }
];