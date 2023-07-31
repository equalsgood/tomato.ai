import backgroundLight from 'shared/assets/images/cta-light-bg.png';
import backgroundDark from 'shared/assets/images/cta-dark-bg.png';
import firstAgent from 'shared/assets/images/cta-agents/first-agent.png';
import secondAgent from 'shared/assets/images/cta-agents/second-agent.png';
import thirdAgent from 'shared/assets/images/cta-agents/third-agent.png';
import fourthAgent from 'shared/assets/images/cta-agents/fourth-agent.png';
import cls from './CtaTitle.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import React, { useContext } from 'react';
import { RoutePaths } from 'app/providers/AppRouter';
import { Context } from 'app/providers/ContextProvider';
import { CtaTitleMobile } from 'sections/common/CtaTitle/components/CtaTitleMobile/CtaTitleMobile';

interface CtaTitleProps {
    isEnterprise?: boolean;
}

export const CtaTitle = ({ isEnterprise = false }: CtaTitleProps) => {
    const { isMobile } = useContext(Context);

    if(isMobile) {
        return (
            <CtaTitleMobile isEnterprise={isEnterprise}/>
        );
    }

    return (
        <section className={cls.ctaContainer}>
            <div className={cls.cta}>
                <div className={cls.content}>
                    <div className={cls.leftAgents}>
                        <img alt="first agent picture" className={cls.firstAgent} src={firstAgent} />
                        <img alt="second agent picture" src={secondAgent} className={cls.secondAgent} />
                    </div>
                    <div className={cls.info}>
                        <div className={cls.infoDescription}>
                            <Text tag="h2" classNamesProps={cls.title} variant={isEnterprise ? TextVariants.TITLE_MEDIUM_REVERSED : TextVariants.TITLE_MEDIUM}>Soften Accents Now</Text>
                            <Text tag="p" classNamesProps={cls.paragraph} variant={isEnterprise ? TextVariants.PARAGRAPH_TITLE : TextVariants.PARAGRAPH_DARK}>Boost offshoring customer satisfaction and close rates by making agents more intelligible and credible</Text>
                        </div>
                        <NavigationLink
                            text="Request Free Demo"
                            to={RoutePaths.REQUEST_DEMO}
                            variant={NavigationLinkVariants.ACTION}
                            classNamesProps={cls.actionLink}
                        />
                    </div>
                    <div className={cls.rightAgents}>
                        <img alt="third agent picture" className={cls.thirdAgent} src={thirdAgent} />
                        <div className={cls.fourthAgent}>
                            <img alt="fourth agent picture" src={fourthAgent} />
                        </div>
                    </div>
                </div>
                {isEnterprise ?
                    <img alt='cta title dark background' src={backgroundDark} className={cls.bg} /> :
                    <img alt='cta title light background' src={backgroundLight} className={cls.bg} />
                }
            </div>
        </section>
    );
};
