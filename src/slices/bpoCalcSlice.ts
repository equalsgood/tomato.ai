import { createSlice } from '@reduxjs/toolkit';

interface BpoCalcSchema {
    text: string;
}

const initialState: BpoCalcSchema = {
    text: '123',
};

const bpoCalcSlice = createSlice({
    name: 'bpoCalc',
    initialState,

    reducers: {
        change: (state) => {
            state.text = '321';
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
    BpoCalcSchema
};