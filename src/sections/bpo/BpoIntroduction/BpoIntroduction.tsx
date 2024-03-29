import cls from './BpoIntroduction.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';
import bpoMain from 'shared/assets/images/double-images/bpo-1.png';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';


export const BpoIntroduction = () => {
    const { isMobile } = useContext(Context);

    return (
        <section className={cls.intro}>
            <div className={cls.details}>
                <div>
                    { !isMobile && <Text tag="p" variant={TextVariants.BADGE}>BPOs</Text> }
                    <Text tag="h1" variant={TextVariants.TITLE_LARGE} classNamesProps={cls.title}>Grow your offshoring business by using an accent softening filter</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_DARK_MEDIUM} classNamesProps={cls.paragraph}>Solving the #1 and #2 problems BPOs have. Closing the quality gap with onshore agents, and helping expand the pool of qualified offshore hires.</Text>
                    <div className={cls.links}>
                        <NavigationLink text="Request Demo" to={RoutePaths.REQUEST_DEMO} variant={NavigationLinkVariants.ACTION_BLUE} classNamesProps={cls.link} />
                        <NavigationLink text="Calculate ROI" to={RoutePaths.BPO_CALCULATOR} variant={NavigationLinkVariants.OUTLINED_BLUE} classNamesProps={cls.link} />
                    </div>
                </div>
            </div>
            <div className={cls.imageWrapper}>
                <img src={bpoMain} alt="photo of a happy worker" className={cls.image}></img>
            </div>
        </section>
    );
};