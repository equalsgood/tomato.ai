import background from 'shared/assets/images/cta-light-bg.png';
import firstAgent from 'shared/assets/images/cta-agents/first-agent.png';
import secondAgent from 'shared/assets/images/cta-agents/second-agent.png';
import thirdAgent from 'shared/assets/images/cta-agents/third-agent.png';
import fourthAgent from 'shared/assets/images/cta-agents/fourth-agent.png';
import cls from './CtaTitle.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import React from 'react';
import { RoutePaths } from 'app/providers/AppRouter';

export const CtaTitle = () => {
    return (
        <section className={cls.cta}>
            <div className={cls.content}>
                <div className={cls.agents}>
                    <img alt="first agent picture" src={firstAgent} />
                    <img alt="second agent picture" src={secondAgent} />
                </div>
                <div className={cls.info}>
                    <div className={cls.infoDescription}>
                        <Text tag="h2" variant={TextVariants.TITLE_MEDIUM}>CTA Title here</Text>
                        <Text tag="p" classNamesProps={cls.paragraph} variant={TextVariants.PARAGRAPH_DARK}>“Tomato.ai is an impressive AI technology that effortlessly cleans up voice audio. Its advanced algorithms can</Text>
                    </div>
                    <NavigationLink
                        text="Request Free Demo"
                        to={RoutePaths.HOME}
                        variant={NavigationLinkVariants.ACTION}
                        classNamesProps={cls.actionLink}
                    />
                </div>
                <div className={cls.agents}>
                    <img alt="third agent picture" src={thirdAgent} />
                    <img alt="fourth agent picture" src={fourthAgent} />
                </div>
            </div>
            <img alt='cta title light background' src={background} className={cls.bg} />
        </section>
    );
};