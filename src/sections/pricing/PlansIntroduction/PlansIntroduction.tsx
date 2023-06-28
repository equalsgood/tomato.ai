import cls from './PlansIntroduction.module.css';
import { Text, TextVariants } from 'shared/components';
import { PlanDescription } from './components/PlanDescription/PlanDescription';
import BronzeIcon from 'shared/assets/icons/plans/bronze.svg';
import SilverIcon from 'shared/assets/icons/plans/silver.svg';
import GoldIcon from 'shared/assets/icons/plans/gold.svg';
import PlatinumIcon from 'shared/assets/icons/plans/platinum.svg';

export const PlansIntroduction = () => {
    return (
        <section className={cls.section}>
            <Text tag="h1" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>Pricing / Plans</Text>
            <Text tag="p" variant={TextVariants.PARAGRAPH_DARK_MEDIUM} classNamesProps={cls.paragraph}>Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. </Text>
            <ul className={cls.plans}>
                {plans.map(plan =>
                    <PlanDescription
                        key={`${plan.name}-plan-description`}
                        mostPopular={plan.mostPopular}
                        name={plan.name}
                        icon={plan.icon}
                        cost={plan.cost}
                        features={plan.features}
                    />
                )}
            </ul>
        </section>
    );
};

interface PlanFeature {
    status: 'available' | 'unavailable' | 'vip',
    description: string
}

export interface Plan {
    mostPopular: boolean,
    name: string,
    icon: JSX.Element,
    cost: string,
    features: Array<PlanFeature>
}

const plans: Array<Plan> = [
    {
        mostPopular: false,
        name: 'Bronze',
        icon: <BronzeIcon/>,
        cost: 'Free',
        features: [
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            },
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            },
            {
                status: 'unavailable',
                description: 'Lorem ipsum dolor sit amet consectetur.'
            },
            {
                status: 'unavailable',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet consectetur.'
            },
            {
                status: 'unavailable',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            }
        ]
    },
    {
        mostPopular: false,
        name: 'Silver',
        icon: <SilverIcon/>,
        cost: '$17/Month',
        features: [
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            },
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            },
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur.'
            },
            {
                status: 'unavailable',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet consectetur.'
            },
            {
                status: 'unavailable',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            }
        ]
    },
    {
        mostPopular: true,
        name: 'Gold',
        icon: <GoldIcon/>,
        cost: '$20/Month',
        features: [
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            },
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            },
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur.'
            },
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet consectetur.'
            },
            {
                status: 'vip',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            }
        ]
    },
    {
        mostPopular: false,
        name: 'Platinum',
        icon: <PlatinumIcon/>,
        cost: 'Let’s Talk',
        features: [
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            },
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            },
            {
                status: 'available',
                description: 'Lorem ipsum dolor sit amet consectetur.'
            },
            {
                status: 'vip',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet consectetur.'
            },
            {
                status: 'vip',
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum'
            }
        ]
    }
];