import cls from './EntepriseRoiCalculator.module.css';
import { Text, TextVariants } from 'shared/components';
import { EnterpriseCalculator } from './components/EntepriseCalculator/EntepriseCalculator';
import { EnterpriseCalcAnnualRoi } from './components/EntepriseCalcAnnualRoi/EntepriseCalcAnnualRoi';
import { EnterpriseCalcSummary } from './components/EntepriseCalcSummary/EntepriseCalcSummary';

export const EnterpriseRoiCalculator = () => {
    return (
        <section className={cls.section}>
            <div className={cls.sectionTitle}>
                <Text tag="p" variant={TextVariants.BADGE} width={190}>SOME COOL TAG</Text>
                <Text tag="h1" variant={TextVariants.TITLE}>Enterprise ROI Calculator</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.titleParagraph}>Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. </Text>
            </div>
            <div className={cls.contentContainer}>
                <div className={cls.calculatorContainer}>
                    <EnterpriseCalculator/>
                    <EnterpriseCalcAnnualRoi/>
                </div>
                <EnterpriseCalcSummary/>
            </div>
        </section>
    );
};