import cls from './EntepriseCalculator.module.css';
import { Input, Select } from 'shared/components';
import { useAppDispatch, useAppSelector } from 'hooks';
import classNames from 'classnames';
import { InputValidations } from 'shared/lib';
import { enterpriseCalcActions } from 'models/entepriseCalculator';

export const EnterpriseCalculator = () => {
    const dispatch = useAppDispatch();
    const {
        isCurrentTypeSupport,
        agentsType,
        inputs: {
            agentsNumber,
            agentCost,
            trainingCost,
            csatIncrease,
            fcrIncrease,
            salesIncrease,
        },
        scaleSelects: {
            accentLevel,
            speechClarity,
            noiseLevel
        }
    } = useAppSelector((state) => state.enterpriseCalc);

    const inputChangeHandler = (changedProp: string, value: string) => {
        dispatch(enterpriseCalcActions.changeInput({ changedProp, value }));
    };

    const agentTypeChangeHandler = (value: string) => {
        dispatch(enterpriseCalcActions.changeAgentType(value));
        dispatch(enterpriseCalcActions.changeInput({ changedProp: false, value: false }));
    };

    const scaleSelectChangeHandler = (changedProp: string, value: string) => {
        dispatch(enterpriseCalcActions.changeScaleSelect({ changedProp, value }));
        dispatch(enterpriseCalcActions.changeInput({ changedProp: false, value: false }));
    };

    return (
        <div className={cls.calculator}>
            <Input
                type="text"
                validationType={InputValidations.NUMBER}
                info="Total number of full shift agents, including combining part time shifts"
                label="Number of Agents"
                placeholder="1000"
                value={agentsNumber}
                onInputChange={(value) => inputChangeHandler('agentsNumber', value)}
            />
            <Select
                label="Type of Agents"
                info="Support calls relate to helping existing customers, while sales calls related to adding new customers or upselling existing customers"
                value={agentsType.value}
                options={agentsType.options}
                onSelectChange={agentTypeChangeHandler}
            />
            <Input
                type="text"
                validationType={InputValidations.MONEY}
                info="Total cost per full shift agent, based on an hourly rate times hours per month, or a monthly salary"
                label="Monthly Cost per Agent"
                placeholder="$2500"
                value={agentCost}
                onInputChange={(value) => inputChangeHandler('agentCost', value)}
            />
            <Input
                type="text"
                validationType={InputValidations.MONEY}
                info="Cost of providing accent training across all agents per month"
                label="Monthly Accent Training Costs"
                placeholder="$5000"
                value={trainingCost}
                onInputChange={(value) => inputChangeHandler('trainingCost', value)}
            />
            {isCurrentTypeSupport &&
                <>
                    <Input
                        type="text"
                        validationType={InputValidations.MONEY}
                        info="Monthly estimated increase in revenues per 1% of absolute CSAT Increase (e.g. from 77% to 78%)"
                        label="Monthly Revenue per 1% CSAT Increase"
                        placeholder="$2500"
                        value={csatIncrease}
                        onInputChange={(value) => inputChangeHandler('csatIncrease', value)}
                        doubleLabel
                    />
                    <Input
                        type="text"
                        validationType={InputValidations.MONEY}
                        info="Monthly estimated increase in savings per 1% of absolute First Call Resolution Increase (e.g. from 70% to 71%)"
                        label="Monthly Savings per 1% FCR Increase"
                        placeholder="$10000"
                        value={fcrIncrease}
                        onInputChange={(value) => inputChangeHandler('fcrIncrease', value)}
                        doubleLabel
                    />
                </>
            }
            {isCurrentTypeSupport === false &&
                <div className={cls.singleLine}>
                    <Input
                        type="text"
                        validationType={InputValidations.MONEY}
                        info="Monthly estimated increase in overall revenue for each absolute increase in the sales key performance indicator. For example close rate increasing from 5% to 6%, or pre-qualified leads increasing from 2% to 3%."
                        label="Monthly Revenue per 1% Sales Increase"
                        placeholder="$2500"
                        value={salesIncrease}
                        onInputChange={(value) => inputChangeHandler('salesIncrease', value)}
                    />
                </div>
            }
            <div className={classNames(cls.scaleSelects, cls.singleLine)}>
                <Select
                    label="Accent Level"
                    info="High accent levels across agents are clearly noticed by customers. Medium accent levels are somewhat noticed by customers. Low accent levels are hardly noticed by customers."
                    value={accentLevel.value}
                    options={accentLevel.options}
                    onSelectChange={(value) => scaleSelectChangeHandler('accentLevel', value)}
                />
                <Select
                    label="Noise level"
                    info="High noise levels across agents are clearly noticed by customers. Medium accent levels are somewhat noticed by customers. Low accent levels are hardly noticed by customers."
                    value={noiseLevel.value}
                    options={noiseLevel.options}
                    onSelectChange={(value) => scaleSelectChangeHandler('noiseLevel', value)}
                />
                <Select
                    label="Speech Clarity"
                    info="High speech clarity levels across agents means their microphone quality is high and the agent is properly using it, so their voice is not breathy, hard to hear, or choppy. Medium voice clarity levels have the above mentioned issues sometimes. Low voice clarity levels have the above mentioned issues frequently."
                    value={speechClarity.value}
                    options={speechClarity.options}
                    onSelectChange={(value) => scaleSelectChangeHandler('speechClarity', value)}
                />
            </div>
        </div>
    );
};