import cls from './CareersBenefits.module.css';
import { Text, TextVariants } from 'shared/components';
import classNames from 'classnames';
import GrowingIcon from 'shared/assets/icons/careers-benefits/growing.svg';
import EducationIcon from 'shared/assets/icons/careers-benefits/education.svg';
import InsuranceIcon from 'shared/assets/icons/careers-benefits/insurance.svg';
import RateIcon from 'shared/assets/icons/careers-benefits/rate.svg';
import { CareersBenefit } from './components/CareersBenefit';

export const CareersBenefits = () => {
    return (
        <section className={cls.benefits}>
            <div className={cls.titleContainer}>
                <Text tag="h2" variant={TextVariants.TITLE} classNamesProps={cls.title}>Benefits</Text>
                <a className={classNames(cls.benefitsMore, cls.hidden)}>Read more about Benefits</a>
            </div>
            <ul className={cls.benefitsContainer}>
                {benefits.map(benefit =>
                    <CareersBenefit
                        key={`${benefit.title}-careers-benefit`}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                    />
                )}
            </ul>
        </section>
    );
};

export interface CareerBenefit {
    icon: JSX.Element,
    title: string,
    description: string
}

const benefits: Array<CareerBenefit> = [
    {
        icon: <GrowingIcon/>,
        title: 'Fast Growing Company',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec.'
    },
    {
        icon: <RateIcon/>,
        title: 'Hourly rate higher than market',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec.'
    },
    {
        icon: <EducationIcon/>,
        title: 'Free Education boost courses',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec.'
    },
    {
        icon: <InsuranceIcon/>,
        title: 'World Wide Heatlh Insurance',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec.'
    },
];