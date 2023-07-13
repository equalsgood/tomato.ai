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
                            <Text tag="h2" variant={isEnterprise ? TextVariants.TITLE_MEDIUM_REVERSED : TextVariants.TITLE_MEDIUM}>CTA Title here</Text>
                            <Text tag="p" classNamesProps={cls.paragraph} variant={isEnterprise ? TextVariants.PARAGRAPH_TITLE : TextVariants.PARAGRAPH_DARK}>“Tomato.ai is an impressive AI technology that effortlessly cleans up voice audio. Its advanced algorithms can</Text>
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
                        <img alt="fourth agent picture" className={cls.fourthAgent} src={fourthAgent} />
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
