import cls from './CareersAvailableRoles.module.css';
import { Text, TextVariants } from 'shared/components';
import { AvailableRole } from './components/AvailableRole';
import SupportIcon from 'shared/assets/icons/career-roles/support.svg';
import HrIcon from 'shared/assets/icons/career-roles/hr.svg';
import ManagerIcon from 'shared/assets/icons/career-roles/manager.svg';

export const CareersAvailableRoles = () => {
    return (
        <section id="available-roles" className={cls.section}>
            <div className={cls.availableRolesContainer}>
                <Text tag="h2" variant={TextVariants.TITLE_SMALL} classNamesProps={cls.title}>Available Roles</Text>
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
        title: 'Customer Support in Call Center',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum...',
        location: 'New York City, NY',
        rate: '$35K-$45K',
        applyLink: '/'
    },
    {
        icon: <SupportIcon/>,
        title: 'Customer Support in Main Office',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum...',
        location: 'Los Angeles, CA',
        rate: '$45K-$55K',
        applyLink: '/'
    },
    {
        icon: <ManagerIcon/>,
        title: 'Office Manager',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum...',
        location: 'Los Angeles, CA',
        rate: '$45K-$55K',
        applyLink: '/'
    },
    {
        icon: <HrIcon/>,
        title: 'HR assistant',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum...',
        location: 'Los Angeles, CA',
        rate: '$45K-$55K',
        applyLink: '/'
    },
];