import cls from './BpoCalcAnnualRoi.module.css';
import { Button, ButtonVariants, Text, TextVariants } from 'shared/components';
import { useAppSelector } from 'hooks';
import { numberFormat } from 'shared/lib';
import { ReportDocument } from 'widgets';
import classNames from 'classnames';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

export const BpoCalcAnnualRoi = () => {
    const {
        calculatedValues: { annualRoi, gross, savings, investment },
        inputs: { agentsNumber, fcrIncrease, csatIncrease, salesIncrease, agentCost, trainingCost },
        improvePercent,
        isCurrentTypeSupport
    } = useAppSelector((state) => state.bpoCalc);

    return (
        <div className={cls.annual}>
            <div className={cls.description}>
                <Text tag="p" variant={TextVariants.TITLE_REVERSED} classNamesProps={cls.roi}>Annual ROI:</Text>
                { annualRoi ?
                    <span className={classNames(cls.price, { [cls.minus]: annualRoi < 0 })}>{numberFormat(annualRoi)}</span> :
                    <span className={cls.placeholder}>{'$...'}</span>
                }
            </div>
            <div className={classNames(cls.linkContainer, { [cls.disabled]: !annualRoi })}>
                <PDFDownloadLink
                    document={
                        <ReportDocument
                            isBpo={true}
                            isSupport={!!isCurrentTypeSupport}
                            annualRoi={annualRoi}
                            gross={gross}
                            savings={savings}
                            investment={investment}
                            improvePercent={improvePercent}
                            agentsNumber={agentsNumber}
                            fcrIncrease={fcrIncrease}
                            csatIncrease={csatIncrease}
                            salesIncrease={salesIncrease}
                            agentCost={agentCost}
                            trainingCost={trainingCost}
                            grossSavings={0}
                        />}
                    fileName="report.pdf"
                >
                    {({ blob, url, loading, error }) =>
                        <Button
                            classNamesProps={cls.button}
                            text="Receive detailed report"
                            disabled={loading || !annualRoi}
                            variant={ButtonVariants.ACTION}
                            type='button'
                        />
                    }
                </PDFDownloadLink>
            </div>
        </div>
    );
};