import cls from './EnterpriseIntroduction.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';
import enterpriseMain from 'shared/assets/images/double-images/ent-1.png';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';

export const EnterpriseIntroduction = () => {
    const { isMobile } = useContext(Context);
    
    return (
        <section className={cls.intro}>
            <div className={cls.imageWrapper}>
                <img src={enterpriseMain} alt="main enterprise image" className={cls.image}></img>
            </div>
            <div className={cls.details}>
                { !isMobile && <Text tag="p" variant={TextVariants.BADGE}>Enterprises</Text> }
                <Text tag="h1" variant={TextVariants.TITLE_LARGE_REVERSED} classNamesProps={cls.title}>Boost CX and sales metrics with an AI accent softening filter</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE_MEDIUM} classNamesProps={cls.paragraph}>Inbound calls benefit from improved customer satisfaction, and outbound calls benefit from improved sales metrics.</Text>
                <div className={cls.links}>
                    <NavigationLink text="Request Demo" to={RoutePaths.REQUEST_DEMO} variant={NavigationLinkVariants.ACTION} classNamesProps={cls.link} isEnterprise />
                    <NavigationLink text="Calculate ROI" to={RoutePaths.ENTERPRISE_CALCULATOR} variant={NavigationLinkVariants.OUTLINED} classNamesProps={cls.link} />
                </div>
            </div>
        </section>
    );
};