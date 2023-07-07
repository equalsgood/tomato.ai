import cls from './CareersBenefit.module.css';
import { CareerBenefit } from '../CareersBenefits';
import { Text, TextVariants } from 'shared/components';

export const CareersBenefit = (props: CareerBenefit) => {
    const { icon, title, description } = props;

    return (
        <li className={cls.benefit}>
            <div className={cls.titleContainer}>
                <div className={cls.icon}>
                    {icon}
                </div>
                <Text tag="h3" variant={TextVariants.SUBTITLE_MEDIUM} classNamesProps={cls.title}>{title}</Text>
            </div>
            <div className={cls.descriptionContainer}>
                <Text tag="p" variant={TextVariants.DEFAULT} classNamesProps={cls.description}>{description}</Text>
            </div>
        </li>
    );
};