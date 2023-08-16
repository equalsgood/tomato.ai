import cls from './EntepriseRoiCalculator.module.css';
import { Text, TextVariants } from 'shared/components';
import { EnterpriseCalculator } from './components/EntepriseCalculator/EntepriseCalculator';
import { EnterpriseCalcAnnualRoi } from './components/EntepriseCalcAnnualRoi/EntepriseCalcAnnualRoi';
import { EnterpriseCalcSummary } from './components/EntepriseCalcSummary/EntepriseCalcSummary';
import firstBackground from 'shared/assets/images/bg/calc-bg-rect-1.png';
import secondBackground from 'shared/assets/images/bg/calc-bg-rect-2.png';

export const EnterpriseRoiCalculator = () => {
    return (
        <section className={cls.section}>
            <div className={cls.sectionTitle}>
                <Text tag="p" variant={TextVariants.BADGE}>Enterprises</Text>
                <Text tag="h1" variant={TextVariants.TITLE} classNamesProps={cls.title}>ROI Calculator</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.titleParagraph}>The Enterprise ROI calculator assess the financial benefit across customer support agents, and separately sales agents, based on their average level of accent, noise, and speech clarity on calls.</Text>
            </div>
            <div className={cls.contentContainer}>
                <div className={cls.calculatorContainer}>
                    <EnterpriseCalculator/>
                    <EnterpriseCalcAnnualRoi/>
                </div>
                <EnterpriseCalcSummary/>
            </div>
            <img alt="background image 1" src={firstBackground} className={cls.right} />
            <img alt="background image 2" src={secondBackground} className={cls.left} />
        </section>
    );
};