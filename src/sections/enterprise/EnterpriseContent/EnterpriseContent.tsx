import cls from './EnterpriseContent.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import satisfiedCustomer from 'shared/assets/images/double-images/bpo-1.png';
import expandedMap from 'shared/assets/images/double-images/bpo-2.png';
import classNames from 'classnames';
import { RoutePaths } from 'app/providers/AppRouter';

export const EnterpriseContent = () => {
    return (
        <section className={cls.content}>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text tag="h2" variant={TextVariants.TITLE_SMALL_REVERSED} classNamesProps={cls.title}>Improve Satisfaction with Offshore Agents</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.
                    </Text>
                </div>
                <img alt="photo of a satisfied customer" src={satisfiedCustomer} className={cls.image} />
            </div>
            <div className={classNames(cls.contentSection, cls.right)}>
                <img alt="photo of a map" src={expandedMap} className={cls.image} />
                <div className={cls.details}>
                    <Text tag="h2" variant={TextVariants.TITLE_SMALL_REVERSED}>Reduce Support Costs</Text>
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
                    <Text tag="h2" variant={TextVariants.TITLE_SMALL_REVERSED}>Improve sales metrics</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.
                    </Text>
                </div>
                <img alt="photo of a satisfied customer" src={satisfiedCustomer} className={cls.image} />
            </div>
        </section>
    );
};