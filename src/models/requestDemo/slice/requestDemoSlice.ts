import { createSlice } from '@reduxjs/toolkit';
import { requestDemoInitialState } from '../types/RequestDemoSchema';

const requestDemoSlice = createSlice({
    name: 'requestDemo',
    initialState: requestDemoInitialState,

    reducers: {
        changeSelectedPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
    }
});

const {
    actions: requestDemoActions,
    reducer: requestDemoReducer,
} = requestDemoSlice;

export {
    requestDemoActions,
    requestDemoReducer,
};