import cls from './CtaTitleMobile.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';
import firstAgent from 'shared/assets/images/cta-agents/first-agent.png';
import secondAgent from 'shared/assets/images/cta-agents/second-agent.png';
import fourthAgent from 'shared/assets/images/cta-agents/fourth-agent.png';
import React from 'react';
import classNames from 'classnames';

interface CtaTitleMobileProps {
    isEnterprise?: boolean | undefined;
}

export const CtaTitleMobile = ({ isEnterprise = false }: CtaTitleMobileProps) => {
    return (
        <section className={classNames(cls.section, { [cls.dark]: isEnterprise })}>
            <Text tag="h2" classNamesProps={cls.title} variant={TextVariants.TITLE}>CTA Title here</Text>
            <Text tag="p" classNamesProps={cls.paragraph} variant={TextVariants.PARAGRAPH_DARK}>“Tomato.ai is an impressive AI technology that effortlessly cleans up voice audio. Its advanced algorithms can</Text>
            <NavigationLink text="Request Free Demo" to={RoutePaths.REQUEST_DEMO} variant={NavigationLinkVariants.ACTION} classNamesProps={cls.action}/>
            <div className={cls.agents}>
                <img alt="first agent picture" className={cls.firstAgent} src={firstAgent} />
                <img alt="second agent picture" src={secondAgent} className={cls.secondAgent} />
                <img alt="fourth agent picture" className={cls.fourthAgent} src={fourthAgent} />
            </div>
        </section>
    );
};