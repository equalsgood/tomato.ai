import cls from './HomeIntroTitle.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';
import RedArrowIcon from 'shared/assets/icons/arrow-red-right.svg';
import agent from 'shared/assets/images/agent-home-page.png';

export const HomeIntroTitle = () => {
    return (
        <div className={cls.homeIntroTitle}>
            <div className={cls.info}>
                <Text tag="h1" variant={TextVariants.TITLE}>
                    Soften accents for clearer agent calls
                </Text>
                <Text width={503} tag="p" variant={TextVariants.PARAGRAPH_TITLE}>
                    AI powered voice filter clarifies offshore agent voices as they speak, resulting in improved CSAT and sales metrics.
                </Text>
                <div className={cls.links}>
                    <NavigationLink text="Request Demo" to={RoutePaths.HOME} variant={NavigationLinkVariants.ACTION} />
                    <div className={cls.action}>
                        <Text tag="p" variant={TextVariants.ACTION_RED}>Listen Demos</Text>
                        <RedArrowIcon/>
                    </div>
                </div>
            </div>
            <img alt="Agent photo" src={agent} />
        </div>
    );
};

