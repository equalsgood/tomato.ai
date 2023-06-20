import { createSlice } from '@reduxjs/toolkit';
import { BpoAgentTypes, bpoCalcInitialState, BpoScales } from '../types/BpoCalcSchema';

const bpoCalcSlice = createSlice({
    name: 'bpoCalc',
    initialState: bpoCalcInitialState,

    reducers: {
        changeInput: (state, action) => {
            if(action.payload.changedProp)
                state.inputs[action.payload.changedProp as keyof typeof bpoCalcInitialState.inputs] = action.payload.value;

            const {
                agentsNumber,
                agentCost,
                trainingCost,
                csatIncrease,
                fcrIncrease,
                salesIncrease,
            } = state.inputs;

            const improvePercent = state.improvePercent;

            if(trainingCost !== '')
                state.calculatedValues.savings = +trainingCost * 12;
            else
                state.calculatedValues.savings = 0;

            if(agentsNumber !== '')
                state.calculatedValues.investment = +agentsNumber * 50 * 12;
            else
                state.calculatedValues.investment = 0;

            if(state.isCurrentTypeSupport) {
                if(fcrIncrease !== '' && csatIncrease !== '' && agentsNumber !== '' && agentCost !== '' && improvePercent) {
                    const gross = (+fcrIncrease * improvePercent) + (+csatIncrease * improvePercent) - (+agentsNumber * +agentCost * (improvePercent / 100));
                    state.calculatedValues.gross = Math.round(gross);
                }
                else
                    state.calculatedValues.gross = 0;
            } else if(state.isCurrentTypeSupport === false) {
                if(salesIncrease !== '' && improvePercent) {
                    const gross = +salesIncrease * improvePercent;
                    state.calculatedValues.gross = Math.round(gross);
                }
                else
                    state.calculatedValues.gross = 0;
            }

            if(state.calculatedValues.gross && state.calculatedValues.savings && state.calculatedValues.investment)
                state.calculatedValues.annualRoi = state.calculatedValues.gross + state.calculatedValues.savings - state.calculatedValues.investment;
            else
                state.calculatedValues.annualRoi = 0;
        },
        changeAgentType: (state, action) => {
            const value = action.payload;

            if(state.agentsType.value !== value) {
                state.isCurrentTypeSupport = value === BpoAgentTypes.SUPPORT;
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
                if(value === BpoScales.LOW)
                    percent = 1;
                if(value === BpoScales.MEDIUM)
                    percent = 2;
                if(value === BpoScales.HIGH)
                    percent = 3;
            } else {
                if(value === BpoScales.LOW)
                    percent = 3;
                if(value === BpoScales.MEDIUM)
                    percent = 2;
                if(value === BpoScales.HIGH)
                    percent = 1;
            }

            state.scaleSelects[changedProp as keyof typeof bpoCalcInitialState.scaleSelects].percent = percent;

            for(const key in state.scaleSelects) {
                newImprovePercent = newImprovePercent + state.scaleSelects[key as keyof typeof bpoCalcInitialState.scaleSelects].percent;
            }

            state.scaleSelects[changedProp as keyof typeof bpoCalcInitialState.scaleSelects].value = value;
            state.improvePercent = newImprovePercent;
        }
    }
});

const {
    actions: bpoCalcActions,
    reducer: bpoCalcReducer,
} = bpoCalcSlice;

export {
    bpoCalcActions,
    bpoCalcReducer,
};