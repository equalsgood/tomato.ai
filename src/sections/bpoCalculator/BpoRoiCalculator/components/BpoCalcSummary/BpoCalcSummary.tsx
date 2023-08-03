import cls from './BpoCalcSummary.module.css';
import { Divider, Text, TextVariants } from 'shared/components';
import classNames from 'classnames';
import { useAppSelector } from 'hooks';
import { numberFormat } from 'shared/lib';

export const BpoCalcSummary = () => {
    const {
        isCurrentTypeSupport,
        improvePercent,
        calculatedValues: {
            gross,
            savings,
            investment,
        }
    } = useAppSelector((state) => state.bpoCalc);

    return (
        <aside className={cls.summary}>
            <Text tag="h2" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>RESULT SUMMARY</Text>
            {isCurrentTypeSupport !== null &&
                <>
                    <div className={cls.benefits}>
                        <Text tag="h3" variant={TextVariants.SUBTITLE_MEDIUM} classNamesProps={cls.subtitle}>Benefits</Text>
                        {isCurrentTypeSupport ?
                            <>
                                <div className={cls.benefit}>
                                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>CSAT Increase:</Text>
                                    <span className={classNames(cls.amount, { [cls.activeBlue]: !!improvePercent })}>{improvePercent ? `${improvePercent}%` : '%...'}</span>
                                </div>
                                <div className={cls.benefit}>
                                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>FCR Increase:</Text>
                                    <span className={classNames(cls.amount, { [cls.activeBlue]: !!improvePercent })}>{improvePercent ? `${improvePercent}%` : '%...'}</span>
                                </div>
                                <div className={cls.benefit}>
                                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>AHT Decrease:</Text>
                                    <span className={classNames(cls.amount, { [cls.activeYellow]: !!improvePercent })}>{improvePercent ? `${improvePercent}%` : '%...'}</span>
                                </div>
                            </> :
                            <div className={cls.benefit}>
                                <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>SALES Increase:</Text>
                                <span className={classNames(cls.amount, { [cls.activeBlue]: !!improvePercent })}>{improvePercent ? `${improvePercent}%` : '%...'}</span>
                            </div>
                        }
                    </div>
                    <Divider/>
                </>
            }
            <div className={cls.roi}>
                <Text tag="h3" variant={TextVariants.SUBTITLE_MEDIUM} classNamesProps={cls.subtitle}>Annual ROI</Text>
                <div className={cls.benefit}>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>GROSS REVENUE:</Text>
                    <span className={classNames(cls.amount, { [cls.activeGreen]: !!gross, [cls.minus]: gross < 0, })}>{gross ? numberFormat(gross, true) : '%...'}</span>
                </div>
                <div className={cls.benefit}>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>SAVINGS ON TRAINING:</Text>
                    <span className={classNames(cls.amount, { [cls.activeGreen]: !!savings })}>{savings ? `${numberFormat(savings, true)}` : '%...'}</span>
                </div>
                <div className={cls.benefit}>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>TOMATO.AI INVESTMENT</Text>
                    <span className={classNames(cls.amount, { [cls.activeRed]: !!investment })}>{investment ? `-${numberFormat(investment)}` : '%...'}</span>
                </div>
            </div>
            <Divider/>
            <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.additional}>
                The BPO ROI calculator uses your estimates of dollar value per 1% improvement across key performance indicators multiplied by the total percent gain estimated by Tomato.ai across accent, noise, and speech clarity, to estimate an overall ROI.
                <br/>
                <br/>
                The estimated ROI provides an initial figure that can be further refined by running field tests to measure actual impact on metrics using the Tomato.ai solution with a statistically significant set of agents.
            </Text>
        </aside>
    );
};