import cls from './PlanDescription.module.css';
import { Plan } from '../../PlansIntroduction';
import { Divider, NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import AvailableIcon from 'shared/assets/icons/plans/available.svg';
import UnavailableIcon from 'shared/assets/icons/plans/unavailable.svg';
import VipIcon from 'shared/assets/icons/plans/vip.svg';
import classNames from 'classnames';
import PopularTagIcon from 'shared/assets/icons/plans/popular.svg';
import { RoutePaths } from 'app/providers/AppRouter';
import { requestDemoActions } from 'models/requestDemo';
import { useAppDispatch } from 'hooks';

export const PlanDescription = (props: Plan) => {
    const dispatch = useAppDispatch();
    const { icon, name, cost, features, mostPopular } = props;
    const clickLinkHandler = () => {
        dispatch(requestDemoActions.changeSelectedPlan(name));
    };

    return (
        <li className={classNames(cls.description, { [cls.mostPopular]: mostPopular })}>
            <div className={cls.descriptionCard}>
                <div className={cls.titleWrapper}>
                    <div className={cls.icon}>
                        {icon}
                    </div>
                    <Text tag="h2" variant={TextVariants.TITLE} classNamesProps={cls.title}>{name}</Text>
                </div>
                <ul className={cls.features}>
                    {features.map((feature, index) =>
                        <li key={`${feature}-${name}-${index}`} className={cls.feature}>
                            <div className={cls.icon}>
                                {feature.status === 'available' && <AvailableIcon/>}
                                {feature.status === 'unavailable' && <UnavailableIcon/>}
                                {feature.status === 'vip' && <VipIcon/>}
                            </div>
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
                        <Text tag="p" variant={TextVariants.TITLE} classNamesProps={cls.cost}>{cost}</Text>
                    </div>
                    <NavigationLink
                        classNamesProps={cls.link}
                        onClick={clickLinkHandler}
                        to={RoutePaths.REQUEST_DEMO}
                        text="Choose Plan"
                        variant={ mostPopular ? NavigationLinkVariants.ACTION : NavigationLinkVariants.OUTLINED}
                    />
                </div>
            </div>
            { mostPopular &&
                <div className={cls.mostPopularBadge}>
                    <div className={cls.mostPopularHeader}>
                        <div className={cls.icon}>
                            <PopularTagIcon/>
                        </div>
                        <span className={cls.tag}>MOST POPULAR</span>
                    </div>
                    <div className={cls.mostPopularBg}/>
                </div>
            }
        </li>
    );
};