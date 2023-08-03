import cls from './BpoContent.module.css';
import { NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import satisfiedCustomer from 'shared/assets/images/double-images/bpo-2.png';
import satisfiedCustomerMobile from 'shared/assets/images/double-images/bpo-2-mobile.png';
import expandedMap from 'shared/assets/images/double-images/bpo-3.png';
import expandedMapMobile from 'shared/assets/images/double-images/bpo-3-mobile.png';
import satisfiedWorker from 'shared/assets/images/double-images/bpo-4.png';
import satisfiedWorkerMobile from 'shared/assets/images/double-images/bpo-4-mobile.png';
import classNames from 'classnames';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';
import { RoutePaths } from 'app/providers/AppRouter';

export const BpoContent = () => {
    const { isMobile } = useContext(Context);
    return (
        <section className={cls.content}>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text classNamesProps={cls.title} tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL}>Boost Customer Satisfaction</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>
                        Enhancing offshore agent intelligible improves CSAT. With improved CX offshore call centers can be sure to get more call volume from existing and new customers.
                    </Text>
                    <NavigationLink
                        text="Estimate your ROI"
                        to={RoutePaths.BPO_CALCULATOR}
                        variant={NavigationLinkVariants.ACTION_TEXT}
                        classNamesProps={cls.calculatorLink}
                    />
                </div>
                <img alt="photo of a satisfied customer" src={isMobile ? satisfiedCustomerMobile : satisfiedCustomer} className={cls.image} />
            </div>
            <div className={classNames(cls.contentSection, cls.right)}>
                <img alt="photo of a map" src={isMobile ? expandedMapMobile : expandedMap} className={classNames(cls.image, cls.imageMap)} />
                <div className={cls.details}>
                    <Text classNamesProps={cls.title} tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL}>Expand Offshore Hiring Pool</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>
                        Offshore call centers have a hard time finding enough talent in market. By using an AI voice filter to soften accents of candidates they can massively scale hiring in existing markets, and in new ones
                    </Text>
                </div>
            </div>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text classNamesProps={cls.title} tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL}>Improve sales metrics</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>
                        When outbound sales agents speak more clearly, and pronounce words the way customers are used to, they are able to improve results, increasing revenue, close rates, and qualification rates.
                    </Text>
                </div>
                <img alt="photo of a satisfied worker" src={isMobile ? satisfiedWorkerMobile : satisfiedWorker} className={cls.image} />
            </div>
        </section>
    );
};