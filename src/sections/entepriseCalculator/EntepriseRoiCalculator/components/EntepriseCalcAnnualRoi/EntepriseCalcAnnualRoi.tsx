import cls from './EntepriseCalcAnnualRoi.module.css';
import { Button, ButtonVariants, Text, TextVariants } from 'shared/components';
import { useAppSelector } from 'hooks';
import { numberFormat } from 'shared/lib';
import { useState } from 'react';
import { GetReportPopup } from 'widgets';
import classNames from 'classnames';

export const EnterpriseCalcAnnualRoi = () => {
    const { calculatedValues: { annualRoi } } = useAppSelector((state) => state.enterpriseCalc);
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(prev => !prev);

    return (
        <div className={cls.annual}>
            <div className={cls.description}>
                <Text tag="p" variant={TextVariants.TITLE_REVERSED} classNamesProps={cls.roi}>Annual ROI:</Text>
                { annualRoi ?
                    <span className={classNames(cls.price, { [cls.minus]: annualRoi < 0 })}>{numberFormat(annualRoi)}</span> :
                    <span className={cls.placeholder}>{'$...'}</span>
                }
            </div>
            <Button
                onClick={toggleModal}
                text="Receive detailed report"
                disabled={!annualRoi}
                variant={ButtonVariants.ACTION}
                type='button'
            />
            <GetReportPopup open={modalOpen} onClose={toggleModal}/>
        </div>
    );
};