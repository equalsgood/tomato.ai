import cls from './PlanDescription.module.css';
import { Plan } from '../../PlansIntroduction';
import { Button, ButtonVariants, Divider, Text, TextVariants } from 'shared/components';
import AvailableIcon from 'shared/assets/icons/plans/available.svg';
import UnavailableIcon from 'shared/assets/icons/plans/unavailable.svg';
import VipIcon from 'shared/assets/icons/plans/vip.svg';
import classNames from 'classnames';
import PopularTagIcon from 'shared/assets/icons/plans/popular.svg';

export const PlanDescription = (props: Plan) => {
    const { icon, name, cost, features, mostPopular } = props;

    return (
        <li className={classNames(cls.description, { [cls.mostPopular]: mostPopular })}>
            <div className={cls.descriptionCard}>
                <div className={cls.titleWrapper}>
                    {icon}
                    <Text tag="h2" variant={TextVariants.TITLE_SMALL} classNamesProps={cls.title}>{name}</Text>
                </div>
                <ul className={cls.features}>
                    {features.map((feature, index) =>
                        <li key={`${feature}-${name}-${index}`} className={cls.feature}>
                            {feature.status === 'available' && <AvailableIcon/>}
                            {feature.status === 'unavailable' && <UnavailableIcon/>}
                            {feature.status === 'vip' && <VipIcon/>}
                            <Text
                                tag="p"
                                variant={feature.status === 'unavailable' ? TextVariants.PARAGRAPH_DISABLED : TextVariants.PARAGRAPH_DARK}
                                classNamesProps={cls.featureDescription}
                            >
                                {feature.description}
                            </Text>
                        </li>
                    )}
                </ul>
                <div className={cls.costSection}>
                    <Divider/>
                    <div className={cls.costWrapper}>
                        <Text tag="p" variant={TextVariants.PARAGRAPH_DARK_MEDIUM} classNamesProps={cls.costBadge}>COST:</Text>
                        <Text tag="p" variant={TextVariants.SUBTITLE_MEDIUM} classNamesProps={cls.cost}>{cost}</Text>
                    </div>
                    <Button
                        type="button"
                        text="Choose Plan"
                        variant={ mostPopular ? ButtonVariants.ACTION : ButtonVariants.OUTLINED}
                    />
                </div>
            </div>
            { mostPopular &&
                <div className={cls.mostPopularBadge}>
                    <div className={cls.mostPopularHeader}>
                        <PopularTagIcon/>
                        <span className={cls.tag}>MOST POPULAR</span>
                    </div>
                    <div className={cls.mostPopularBg}/>
                </div>
            }
        </li>
    );
};