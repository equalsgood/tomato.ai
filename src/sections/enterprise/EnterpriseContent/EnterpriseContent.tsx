import cls from './EnterpriseContent.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import offshoreAgents from 'shared/assets/images/double-images/ent-2.png';
import metrics from 'shared/assets/images/double-images/ent-3.png';
import agent from 'shared/assets/images/double-images/ent-4.png';
import classNames from 'classnames';
import { RoutePaths } from 'app/providers/AppRouter';

export const EnterpriseContent = () => {
    return (
        <section className={cls.content}>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL_REVERSED} classNamesProps={cls.title}>Improve Satisfaction with Offshore Agents</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.
                    </Text>
                </div>
                <img alt="photo of offshore agents" src={offshoreAgents} className={cls.image} />
            </div>
            <div className={classNames(cls.contentSection, cls.right)}>
                <img alt="photo of metrics" src={metrics} className={cls.image} />
                <div className={cls.details}>
                    <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL_REVERSED}>Reduce Support Costs</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque.
                    </Text>
                    <NavigationLink text="Cost Savings Calculator" to={RoutePaths.HOME} variant={NavigationLinkVariants.ACTION_TEXT} classNamesProps={cls.calculatorLink}/>
                </div>
            </div>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL_REVERSED}>Improve sales metrics</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.
                    </Text>
                </div>
                <img alt="photo of a satisfied agent" src={agent} className={cls.image} />
            </div>
        </section>
    );
};