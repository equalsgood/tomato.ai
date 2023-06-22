import cls from './BpoContent.module.css';
import { Text, TextVariants } from 'shared/components';
import satisfiedCustomer from 'shared/assets/images/double-images/bpo-2.png';
import expandedMap from 'shared/assets/images/double-images/bpo-3.png';
import satisfiedWorker from 'shared/assets/images/double-images/bpo-4.png';
import classNames from 'classnames';

export const BpoContent = () => {
    return (
        <section className={cls.content}>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL}>Boost Customer Satisfaction</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>
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
                    <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL}>Expand Offshore Hiring Pool</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.
                    </Text>
                </div>
            </div>
            <div className={classNames(cls.contentSection, cls.left)}>
                <div className={cls.details}>
                    <Text tag="h2" variant={TextVariants.TITLE_EXTRA_SMALL}>Improve sales metrics</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur.
                        <br/>
                        <br/>
                        Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in.
                    </Text>
                </div>
                <img alt="photo of a satisfied worker" src={satisfiedWorker} className={cls.image} />
            </div>
        </section>
    );
};