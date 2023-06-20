import cls from './EntepriseCalcAnnualRoi.module.css';
import { Button, Text, TextVariants } from 'shared/components';
import { useAppSelector } from 'hooks';
import { numberFormat } from 'shared/lib';

export const EnterpriseCalcAnnualRoi = () => {
    const { calculatedValues: { annualRoi } } = useAppSelector((state) => state.enterpriseCalc);

    return (
        <div className={cls.annual}>
            <div className={cls.description}>
                <Text tag="p" variant={TextVariants.SUBTITLE_BOLD_REVERSED}>Annual ROI:</Text>
                { annualRoi ?
                    <span className={cls.price}>{numberFormat(annualRoi)}</span> :
                    <span className={cls.placeholder}>{'$...'}</span>
                }
            </div>
            <Button
                text="Receive detailed report"
                disabled={!annualRoi}
            />
        </div>
    );
};