import cls from './BpoIntroduction.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';

export const BpoIntroduction = () => {
    return (
        <section className={cls.intro}>
            <div className={cls.details}>
                <Text width={190} tag="p" variant={TextVariants.BADGE}>SOME TAG HERE</Text>
                <Text tag="h1" variant={TextVariants.TITLE_LARGE} classNamesProps={cls.title}>Grow your offshoring business by using an accent softening filter</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_DARK_MEDIUM} classNamesProps={cls.paragraph}>Solving the #1 and #2 problems BPOs have. Closing the quality gap with onshore agents, and helping expand the pool of qualified offshore hires.</Text>
                <div className={cls.links}>
                    <NavigationLink text="Request Demo" to={RoutePaths.HOME} variant={NavigationLinkVariants.ACTION_BLUE} classNamesProps={cls.link} />
                    <NavigationLink text="Calculate ROI" to={RoutePaths.HOME} variant={NavigationLinkVariants.OUTLINED_BLUE} classNamesProps={cls.link} />
                </div>
            </div>
            <div className={cls.image}></div>
        </section>
    );
};