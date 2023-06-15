import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bpoCalcInitialState } from '../types/BpoCalcSchema';

const bpoCalcSlice = createSlice({
    name: 'bpoCalc',
    initialState: bpoCalcInitialState,

    reducers: {
        changeInput: (state, action) => {
            state.inputs[action.payload.changedProp as keyof typeof bpoCalcInitialState.inputs] = action.payload.value;
        },
        changeSelect: (state, action) => {
            state.selects[action.payload.changedProp as keyof typeof bpoCalcInitialState.selects].value = action.payload.value;
        },
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