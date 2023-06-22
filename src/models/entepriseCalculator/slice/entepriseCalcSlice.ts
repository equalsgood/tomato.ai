import { createSlice } from '@reduxjs/toolkit';
import { EnterpriseAgentTypes, enterpriseCalcInitialState, EnterpriseScales } from '../types/EntepriseCalcSchema';

const enterpriseCalcSlice = createSlice({
    name: 'enterpriseCalc',
    initialState: enterpriseCalcInitialState,

    reducers: {
        changeInput: (state, action) => {
            if(action.payload.changedProp)
                state.inputs[action.payload.changedProp as keyof typeof enterpriseCalcInitialState.inputs] = action.payload.value;

            const {
                agentsNumber,
                agentCost,
                trainingCost,
                csatIncrease,
                fcrIncrease,
                salesIncrease,
            } = state.inputs;

            const improvePercent = state.improvePercent;

            if(agentsNumber !== '' && agentCost !== '' && improvePercent) {
                const grossSavings = (+fcrIncrease * 12 * improvePercent) + (+agentsNumber * +agentCost * 12 * (improvePercent / 100));
                state.calculatedValues.grossSavings = Math.round(grossSavings);
            }
            else
                state.calculatedValues.grossSavings = 0;

            if(trainingCost !== '')
                state.calculatedValues.savings = +trainingCost * 12;
            else
                state.calculatedValues.savings = 0;

            if(agentsNumber !== '')
                state.calculatedValues.investment = +agentsNumber * 50 * 12;
            else
                state.calculatedValues.investment = 0;

            if(state.isCurrentTypeSupport) {
                if(csatIncrease !== '' && improvePercent) {
                    const gross = (+csatIncrease + 12 * improvePercent);
                    state.calculatedValues.gross = Math.round(gross);
                }
                else
                    state.calculatedValues.gross = 0;
            } else if(state.isCurrentTypeSupport === false) {
                if(salesIncrease !== '' && improvePercent) {
                    const gross = +salesIncrease * 12 * improvePercent;
                    state.calculatedValues.gross = Math.round(gross);
                }
                else
                    state.calculatedValues.gross = 0;
            }

            if(state.isCurrentTypeSupport) {
                if(state.calculatedValues.grossSavings && state.calculatedValues.gross && state.calculatedValues.savings && state.calculatedValues.investment)
                    state.calculatedValues.annualRoi = state.calculatedValues.grossSavings + state.calculatedValues.gross + state.calculatedValues.savings - state.calculatedValues.investment;
                else
                    state.calculatedValues.annualRoi = 0;
            } else if(state.isCurrentTypeSupport === false) {
                if(state.calculatedValues.gross && state.calculatedValues.savings && state.calculatedValues.investment)
                    state.calculatedValues.annualRoi = state.calculatedValues.gross + state.calculatedValues.savings - state.calculatedValues.investment;
                else
                    state.calculatedValues.annualRoi = 0;
            }
        },
        changeAgentType: (state, action) => {
            const value = action.payload;

            if(state.agentsType.value !== value) {
                state.isCurrentTypeSupport = value === EnterpriseAgentTypes.SUPPORT;
                state.inputs.csatIncrease = '';
                state.inputs.fcrIncrease = '';
                state.inputs.salesIncrease = '';
            }

            state.agentsType.value = value;
        },
        changeScaleSelect: (state, action) => {
            const { changedProp, value } = action.payload;
            let newImprovePercent = 0;
            let percent = 0;

            if(changedProp === 'accentLevel' || changedProp === 'noiseLevel') {
                if(value === EnterpriseScales.LOW)
                    percent = 1;
                if(value === EnterpriseScales.MEDIUM)
                    percent = 2;
                if(value === EnterpriseScales.HIGH)
                    percent = 3;
            } else {
                if(value === EnterpriseScales.LOW)
                    percent = 3;
                if(value === EnterpriseScales.MEDIUM)
                    percent = 2;
                if(value === EnterpriseScales.HIGH)
                    percent = 1;
            }

            state.scaleSelects[changedProp as keyof typeof enterpriseCalcInitialState.scaleSelects].percent = percent;

            for(const value of Object.values(state.scaleSelects)) {
                const fieldPercent = value.percent;
                newImprovePercent = newImprovePercent + fieldPercent;

                if(fieldPercent === 0) {
                    newImprovePercent = 0;
                    break;
                }
            }

            state.scaleSelects[changedProp as keyof typeof enterpriseCalcInitialState.scaleSelects].value = value;
            state.improvePercent = newImprovePercent;
        }
    }
});

const {
    actions: enterpriseCalcActions,
    reducer: enterpriseCalcReducer,
} = enterpriseCalcSlice;

export {
    enterpriseCalcActions,
    enterpriseCalcReducer,
};