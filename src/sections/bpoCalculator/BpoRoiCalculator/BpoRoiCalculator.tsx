import cls from './BpoRoiCalculator.module.css';
import { Text, TextVariants } from 'shared/components';
import { BpoCalculator } from './components/BpoCalculator/BpoCalculator';
import { BpoCalcAnnualRoi } from './components/BpoCalcAnnualRoi/BpoCalcAnnualRoi';
import { BpoCalcSummary } from './components/BpoCalcSummary/BpoCalcSummary';
import firstBackground from 'shared/assets/images/bg/calc-bg-rect-1.png';
import secondBackground from 'shared/assets/images/bg/calc-bg-rect-2.png';

export const BpoRoiCalculator = () => {
    return (
        <section className={cls.section}>
            <div className={cls.sectionTitle}>
                <Text tag="p" variant={TextVariants.BADGE}>BPOs</Text>
                <Text tag="h1" variant={TextVariants.TITLE} classNamesProps={cls.title}>ROI Calculator</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.titleParagraph}>The BPO ROI calculator assess the financial benefit across customer support agents, and separately sales agents, based on their average level of accent, noise, and speech clarity on calls.</Text>
            </div>
            <div className={cls.contentContainer}>
                <div className={cls.calculatorContainer}>
                    <BpoCalculator/>
                    <BpoCalcAnnualRoi/>
                </div>
                <BpoCalcSummary/>
            </div>
            <img alt="background image 1" src={firstBackground} className={cls.right} />
            <img alt="background image 2" src={secondBackground} className={cls.left} />
        </section>
    );
};