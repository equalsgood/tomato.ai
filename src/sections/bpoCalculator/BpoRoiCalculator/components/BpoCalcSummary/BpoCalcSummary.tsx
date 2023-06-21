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
                <Text tag="h3" variant={TextVariants.SUBTITLE_MEDIUM} classNamesProps={cls.subtitle}>ROI</Text>
                <div className={cls.benefit}>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>GROSS REVENUE:</Text>
                    <span className={classNames(cls.amount, { [cls.activeGreen]: !!gross, [cls.minus]: gross < 0, })}>{gross ? numberFormat(gross) : '%...'}</span>
                </div>
                <div className={cls.benefit}>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>SAVINGS ON TRAINING:</Text>
                    <span className={classNames(cls.amount, { [cls.activeGreen]: !!savings })}>{savings ? `+${numberFormat(savings)}` : '%...'}</span>
                </div>
                <div className={cls.benefit}>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.prop}>TOMATO.AI INVESTMENT</Text>
                    <span className={classNames(cls.amount, { [cls.activeRed]: !!investment })}>{investment ? `-${numberFormat(investment)}` : '%...'}</span>
                </div>
            </div>
            <Divider/>
            <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.additional}>
                Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.
            </Text>
        </aside>
    );
};