import cls from './EnterpriseContent.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import offshoreAgents from 'shared/assets/images/double-images/ent-2.png';
import offshoreAgentsMobile from 'shared/assets/images/double-images/ent-2-mobile.png';
import metrics from 'shared/assets/images/double-images/ent-3.png';
import metricsMobile from 'shared/assets/images/double-images/ent-3-mobile.png';
import agent from 'shared/assets/images/double-images/ent-4.png';
import agentMobile from 'shared/assets/images/double-images/ent-4-mobile.png';
import classNames from 'classnames';
import { RoutePaths } from 'app/providers/AppRouter';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';

export const EnterpriseContent = () => {
    const { isMobile } = useContext(Context);

    return (
        <section className={cls.content}>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text classNamesProps={cls.title} tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL_REVERSED}>Improve Satisfaction with Offshore Agents</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.
                    </Text>
                </div>
                <img alt="photo of offshore agents" src={ isMobile ? offshoreAgentsMobile : offshoreAgents} className={classNames(cls.image, cls.agentsImage)} />
            </div>
            <div className={classNames(cls.contentSection, cls.right)}>
                <img alt="photo of metrics" src={isMobile ? metricsMobile : metrics} className={cls.image} />
                <div className={cls.details}>
                    <Text classNamesProps={cls.title} tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL_REVERSED}>Reduce Support Costs</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque.
                    </Text>
                    {!isMobile &&
                        <NavigationLink text="Cost Savings Calculator" to={RoutePaths.ENTERPRISE_CALCULATOR}
                            variant={NavigationLinkVariants.ACTION_TEXT}
                            classNamesProps={cls.calculatorLink}/>
                    }
                </div>
            </div>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text classNamesProps={cls.title} tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL_REVERSED}>Improve sales metrics</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.
                    </Text>
                </div>
                <img alt="photo of a satisfied agent" src={isMobile ? agentMobile : agent} className={cls.image} />
            </div>
        </section>
    );
};