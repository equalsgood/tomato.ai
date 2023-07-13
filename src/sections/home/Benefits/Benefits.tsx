import cls from './Benefits.module.css';
import { Text, TextVariants } from 'shared/components';
import ImproveIcon from 'shared/assets/icons/benefits/improve.svg';
import ReduceIcon from 'shared/assets/icons/benefits/reduce.svg';
import BoostIcon from 'shared/assets/icons/benefits/boost.svg';
import HireIcon from 'shared/assets/icons/benefits/hire.svg';

export const Benefits = () => {
    return (
        <section id="benefits" className={cls.benefitsContainer}>
            <div className={cls.benefits}>
                <Text tag="h2" variant={TextVariants.TITLE_REVERSED} classNamesProps={cls.title}>Benefits</Text>
                <ul className={cls.benefitsList}>
                    {benefitsList.map(benefit =>
                        <li key={benefit.title} className={cls.benefit}>
                            <div className={cls.icon}>
                                {benefit.icon}
                            </div>
                            <Text tag="h3" classNamesProps={cls.benefitTitle} variant={TextVariants.SUBHEADER_LIGHT}>{benefit.title}</Text>
                            <Text tag="p" classNamesProps={cls.paragraph} variant={TextVariants.PARAGRAPH_REVERSED_SMALL}>{benefit.text}</Text>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

const benefitsList = [
    {
        icon: <ImproveIcon/>,
        title: 'Improve CSAT',
        text: 'Enhancing the intelligibility of offshore agents in real time, using a speech filter, results in a better overall customer experience',
    },
    {
        icon: <ReduceIcon/>,
        title: 'Reduce agent churn',
        text: 'Lowering the abuse offshore agents encounter, due to their accent, improves the likelihood agents will stay on the job',
    },
    {
        icon: <BoostIcon/>,
        title: 'Boost savings & sales',
        text: 'Improving the offshore customer experience makes it possible to offshore more, saving on costs. Plus it increases sales metrics',
    },
    {
        icon: <HireIcon/>,
        title: 'Hire more offshore agents',
        text: 'Improving the intelligibility of agents using a voice filter makes it possible to hire candidates that otherwise would not be hireable',
    },
];