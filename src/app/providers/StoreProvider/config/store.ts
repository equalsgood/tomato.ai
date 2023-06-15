import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { bpoCalcReducer } from 'slices/bpoCalcSlice';

const rootReducers: ReducersMapObject<StateSchema> = {
    bpoCalc: bpoCalcReducer
};

const combinedReducer = combineReducers(rootReducers);

export const store = configureStore({
    reducer: combinedReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch