import cls from './BpoCalculator.module.css';
import { Input, Select } from 'shared/components';
import { InputValidations } from 'shared/lib/validation';
import { useAppDispatch, useAppSelector } from 'hooks';
import { bpoCalcActions } from 'models/bpoCalculator';
import { useMemo } from 'react';

export const BpoCalculator = () => {
    const dispatch = useAppDispatch();
    const {
        agentsNumber,
        agentCost,
        trainingCost,
        csatIncrease,
        fcrIncrease,
        salesIncrease,
    } = useAppSelector((state) => state.bpoCalc.inputs);

    const {
        agentsType,
        accentLevel,
        speechClarity,
        noiseLevel
    } = useAppSelector((state) => state.bpoCalc.selects);

    const inputChangeHandler = (changedProp: string, value: string) => {
        dispatch(bpoCalcActions.changeInput({ changedProp, value }));
    };

    const selectChangeHandler = (changedProp: string, value: string) => {
        dispatch(bpoCalcActions.changeSelect({ changedProp, value }));
    };

    const agentsTypeMemo = useMemo(() => agentsType, [agentsType]);
    const agentsTypeOptions = useMemo(() => agentsTypeMemo.options, [agentsTypeMemo]);

    return (
        <div className={cls.calculator}>
            <Input
                type="text"
                validationType={InputValidations.NUMBER}
                info="information"
                label="Number of Agents"
                placeholder="1000"
                value={agentsNumber}
                onInputChange={(value) => inputChangeHandler('agentsNumber', value)}
            />
            <Select
                label="Type of Agents"
                info="information"
                value={agentsType.value}
                options={agentsTypeOptions}
                onSelectChange={(value) => selectChangeHandler('agentsType', value)}
            />
            <Input
                type="text"
                validationType={InputValidations.MONEY}
                info="information"
                label="Monthly Cost per Agent"
                placeholder="$2500"
                value={agentCost}
                onInputChange={(value) => inputChangeHandler('agentCost', value)}
            />
            <Input
                type="text"
                validationType={InputValidations.MONEY}
                info="information"
                label="Monthly Accent Training Costs"
                placeholder="$5000"
                value={trainingCost}
                onInputChange={(value) => inputChangeHandler('trainingCost', value)}
            />
            <Input
                type="text"
                validationType={InputValidations.MONEY}
                info="information"
                label="Revenue per 1% CSAT increase"
                placeholder="$2500"
                value={csatIncrease}
                onInputChange={(value) => inputChangeHandler('csatIncrease', value)}
            />
            <Input
                type="text"
                validationType={InputValidations.MONEY}
                info="information"
                label="Revenue per 1% FCR Increase"
                placeholder="$10000"
                value={fcrIncrease}
                onInputChange={(value) => inputChangeHandler('fcrIncrease', value)}
            />
        </div>
    );
};