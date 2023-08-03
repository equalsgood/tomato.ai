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
        title: 'Superstar Team Members',
        description: 'The three Tomato.ai founders previously sold four startups and led Contact Center AI work at Google. The rest of the team is made up of highly skilled professionals from leading companies and universities.'
    },
    {
        icon: <RateIcon/>,
        title: 'Competitive Pay',
        description: 'Tomato.ai pays at the top of the pay scale for startups at our stage. The compensation includes a base salary, an annual bonus, and stock options. Employees have clear opportunities for promotion to further increase their pay.'
    },
    {
        icon: <EducationIcon/>,
        title: 'High Learning Environment',
        description: 'Tomato.ai team members are collaborative and always up for helping each other work through challenges. The problems we tackle are super challenging creating lots of opportunities for growth.'
    },
    {
        icon: <InsuranceIcon/>,
        title: 'Compelling Benefits',
        description: 'Tomato.ai provides compelling benefits. We are remote first. Health insurance options have low deductibles and copays. The cost of meals, coworking desks, and utilities, are covered up to a cap. There are multiple fully paid offsites in fun places each year to help the team bond.'
    },
];